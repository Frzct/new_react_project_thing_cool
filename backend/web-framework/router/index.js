import express from 'express'
import userdbRoutes from './userdb.js'
import webdataRoutes from './webdata.js'
import aronaRoutes from './arona.js'

const router = express.Router()

// Mount route modules
router.use('/api', userdbRoutes)
router.use('/api', webdataRoutes)
router.use("/api", aronaRoutes)

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({ status: "OK", message: "Server is running" })
})

export default router 