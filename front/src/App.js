import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import InitialPage from './components/InitialPage'
import io from 'socket.io-client';

const changeSocket = (socket) => {
  return {
    type: 'SET_SOCKET',
    socket
  }
}
function App() {
  let socket;
  if (!socket) {
    socket = io.connect("ws://localhost:3001")
    socket.on("connect", msg => {
      store.dispatch(changeSocket(socket))
    })
    socket.on("card", msg => {
      console.log('Recebendo msg card: ', msg)
    });
  }
  return (
    <Provider store={store}>
      <InitialPage />
    </Provider>
  );
}

export default App;
