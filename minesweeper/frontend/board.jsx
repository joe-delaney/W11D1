import React from "react";
import Minesweeper from "./minesweeper";
import Tile from "./tile";

export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Tile/>
    }
}