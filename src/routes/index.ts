// Import dependencies
import express from 'express'

// Create variables
const router = express.Router()

// Default
router.get(`/`, (_req, _res) => {
    _res.status(200).send('Welcome to Micro Server 2023!')
})

module.exports = router