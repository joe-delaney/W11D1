import React from "react";
import TileComponent from "./tile";
import { Board, Tile } from "./minesweeper";

export default class BoardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="grid">
            {this.props.board.grid.map((row, i) => {
                return <div className="row" key={i}>
                    {row.map((pos, j) => {
                        return <TileComponent key={`[${i},${j}]`} tile={this.props.board.grid[i][j]} updateGame={this.props.updateGame}/>
                    })}
                </div>
            })}
            </div>
    }
}