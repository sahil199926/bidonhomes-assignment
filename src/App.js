import './App.css';
import Auth from './components/Auth/Auth'
import {Provider} from 'react-redux'
import Store from './components/Redux/Store';
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
     <Auth/>
     </Provider>
    </div>
  );
}

export default App;
