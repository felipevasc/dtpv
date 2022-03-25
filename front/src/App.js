import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import InitialPage from './components/InitialPage'
import io from 'socket.io-client';

function App() {
  let socket;

  if (!socket) {
    socket = io.connect("ws://localhost:3001")
    socket.on("A", msg => console.log('Conectado: ', msg));
    //socket.emmit("Ola", "X")
  }
  return (
    <Provider store={store} socket={socket}>
      <InitialPage />
    </Provider>
  );
}

export default App;
