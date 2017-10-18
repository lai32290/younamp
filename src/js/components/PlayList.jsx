import { Component } from "react";
import ListItem from "./PlayListItem.jsx";
import autobind from "autobind";
import { List } from 'semantic-ui-react'

class PlayList extends Component {
    @autobind
    selectMusic() {
        console.log("play");
    }

    render() {
        return <List link>
                <ListItem onClick={this.selectMusic}>Music 1</ListItem>
                <ListItem onClick={this.selectMusic}>Music 1</ListItem>
            </List>
    }
}

export default PlayList;
