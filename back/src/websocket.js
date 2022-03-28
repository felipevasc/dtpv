import { io } from './http.js'
import { checkCpf } from './services/candidates.js'

global.sockets = {}

function checkNextCpf(obj, socket) {
    checkCpf(obj).then(card => {
        if (card.cpf === '') {
            if (global.sockets[socket.id] || true) {
                global.sockets[socket.id] = false
                socket.emit('check', JSON.stringify(card))
            }
            checkNextCpf(card, socket)
        } else {
            global.sockets[socket.id] = null
            socket.emit('check', JSON.stringify(card))
        }
    })
}
io.on("connection", socket => {
    socket.on("check", msg => {
        console.log('Received check: ', msg)
        if (typeof global.sockets[socket.id] === 'undefined' || global.sockets[socket.id] === null) {
            global.sockets[socket.id] = true
            let obj = JSON.parse(msg)
            checkNextCpf(obj, socket)
        } else {
            global.sockets[socket.id] = true
        }
    })
})