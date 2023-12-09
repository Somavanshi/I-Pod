import { Component } from "react";
import "./Screen.css"
import { ListItem } from "./ListItems/ListItems";
import { Music } from "./Music/Music";

export class Screen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                {
                    this.props.item.isPlayable ? <Music item={this.props.item} imageIndex={this.props.activeIndex} play={this.props.play}/> : (
                        <div className={"ScreenContainer " + (this.props.item.isViewable ? "setting-background" : this.props.item.isGame ?  "game-background" : "Background")}>
                            {
                                !this.props.item.isViewable && !this.props.item.isGame && <ListItem item={this.props.item} activeIndex={this.props.activeIndex} />
                            }
                        </div>
                    )
                }
            </>
        );
    }
}