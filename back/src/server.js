import { serverHttp } from './http.js'
import "./websocket.js"

serverHttp.listen(3001, () => console.log("Server is running no 3001"))