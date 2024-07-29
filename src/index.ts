import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import Gemini from './infra/Gemini';

const PORT = 3000

const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.static('public'))

const gemini = new Gemini()

io.on('connection', socket => {
    console.log('user connect: ', socket.id)
    
    socket.on('disconnection', () => {
        console.log('user disconnect')
    })

    socket.on('chat message', async ({ role, message }) => {
        const response = await gemini.generateContent(message)
        socket.emit('chat message', { message: response, role: 'gemini' })
    })
})

server.listen(PORT, () => { console.log(`listening on http://localhost:${PORT}`) })