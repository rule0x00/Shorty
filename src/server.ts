import http from "http";
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`)
} )