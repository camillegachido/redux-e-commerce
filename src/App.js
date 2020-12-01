import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';
import './styles/index.css'

function App() {
  return (
      <div className="App">
         <Provider store={store}>
            <Routes />
         </Provider>
      </div>
  );
}

export default App;
