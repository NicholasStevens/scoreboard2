import React from "react";
import { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

//sort players by score
function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

//sort players by name
function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Nick", score: 11 },
    { id: 2, name: "Jack", score: 6 },
    { id: 3, name: "Gary", score: 9 },
    { id: 4, name: "Jimi", score: 11 },
    { id: 5, name: "Kelly", score: 13 },
  ]);
  const [sort_by, set_sort_by] = useState("score"); //hook for managing sorting method

  //sort players array by score
  //const sorted_players_score = [...players].sort(compare_score);

  //sort players array by name
  //const sorted_players_by_name = [...players].sort(compare_name);

  //determines how players are sorted
  const players_sorted = [...players].sort(
    sort_by === "name" ? compare_name : compare_score
  );

  //manage input select for sorting players
  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };

  return (
    <div className="Scoreboard">
      <p>
        Sort Order:
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <p>Player's Scores:</p>
      <ul>
        {players_sorted.map((player) => (
          <Player key={player.id} name={player.name} score={player.score} />
        ))}
      </ul>
      <AddPlayerForm />
    </div>
  );
}
