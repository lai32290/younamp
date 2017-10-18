import { Component } from "react";
import ControlBar from "../components/ControlBar.jsx";
import PlayList from "../components/PlayList.jsx";

class App extends Component {
    render() {
        return <div>
            <ControlBar></ControlBar>
            <PlayList></PlayList>
        </div>
    }
}

export default App;
