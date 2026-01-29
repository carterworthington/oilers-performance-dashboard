// PlayerList.jsx
import React from "react";
import { players } from "../mockData";
import "./PlayerList.css"

const PlayerList = ({ onPlayerSelect }) => {
  return (
    <div className="player-list">
      {players.map((player) => (
        <div 
          key={player.id} 
          className="player-card" 
          onClick={() => onPlayerSelect(player)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && onPlayerSelect(player)}
        >
          <img src={player.headshot} alt={player.name} className="player-img" />
          <h2 className="player-name">{player.name}</h2>
          <p className="player-position">{player.position}</p>
          <div className="player-stats">
            <span>G: {player.goals}</span>
            <span>A: {player.assists}</span>
            <span>P: {player.points}</span>
            <span>GP: {player.gamesPlayed}</span>
          </div>
          <div className="click-hint">Click to view stats →</div>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
