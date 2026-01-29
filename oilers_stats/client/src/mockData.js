// mockData.js
import mcdavidPic from './assets/mcdavid.png';
import draisaitlPic from './assets/draisaitl.png';
import hymanPic from './assets/hyman.png';
import nugePic from './assets/nuge.png';
import bouchardPic from './assets/bouchard.png';

// Historical game data for PPG tracking
const mcdavidGameData = [
  { game: 1, PPG: 2.5 },
  { game: 2, PPG: 1.8 },
  { game: 3, PPG: 2.2 },
  { game: 4, PPG: 3.0 },
  { game: 5, PPG: 2.1 },
  { game: 6, PPG: 1.5 },
  { game: 7, PPG: 2.8 },
  { game: 8, PPG: 2.3 },
  { game: 9, PPG: 2.6 },
  { game: 10, PPG: 1.9 },
  { game: 11, PPG: 2.4 },
  { game: 12, PPG: 3.2 },
  { game: 13, PPG: 2.0 },
  { game: 14, PPG: 2.7 },
  { game: 15, PPG: 1.7 },
];

const draisaitlGameData = [
  { game: 1, PPG: 2.7 },
  { game: 2, PPG: 2.5 },
  { game: 3, PPG: 1.8 },
  { game: 4, PPG: 2.9 },
  { game: 5, PPG: 3.1 },
  { game: 6, PPG: 2.2 },
  { game: 7, PPG: 2.4 },
  { game: 8, PPG: 2.8 },
  { game: 9, PPG: 2.0 },
  { game: 10, PPG: 2.6 },
  { game: 11, PPG: 1.9 },
  { game: 12, PPG: 2.3 },
  { game: 13, PPG: 3.0 },
  { game: 14, PPG: 2.1 },
  { game: 15, PPG: 2.5 },
];

const hymanGameData = [
  { game: 1, PPG: 0.9 },
  { game: 2, PPG: 1.2 },
  { game: 3, PPG: 0.7 },
  { game: 4, PPG: 1.1 },
  { game: 5, PPG: 0.8 },
  { game: 6, PPG: 1.0 },
  { game: 7, PPG: 0.6 },
  { game: 8, PPG: 1.3 },
  { game: 9, PPG: 0.9 },
  { game: 10, PPG: 1.1 },
  { game: 11, PPG: 0.8 },
  { game: 12, PPG: 1.2 },
  { game: 13, PPG: 1.0 },
  { game: 14, PPG: 0.7 },
  { game: 15, PPG: 1.1 },
];

const nugeGameData = [
  { game: 1, PPG: 1.0 },
  { game: 2, PPG: 1.1 },
  { game: 3, PPG: 1.2 },
  { game: 4, PPG: 0.9 },
  { game: 5, PPG: 1.3 },
  { game: 6, PPG: 1.0 },
  { game: 7, PPG: 1.1 },
  { game: 8, PPG: 1.2 },
  { game: 9, PPG: 0.8 },
  { game: 10, PPG: 1.2 },
  { game: 11, PPG: 1.0 },
  { game: 12, PPG: 1.1 },
  { game: 13, PPG: 1.3 },
  { game: 14, PPG: 0.9 },
  { game: 15, PPG: 1.1 },
];

const bouchardGameData = [
  { game: 1, PPG: 1.0 },
  { game: 2, PPG: 0.8 },
  { game: 3, PPG: 0.9 },
  { game: 4, PPG: 1.1 },
  { game: 5, PPG: 1.2 },
  { game: 6, PPG: 0.9 },
  { game: 7, PPG: 1.0 },
  { game: 8, PPG: 0.8 },
  { game: 9, PPG: 1.1 },
  { game: 10, PPG: 0.9 },
  { game: 11, PPG: 1.0 },
  { game: 12, PPG: 1.1 },
  { game: 13, PPG: 0.8 },
  { game: 14, PPG: 1.2 },
  { game: 15, PPG: 0.9 },
];

export const players = [
  { id: 1, name: "Connor McDavid", position: "C", goals: 30, assists: 48, points: 78, gamesPlayed: 45, headshot: mcdavidPic, gameData: mcdavidGameData },
  { id: 2, name: "Leon Draisaitl", position: "C", goals: 23, assists: 40, points: 122, gamesPlayed: 45, headshot: draisaitlPic, gameData: draisaitlGameData },
  { id: 3, name: "Zach Hyman", position: "LW", goals: 13, assists: 10, points: 23, gamesPlayed: 26, headshot: hymanPic, gameData: hymanGameData },
  { id: 4, name: "Ryan Nugent-Hopkins", position: "C", goals: 36, assists: 25, points: 36, gamesPlayed: 36, headshot: nugePic, gameData: nugeGameData },
  { id: 5, name: "Evan Bouchard", position: "D", goals: 9, assists: 34, points: 43, gamesPlayed: 45, headshot: bouchardPic, gameData: bouchardGameData },
  // add more if you want depth players
];
