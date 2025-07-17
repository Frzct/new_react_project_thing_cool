import {fetchUser_Service, fetchAllUsers_Service, addUser_Service, updateUser_Service, login_Service } from '../service/userdb.js'

export async function fetchAllUsers(req, res) {
   await fetchAllUsers_Service(req, res)
}

export async function fetchUser(req, res) {
   await fetchUser_Service(req, res)
}

export async function addUser(req, res) {
   await addUser_Service(req, res)
}

export async function updateUser(req, res) {
   await updateUser_Service(req, res)
}

export async function loginUser(req, res) {
   await login_Service(req, res)
}