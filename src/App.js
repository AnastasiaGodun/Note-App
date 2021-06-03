import {Provider} from 'react-redux'
import store from './redux/createStore'
import './App.css';
import InputSection from './components/InputSection';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <InputSection/>
    </div>
    </Provider>
  );
}

export default App;
