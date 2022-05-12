import './App.css';
import Home from './components/Home';
import StarWars from './components/StarWars';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducers';
import Display from './components/CharDisplay';
import DisplayAll from './components/SavedChar';

const store = createStore(reducers, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <Home />
      <StarWars />
      <Display />
      <DisplayAll />
    </Provider>
  );
}

export default App;
