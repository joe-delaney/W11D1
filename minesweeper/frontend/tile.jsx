import React from "react";

export default class TileComponent extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let className = "tile";

        if(this.props.tile.explored) {
            if(!this.props.tile.bombed) {
                className += " revealed";
            }
        }

        return <div className={className} onClick={this.handleClick}>{this.getString()}</div>
    }

    getString() {
        if (this.props.tile.explored) {
            if (this.props.tile.bombed) {
                return "💣"
            } else {
                let count = this.props.tile.adjacentBombCount();
                if (count > 0) {
                    return count.toString();
                } else {
                    return "";
                }
            }
        } else {
            if (this.props.tile.flagged) {
                return "🚩";
            }  else {
                return "";
            }
        }
    }

    handleClick(e) {
        let flagged = false;
        if(e.altKey) flagged = true;

        this.props.updateGame(this.props.tile, flagged);
    }
}