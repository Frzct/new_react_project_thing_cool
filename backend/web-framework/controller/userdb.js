import {fetchUser_Service, fetchAllUsers_Service, addUser_Service} from '../service/userdb.js'

export async function fetchAllUsers(req, res) {
   await fetchAllUsers_Service(req, res)
}

export async function fetchUser(req, res) {
   await fetchUser_Service(req, res)
}

export async function addUser(req, res) {
   await addUser_Service(req, res)
}