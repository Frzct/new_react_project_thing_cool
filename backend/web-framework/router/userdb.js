import express from 'express'
import { fetchAllUsers, fetchUser, addUser } from '../controller/userdb.js'

const router = express.Router()

// GET /api/users - Fetch all users with pagination
router.get('/users', fetchAllUsers)

// GET /api/users/:id - Fetch a specific user by ID
router.get('/users/:id', fetchUser)

// POST /api/users - Add a new user
router.post('/users', addUser)

export default router
