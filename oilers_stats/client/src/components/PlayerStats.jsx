import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./PlayerStats.css";

const PlayerStats = ({ player, onClose }) => {
  if (!player) return null;

  return (
    <div className="player-stats-modal">
      <div className="stats-container">
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <div className="stats-header">
          <img src={player.headshot} alt={player.name} className="stats-img" />
          <div className="stats-info">
            <h2>{player.name}</h2>
            <p>{player.position}</p>
            <div className="season-stats">
              <span>Goals: {player.goals}</span>
              <span>Assists: {player.assists}</span>
              <span>Points: {player.points}</span>
              <span>Games: {player.gamesPlayed}</span>
            </div>
          </div>
        </div>

        <div className="chart-wrapper">
          <h3>Points Per Game (PPG) by Game</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={player.gameData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="game" label={{ value: "Game", position: "insideBottomRight", offset: -5 }} />
              <YAxis label={{ value: "PPG", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="PPG" 
                stroke="#FF4500" 
                dot={{ fill: "#FF4500", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
