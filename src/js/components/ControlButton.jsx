import { Component } from "react";

class ControlButton extends Component {
    render() {
        const { children } = this.props;
        return <button className="button is-primary">{children}</button>
    }
}

export default ControlButton;
