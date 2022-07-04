import React from "react";
import "./Player.scss";

export default function Player(props) {
  const increment_score = () => {
    props.incrementScore(props.id);
  };
  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>
        {props.name} (Score:{props.score})
        <button onClick={increment_score}>Increment</button>
      </p>
    </li>
  );
}
