import {fetchUserByObjectId, fetchAllUsers_DB, addUser_DB} from '../model/userdb.js'

export async function fetchAllUsers(req, res) {
    try {
        const result = await fetchAllUsers_DB('safemode', [], req.query)
        res.json({ status: "OK", result })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}

export async function fetchUser(req, res) {
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

export async function addUser(req, res) {
    try {
        const userData = req.body
        const result = await addUser_DB(userData)
        res.status(201).json({ status: "OK", result })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message })
    }
}