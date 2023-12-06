import { Component } from "react";
import "./Screen.css"
import { ListItem } from "./ListItems/ListItems";

const home = {
    name: 'Home',
    children: [
        {
            name: "nowPlaying",
            children: [],
            musicPath: "",
            isPlayable: true
        },
        {
            name: 'Music',
            children: [
                {
                    name: 'Music1',
                    children: [],
                    musicPath: "",
                    isPlayable: true
                },
                {
                    name: 'Music2',
                    children: [],
                    musicPath: "",
                    isPlayable: true
                },
                {
                    name: 'Music3',
                    children: [],
                    musicPath: "",
                    isPlayable: true
                }
            ],
            musicPath: "",
            isPlayable: false
        },
        {
            name: "Games",
            children: [],
            imagesPath: "",
            isViewable: true
        },
        {
            name: "Settings",
            children: [],
            imagesPath: "",
            isViewable: true
        }
    ],
    musicPath: "",
    isPlayable: false
};

export class Screen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: home,
            activeIndex: 0
        }
    }
    render () {
        return (
            <>
                <div className= "ScreenContainer">
                    <ListItem item={this.state.item} activeIndex={this.state.activeIndex}/>
                </div>
            </>
        );
    }
}