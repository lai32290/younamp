import { Component } from "react";
import ListItem from "./PlayListItem.jsx";
import autobind from "autobind";

class PlayList extends Component {
    @autobind
    selectMusic() {
        console.log("play");
    }

    render() {
        return <ul className="play-list menu-list">
            <ListItem onClick={this.selectMusic}>Music 1</ListItem>
            <ListItem>Music 1</ListItem>
            <ListItem>Music 1</ListItem>
            <ListItem>Music 1</ListItem>
            <ListItem>Music 1</ListItem>
            <ListItem>Music 1</ListItem>
        </ul>;
    }
}

export default PlayList;
