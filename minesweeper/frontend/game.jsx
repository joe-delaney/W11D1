import React from "react";
import {Board, Tile} from "./minesweeper.js";
import BoardComponent from "./board"

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Board(9, 10)
        }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged) {
        if(flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({
            board: this.state.board
        })
    }

    render() {
        if(this.state.board.won()) {
            return <h1>You Won!</h1>
        } else if(this.state.board.lost()) {
            return <h1>You Lost!</h1>
        } else {
            return <div className="game">
                <h3 className="title">Minesweeper</h3>
                <p>Click to explore a tile</p>
                <p>Alt + click to flag a tile</p>
                <BoardComponent board={this.state.board} updateGame={this.updateGame}/>
            </div>
        }
    }
}