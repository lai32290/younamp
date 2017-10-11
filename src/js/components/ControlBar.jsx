import { Component } from "react";
import ControlButton from "./ControlButton.jsx";

class ControlBar extends Component {
    render() {
        return <div>
            <ControlButton>Play</ControlButton>
            <ControlButton>Pause</ControlButton>
            <ControlButton>Stop</ControlButton>
        </div>;
    }
}

export default ControlBar;
