// mockData.js
import mcdavidPic from './assets/mcdavid.png';
import draisaitlPic from './assets/draisaitl.png';
import hymanPic from './assets/hyman.png';
import nugePic from './assets/nuge.png';
import bouchardPic from './assets/bouchard.png';





export const players = [
  { id: 1, name: "Connor McDavid", position: "C", goals: 30, assists: 48, points: 78, gamesPlayed: 45, headshot: mcdavidPic },
  { id: 2, name: "Leon Draisaitl", position: "C", goals: 23, assists: 40, points: 122, gamesPlayed: 45, headshot: draisaitlPic },
  { id: 3, name: "Zach Hyman", position: "LW", goals: 13, assists: 10, points: 23, gamesPlayed: 26, headshot: hymanPic },
  { id: 4, name: "Ryan Nugent-Hopkins", position: "C", goals: 36, assists: 25, points: 36, gamesPlayed: 36, headshot: nugePic },
  { id: 5, name: "Evan Bouchard", position: "D", goals: 9, assists: 34, points: 43, gamesPlayed: 45, headshot: bouchardPic },
  // add more if you want depth players
];
