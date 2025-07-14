import express from 'express'
import userdbRoutes from './userdb.js'
import webdataRoutes from './webdata.js'

const router = express.Router()

// Mount route modules
router.use('/api', userdbRoutes)
router.use('/api', webdataRoutes)

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({ status: "OK", message: "Server is running" })
})

export default router 