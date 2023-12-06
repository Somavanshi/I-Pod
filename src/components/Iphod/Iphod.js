import { Component } from 'react';
import ZingTouch from 'zingtouch';
import "./ipod.css"
import { Screen } from '../Screen/Screen';
import { Control } from '../Controls/Control';

export class Ipod extends Component {
    constructor() {
        super();
        this.state = {
            change: 0,
            activePage: 'Home',
            activeItem: 'Now Playing'
        }
    }

    componentDidMount() {
        const container = document.getElementById("ControlButton");
        const region = new ZingTouch.Region(container);
        const iPodRef = this;
        region.bind(container, 'rotate', function (e) {
            console.log(iPodRef.state.change);
            iPodRef.setState(prev => {
                return {
                    change: prev.change + e.detail.distanceFromLast
                }
            });
        });
    }
    render() {
        return (
            <>
                <div id="Container">
                    <Screen />
                    <Control />
                </div>
            </>
        );
    }
}