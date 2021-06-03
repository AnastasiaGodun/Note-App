import store from './redux/createStore'
import { Provider } from 'react-redux';
import './App.css';
import InputSection from './components/InputSection';
import NotesSection from './components/NotesSection';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <NotesSection />
        </div>
        <InputSection />
      </div>
    </Provider>
  );
}

export default App;
