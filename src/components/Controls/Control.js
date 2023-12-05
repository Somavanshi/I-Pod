import { PureComponent } from "react";
import "./control.css";
export class Control extends PureComponent {
    render() {
        return (
            <>
                <div id="ControlButton">
                    <div>MENU</div>
                    <div className="center-button-container">
                        <div><i className="fa-solid fa-backward"></i></div>
                        <div className="center-button"></div>
                        <div><i className="fa-solid fa-forward"></i></div>
                    </div>
                    <div><i className="fa-solid fa-play"></i> </div>
                </div>
            </>
        );
    }
}