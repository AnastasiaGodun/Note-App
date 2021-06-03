import {Provider} from 'react-redux'
import store from './redux/createStore'
import './App.css';
import InputSection from './components/InputSection';
import NotesSection from './components/NotesSection'

function App() {
  return (
    <Provider store={store}>
    <div className="App">

    <NotesSection/>
      <InputSection/>
    </div>
    </Provider>
  );
}

export default App;
