import {fetchUserByObjectId, fetchAllUsers_DB, addUser_DB, updateUser_DB} from '../model/userdb.js'

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
        const userData = req.body
        const result = await addUser_DB(userData)
        res.status(201).json({ status: "OK", result })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}

export async function updateUser_Service(req, res){
    try {
        const query = req.query
        console.log(query)

        await updateUser_DB('686cb41da1b5a2eb31718dc5', query) // no security features yet so js doing this for now
        //
        res.status(201).json({ status: "OK" })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}