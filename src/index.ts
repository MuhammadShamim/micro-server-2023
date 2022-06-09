// Import dependencies
import express from 'express'
import config from './config/default'

// Create variables
const app = express()
const port = config.port as number
const host = config.host as string
const prefix = config.prefix as string
const routes = require('./routes/index')

// Define routes
app.use(prefix, routes)

// Start Server
app.listen(port, host, () => {
    console.log(`The application is listening at http://${host}:${port}${prefix}`)
})