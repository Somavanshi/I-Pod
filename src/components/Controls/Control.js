import { Component } from "react";
import "./control.css";
export class Control extends Component {
    render() {
        return (
            <>
                <div id="ControlButton">
                    <div onClick={this.props.handleHomeClick}>MENU</div>
                    <div className={"center-button-container"}>
                        <div><i className="fa-solid fa-backward"></i></div>
                        <div className={"center-button " + (!this.props.item.children.length ? "disabled" : "")} onClick={this.props.handleSelectionChange}></div>
                        <div><i className="fa-solid fa-forward"></i></div>
                    </div>
                    <div onClick={this.props.handleMusicPlay}> {!this.props.play ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}</div>
                </div>
            </>
        );
    }
}