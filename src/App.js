import './App.css';
import { FooterSite } from './Shared/FooterSite/FooterSite';
import { HeaderSite } from './Shared/HeaderSite/HeaderSite';
import { HomePage } from './pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <header>
        <HeaderSite></HeaderSite>
      </header>
      <main>
        <HomePage></HomePage>
      </main>
      <FooterSite></FooterSite>
    </div>
  );
}

export default App;
