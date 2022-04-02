import { serverHttp } from './http.js'
import "./websocket.js"
import dotenv from "dotenv"
dotenv.config()

serverHttp.listen(process.env.SERVER_PORT, 
    () => console.log(`Server is running no ${process.env.SERVER_PORT}`))