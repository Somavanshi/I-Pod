import React, { Component } from "react";
import "./Music.css";

export class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      progress: 0,
    };

    this.audioRef = React.createRef();
  }

  handlePlayPause = () => {
    const audio = this.audioRef.current;

    if (audio.paused) {
      audio.play();
      this.setState({ isPlaying: true });
    } else {
      audio.pause();
      this.setState({ isPlaying: false });
    }
  };

  handleTimeUpdate = () => {
    const audio = this.audioRef.current;
    const progress = (audio.currentTime / audio.duration) * 100;
    this.setState({ progress });
  };

  handleProgressBarChange = (e) => {
    const audio = this.audioRef.current;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    this.setState({ progress: e.target.value });
  };

  componentDidMount() {
    this.handlePlayPause();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.play != this.props.play) {
      this.handlePlayPause();
    }
  }
  render() {
    const { isPlaying, progress } = this.state;
    const { item } = this.props;

    return (
      <>
        <div className="musicContainer">
          <div className="musicImage">
            <img
              src={require(`../../../assets/images/${item.name != "nowPlaying" ? item.name : "Music1"}.gif`)}
              alt="image"
              className="music-image"
            />
          </div>
          <div className="bar">
            <input
              type="range"
              name="range"
              id="range"
              min="0"
              max="100"
              value={progress}
              onChange={this.handleProgressBarChange}
            />
          </div>
          <audio
            ref={this.audioRef}
            src={require(`../../../assets/musics/${item.name != "nowPlaying" ? item.name : "Music1"}.mp3`)}
            onTimeUpdate={this.handleTimeUpdate}
            onEnded={() => this.setState({ isPlaying: false, progress: 0 })}
          />
          {/* <button onClick={this.handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button> */}
        </div>
      </>
    );
  }
}
