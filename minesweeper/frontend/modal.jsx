import React from "react";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.restartGame();
    }

    render() {
        return <section id="modal" className="modal">
            <article className="modal-content">
                <p>{this.props.message}</p>
                <button className="playAgain" onClick={this.handleClick}>Play again?</button>
            </article>
            <div className="modal-screen js-hide-modal"></div>
        </section>
    }
}