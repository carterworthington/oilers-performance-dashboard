// src/api.js or wherever you fetch data
const BASE_URL = "http://localhost:5000";

export const fetchPlayers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/players`);
    if (!res.ok) throw new Error("Failed to fetch players");
    return await res.json();
  } catch (err) {
    console.error(err);
    return []; // return empty array if error
  }
};

export const fetchTeams = async () => {
  try {
    const res = await fetch(`${BASE_URL}/teams`);
    if (!res.ok) throw new Error("Failed to fetch teams");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};
