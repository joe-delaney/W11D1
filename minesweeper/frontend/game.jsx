import React from "react";
import {Board, Tile} from "./minesweeper.js";
import BoardComponent from "./board";
import Modal from "./modal";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Board(9, 10)
        }

        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
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

    restartGame() {
        let new_board = new Board(9, 10);
        this.setState({
            board: new_board
        })
    }

    render() {
        if(this.state.board.won() || this.state.board.lost()) {
            let gameOverMessage = "";
            if(this.state.board.won()) {
                gameOverMessage = "You won!";
            } else {
                gameOverMessage = "You lost!";
            }

            return <div className="game">
                <h3 className="title">Minesweeper</h3>
                <p>Click to explore a tile</p>
                <p>Alt + click to flag a tile</p>
                <BoardComponent board={this.state.board} updateGame={this.updateGame}/>
                <Modal message={gameOverMessage} restartGame={this.restartGame}/>
            </div>
        } else {
            return <div className="game">
                <h3 className="title">Minesweeper</h3>
                <p>Click to explore a tile</p>
                <p>Alt + click to flag a tile</p>
                <BoardComponent board={this.state.board} updateGame={this.updateGame} />
            </div>
        }
    }
}