import { io } from './http.js'
import { checkCpf, getList } from './services/candidates.js'

function checkNextCpf(obj, socket) {
  checkCpf(obj).then(card => {
    socket.emit('check', JSON.stringify(card))
    if (card.cpf === '') {
      checkNextCpf(card, socket)
    }
    else {
      socket.disconnect()
    }
  })
}
io.on("connection", socket => {
  socket.on("check", msg => {
    let obj = JSON.parse(msg)
    checkNextCpf(obj, socket)
  })
})