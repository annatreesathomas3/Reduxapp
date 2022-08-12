import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import Usage from './Usage';
 
function App() {
 
  return (
    <Provider store={store}>
      <div className="App">
     <Usage/>
    </div>
    </Provider>
  );
}

export default App;
