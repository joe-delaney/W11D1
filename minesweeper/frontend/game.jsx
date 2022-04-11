import React from "react";
import {Board, Tile} from "./minesweeper.js";
import BoardComponent from "./board"

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Board(9, 20)
        }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }

    render() {
        return <div className="game">
            <h3 className="title">Minesweeper</h3>
            <p>Click to explore a tile</p>
            <p>Alt + click to flag a tile</p>
            <BoardComponent board={this.state.board} updateGame={this.updateGame}/>
        </div>
    }
}