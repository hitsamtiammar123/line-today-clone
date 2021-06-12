import { Link } from 'react-router-dom';
import './assets/bootstrap/bootstrap.scss';
import '@mln-scss/app.scss';
import logo from './assets/svg/linetoday.svg';
import { HeaderTab, Padder } from '@mln-layouts';

function App() {
  return (
    <div className="App">
      <Padder>
        <header className="d-flex flex-row header justify-content-between">
          <img alt="Logo Header" className="logo-header" src={logo}/>
          <a href="#">Show Bookmark</a>
        </header>
        <HeaderTab />
      </Padder>
    </div>
  );
}

export default App;
