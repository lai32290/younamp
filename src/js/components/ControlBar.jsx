import { Component } from "react";
import ControlButton from "./ControlButton.jsx";

class ControlBar extends Component {
    render() {
        return <div className="control-bar">
            <ControlButton>
                <i className="fa fa-play"/>
            </ControlButton>
            <ControlButton>
                <i className="fa fa-pause"/>
            </ControlButton>
            <ControlButton>
                <i className="fa fa-stop"/>
            </ControlButton>
        </div>;
    }
}

export default ControlBar;
