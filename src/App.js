import './assets/bootstrap/bootstrap.scss';
import '@mln-scss/app.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppNavigator} from '@mln-navigator';
import { store, persistor } from '@mln-redux/store';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator/>
      </PersistGate>
    </Provider>
  );
}

export default App;
