import { io } from './http.js'
import { getList } from './services/candidates.js'

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
})