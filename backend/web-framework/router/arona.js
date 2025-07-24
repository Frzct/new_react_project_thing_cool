import express from 'express'
import { aronaTalk } from '../controller/arona.js'

const router = express.Router()

// POST /api/signup - Add a new user
router.post('/communicate', aronaTalk)

export default router
