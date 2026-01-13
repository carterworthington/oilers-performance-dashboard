import oilersLogo from './assets/edmonton-oilers-logo.png';
import PlayerList from "./components/PlayerList";
import { players } from "./mockData";
import "./App.css"

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <img src={oilersLogo} alt='Edmonton Oilers Logo' className='logo' />
        <h1 style={{ color: "#fff" }}>Edmonton Oilers Performance Dashboard</h1>
      </header>
      <main className='content'>
        
        <PlayerList players={players} />
      </main>
    </div>
  );
}

export default App;
