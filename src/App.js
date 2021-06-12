import './assets/bootstrap/bootstrap.scss';
import '@mln-scss/app.scss';
import { Provider } from 'react-redux';
import { AppNavigator} from '@mln-navigator';
import { store } from '@mln-redux';


function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

export default App;
