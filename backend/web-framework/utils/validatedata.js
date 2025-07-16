import * as zod from 'zod'
import { _isoDate } from 'zod/v4/core'

const neverUse = zod.never().optional()

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

// all the fields in here are necessary

export const UpdateWhitelist = zod.strictObject({
    "user": Validators.user.optional(),
    "displayName": Validators.displayName.optional(),
    "aboutMe": Validators.aboutMe.optional(),
})

export const AddUserWhitelist = zod.strictObject({
    "user": Validators.user,
    "displayName": Validators.displayName,
    "aboutMe": Validators.aboutMe,
    "password": Validators.password,
    "joinDate": Validators.joinDate,
})

//

export default function ValidateData(Data, Whitelist){

    if (typeof Whitelist === "object" && Whitelist.parse){
        const response = Whitelist.parse(Data)
        //console.log("parse ended")

        if (!response) return response
    } else {
        //console.log('str type')
        for (const Field in Object.keys(Data)){
            if (typeof Data[Field] !== type) {
                return "Field " + Field + " expects type " + type
            }
        }
        //
    }

    return true
}

