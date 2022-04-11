import React from "react";
import ReactDOM from "react-dom";
import Game from "./game";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const game = <Game/>
    ReactDOM.render(game, root);
});