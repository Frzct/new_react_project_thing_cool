import * as zod from 'zod'
import { _isoDate } from 'zod/v4/core'

export const Validators = {
    'password': zod.string()
                    .refine(str => (str.length >= 6 && str.length <= 25)),
    'user': zod.string()
                    .refine(str => (str.length >= 3 && str.length <= 15)),
    'displayName': zod.string()
                    .refine(str => (str.length >= 3 && str.length <= 15)),
    'aboutMe': zod.string()
                    .refine(str => (str.length <= 150)),
    'joinDate': zod.iso.datetime()
}

//console.log(new Date().toISOString())
//

export const UpdateWhitelist = {
    "user": Validators.user,
    "displayName": Validators.displayName,
    "aboutMe": Validators.aboutMe
}

export const AddUserWhitelist = {
    "user": Validators.user,
    "displayName": Validators.displayName,
    "aboutMe": Validators.aboutMe,
    "password": Validators.password,
    "joinDate": Validators.joinDate
}

//

export default function ValidateData(Data, Whitelist){

    for (const Field of Object.keys(Data)){

        const type = Whitelist[Field]
        
        if (!type) { return }

        if (typeof type == 'object'){
            //console.log("begin parse...", Field)
            const response = type.parse(Data[Field])
            //console.log("parse ended")

            if (!response){
                return response
            }

        } else {
            //console.log('str type')
            if (typeof Data[Field] !== type) {
                return "Field " + Field + " expects type " + type
            }
        }

    }

    return true
}

