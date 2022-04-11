import React from "react";

export default class TileComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tile: props.tile
        }
    }

    render() {
        return <div className="tile">{this.getString()}</div>
    }

    getString() {
        if(this.state.tile.bombed) {
            return "💣"
        } else if(this.state.tile.flagged) {
            return "🚩";
        } else if(this.state.tile.explored) {
            let count = this.state.tile.adjacentBombCount();
            if(count > 0) {
                return count;
            } else {
                return "";
            }
        } else {
            return "";
        }

    }
}