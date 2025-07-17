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

export default function ValidateData(Data, Whitelist){
    const response = Whitelist.parse(Data)
    //console.log("parse ended")

    if (!response) return response

    return true
}

