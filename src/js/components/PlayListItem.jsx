import { Component } from "react";
import autobind from "autobind";

class PlayListItem extends Component {
    @autobind
    onClick() {
        const { onClick = () => {} } = this.props;

        onClick();
    }
    render() {
        return <li onClick={this.onClick}><a>{this.props.children}</a></li>
    }
}

export default PlayListItem;
