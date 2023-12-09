import { Component } from 'react';
import ZingTouch from 'zingtouch';
import "./ipod.css"
import { Screen } from '../Screen/Screen';
import { Control } from '../Controls/Control';
import { data } from '../../data';

export class Ipod extends Component {
    constructor() {
        super();
        this.state = {
            change: 0,
            activeIndex: 0,
            item: data,
            length: data.children.length,
            play: false
        }
    }

    handleSelectionChange = () => {
        this.setState({
            item: this.state.item.children[this.state.activeIndex],
            activeIndex: 0,
            change: 0,
            length:  this.state.item.children[this.state.activeIndex].children.length
        });
    }

    handleHomeClick = () => {
        this.setState({
            change: 0,
            activeIndex: 0,
            item: data,
            length: data.children.length
        });
    }

    handleMusicPlay = () => {
        this.setState({
            play: !this.state.play
        });
    }
    addEffect () {
        const container = document.getElementById("ControlButton");
        const region = new ZingTouch.Region(container);
        const iPodRef = this;
        region.bind(container, 'rotate', function (e) {
            if (iPodRef.state.change > 15) {
                const newIndex = iPodRef.state.activeIndex + 1 === iPodRef.state.length ? 0 : iPodRef.state.activeIndex + 1;
                iPodRef.setState(prev => {
                    return {
                        change: 0,
                        activeIndex: newIndex
                    }
                });
            } else if (iPodRef.state.change < -15) {
                const newIndex = iPodRef.state.activeIndex === 0 ? iPodRef.state.length - 1 : iPodRef.state.activeIndex - 1;
                iPodRef.setState(prev => {
                    return {
                        change: 0,
                        activeIndex: newIndex
                    }
                });
            } else {
                iPodRef.setState(prev => {
                    return {
                        change: prev.change + e.detail.distanceFromLast
                    }
                });
            }
            
        });
    }
    componentDidMount() {
        this.addEffect(); 
    }
    render() {
        return (
            <>
                <div id="Container">
                    <Screen activeIndex = {this.state.activeIndex} item={this.state.item} play={this.state.play}/>
                    <Control handleSelectionChange = {this.handleSelectionChange} 
                        handleHomeClick={this.handleHomeClick} 
                        handleMusicPlay={this.handleMusicPlay}
                        play={this.state.play}
                        item={this.state.item}
                        />
                </div>
            </>
        );
    }
}