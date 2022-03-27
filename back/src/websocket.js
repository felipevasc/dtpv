import { io } from './http.js'
import { checkCpf, getList } from './services/candidates.js'

io.on("connection", socket => {
  //console.log(socket);
  //socket.emit("A", "B")
  socket.on("list", msg => {
    let obj = JSON.parse(msg)
    console.log('Obj received', obj)
    getList(obj.profile).then(list => {
      socket.emit('list', JSON.stringify({profile: obj.profile, cards: list}))
    })
  })
  socket.on("check", msg => {
    let obj = JSON.parse(msg)
//    console.log("Check: ", obj)
    checkCpf(obj).then(card => {
      console.log('Returning check', card)
      socket.emit('check', JSON.stringify(card))
    })
  })
})