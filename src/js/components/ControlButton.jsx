import { Component } from "react";
import { Button } from 'semantic-ui-react'

class ControlButton extends Component {
    render() {
        const { children } = this.props;
        return <Button color="purple" compact>{children}</Button>
    }
}

export default ControlButton;
