import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import InitialPage from './components/InitialPage'
function App() {
  return (
    <Provider store={store}>
      <InitialPage />
    </Provider>
  );
}

export default App;
