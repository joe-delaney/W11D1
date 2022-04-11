import React from "react";
import Tile from "./tile";

export default class BoardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="grid">
            {this.props.board.grid.map((row, i) => {
                return <div className="row" key={i}>
                    {row.map((pos, j) => {
                        return <Tile className="tile" key={`[${i}][${j}]`} updateGame={this.props.updateGame}/>
                    })}
                </div>
            })}
            </div>
    }
}