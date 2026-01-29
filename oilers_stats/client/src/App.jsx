import oilersLogo from './assets/edmonton-oilers-logo.png';
import PlayerList from "./components/PlayerList";
import PlayerStats from "./components/PlayerStats";
import { players } from "./mockData";
import "./App.css"
import { useState } from 'react';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <div className='app'>
      <header className='app-header'>
        <img src={oilersLogo} alt='Edmonton Oilers Logo' className='logo' />
        <h1 style={{ color: "#fff" }}>Edmonton Oilers Performance Dashboard</h1>
      </header>
      <main className='content'>
        <PlayerList onPlayerSelect={setSelectedPlayer} />
      </main>
      {selectedPlayer && (
        <PlayerStats player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
      )}
    </div>
  );
}

export default App;

