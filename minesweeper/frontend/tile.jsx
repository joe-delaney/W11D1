import React from "react";

export default class TileComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tile: props.tile
        }

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let className = "tile";

        if(this.state.tile.explored) {
            if(!this.state.tile.bombed) {
                className += " revealed";
            }
        }

        return <div className={className} onClick={this.handleClick}>{this.getString()}</div>
    }

    getString() {
        if (this.state.tile.explored) {
            if (this.state.tile.bombed) {
                return "💣"
            } else {
                let count = this.state.tile.adjacentBombCount();
                if (count > 0) {
                    return count.toString();
                } else {
                    return "";
                }
            }
        } else {
            if (this.state.tile.flagged) {
                return "🚩";
            }  else {
                return "";
            }
        }
    }

    handleClick(e) {
        let flagged = false;
        if(e.altKey) flagged = true;

        this.props.updateGame(this.state.tile, flagged);
    }
}