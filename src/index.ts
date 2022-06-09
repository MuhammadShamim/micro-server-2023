// Import dependencies
import express from 'express'

// Create variables
const app = express()

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to Micro Server 2023!')
})

// Start Server
app.listen(8080, () => {
    console.log('The application is listening on port 8080!')
})