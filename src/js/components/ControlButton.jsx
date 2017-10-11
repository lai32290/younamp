import { Component } from "react";

class ControlButton extends Component {
    render() {
        const { children } = this.props;
        return <button>{children}</button>
    }
}

export default ControlButton;
