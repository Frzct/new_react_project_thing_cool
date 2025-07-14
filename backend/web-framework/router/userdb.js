import express from 'express'
import { fetchAllUsers, fetchUser, addUser, updateUser } from '../controller/userdb.js'

const router = express.Router()

// GET /api/users - Fetch all users with pagination
router.get('/users', fetchAllUsers)

// GET /api/users/:id - Fetch a specific user by ID
router.get('/users/:id', fetchUser)

// POST /api/users 
router.post('/users', addUser)
router.get('/updateuser', updateUser)

export default router
