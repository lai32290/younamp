import { Component } from "react";
import autobind from "autobind";
import { List } from 'semantic-ui-react'

class PlayListItem extends Component {
    @autobind
    onClick() {
        const { onClick = () => {} } = this.props;

        onClick();
    }
    render() {
        return <List.Item onClick={this.onClick} className="play-list-item">{this.props.children}</List.Item>
    }
}

export default PlayListItem;
