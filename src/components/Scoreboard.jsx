import React from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

export default function Scoreboard() {
  return (
    <div>
      <Player name="Nick" />
      <Player name="Brad" />
      <Player name="Jack" />
      <Player name="Laird" />
      <Player name="Gary" />
      <AddPlayerForm />
    </div>
  );
}
