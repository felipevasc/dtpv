import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import { getList } from './services/candidates.js'

const app = express();
app.use(cors('*'));
app.use(express.json())
app.post('/list', async(req, res, next) => {
    console.log(req.body)
    const list = await getList(req.body.profile)
    res.send(JSON.stringify({ profile: req.body.profile, cards: list }))
})
const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
        extraHeaders: {
            "Access-Control-Allow-Origin": "*"
        }
    }
})

export { serverHttp, io }