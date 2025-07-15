import {fetchUserByObjectId, fetchAllUsers_DB, addUser_DB, updateUser_DB} from '../model/userdb.js'
import ValidateData, { UpdateWhitelist, AddUserWhitelist } from '../utils/validatedata.js'

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

export async function addUser_Service(req, res) {
    try {
        const userData = req.query
        //console.log(req.query)

        const Validated = ValidateData(userData, AddUserWhitelist)

        if (Validated !== true){
            return res.status(401).json({ status: "GETOUT", message: toString(Validated) })
        }

       // console.log(userData)
        //
        const result = await addUser_DB(userData)
        res.status(201).json({ status: "OK", result })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}

export async function updateUser_Service(req, res){
    try {
        const query = req.query
        const Validated = ValidateData(query, UpdateWhitelist)

        if (Validated !== true){
            return res.status(401).json({ status: "GETOUT", message: toString(Validated) })
        }
        //console.log(query)

        await updateUser_DB('686cb41da1b5a2eb31718dc5', query) // no security features yet so js doing this for now
        res.status(201).json({ status: "OK" })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}