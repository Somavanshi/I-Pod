import { Component } from "react";
import "./ListItems.css";
export class ListItem extends Component {
    render() {
        return (
            <>
                <div className="item-list">
                    <ul>
                        {
                            this.props.item.children.map((child, index) => <li className={this.props.activeIndex == index ? "active" : ""} key={index}>{child.name}</li>)
                        }
                    </ul>
                </div>
            </>
        );
    }
}