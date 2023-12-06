import { PureComponent } from "react";
import "./ListItems.css";
export class ListItem extends PureComponent {
    render() {
        return (
            <>
                <div className="item-list">
                    <ul>
                        {
                            this.props.item.children.map((child, index) => <li className={this.props.activeIndex == index ? "active" : ""}>{child.name}</li>)
                        }
                    </ul>
                </div>
            </>
        );
    }
}