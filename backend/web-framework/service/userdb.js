import {fetchUserByObjectId, fetchAllUsers_DB, addUser_DB, updateUser_DB, login_DB} from '../model/userdb.js'
import * as zod from "zod"
import ValidateData from '../utils/validatedata.js'

export const User = zod.strictObject({
    "user": zod.string().refine(str => str.length > 6 && str.length < 20),
    "displayName": zod.string().refine(str => str.length > 3 && str.length < 12).optional(),
    "aboutMe": zod.string().refine(str => str.length < 200).optional(),
    "password": zod.string().refine(str => str.length > 6 && str.length < 20),
    "joinDate": zod.iso.datetime()
})

export const UpdateUser = User.pick({
    "displayName": true,
    "aboutMe": true,
    "user": true
}).partial()
//

export async function fetchAllUsers_Service(req, res) {
    try {
        const result = await fetchAllUsers_DB('safemode', [], req.query)
        res.json({ status: "OK", result })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}

export async function fetchUser_Service(req, res) {
    try {
        const { id } = req.params
        const result = await fetchUserByObjectId(id, 'safemode')
        if (!result) {
            return res.status(404).json({ status: "ERROR", message: "User not found" })
        }
        res.json({ status: "OK", result })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}

//

export async function addUser_Service(req, res) {
    try {
        const userData = req.body
        userData.joinDate = new Date().toISOString()

        const Validated = ValidateData(userData, User)

        if (Validated !== true){
            return res.status(401).json({ status: "GETOUT", message: toString(Validated) })
        }

        //
        const result = await addUser_DB(userData)
        if (!result) {
            return res.status(401).json({ status: "GETOUT", message: "Username already exists."})
        }

        res.status(201).json({ status: "OK", result })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}

export async function login_Service(req, res) {
    try {
        const loginData = req.body
        const Validated = ValidateData(loginData, User.pick({
            password: true,
            user: true
        }))

        if (Validated !== true){
            return res.status(401).json({ status: "GETOUT", message: toString(Validated) })
        }
        //
        const result = await login_DB(loginData)
        if (!result) {
            return res.status(500).json({ status: "ERROR", message: "Wrong username / password"})
        }

        res.status(201).json({ status: "OK", token: result })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}

export async function updateUser_Service(req, res){
    try {
        const query = req.query
        const Validated = ValidateData(query, UpdateUser)

        if (Validated !== true){
            return res.status(401).json({ status: "GETOUT", message: toString(Validated) })
        }

        await updateUser_DB('686cb41da1b5a2eb31718dc5', query) // no security features yet so js doing this for now
        res.status(201).json({ status: "OK" })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}