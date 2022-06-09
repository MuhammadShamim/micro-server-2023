// Import dependencies
import express from 'express'
import config from './config/default'

// Create variables
const app = express()
const port = config.port as number
const host = config.host as string

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to Micro Server 2023!')
})

// Start Server
app.listen(port, host, () => {
    console.log(`The application is listening at http://${host}:${port}`)
})