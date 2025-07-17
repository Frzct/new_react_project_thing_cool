import express from 'express'
import { fetchAllUsers, fetchUser, addUser, updateUser, loginUser } from '../controller/userdb.js'

const router = express.Router()

// GET /api/users - Fetch all users with pagination
router.get('/users', fetchAllUsers)

// GET /api/users/:id - Fetch a specific user by ID
router.get('/users/:id', fetchUser)

// POST /api/signup - Add a new user
router.post('/signup', addUser)
router.get('/updateuser', updateUser)
router.get('/login', loginUser)
export default router
