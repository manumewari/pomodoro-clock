import React, { Component } from 'react';
import soundfile from './audio/alarm.mp3';
import Sound from 'react-sound';

class Alarm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.playAlarm && <Sound
                url={soundfile}
                playStatus={Sound.status.PLAYING}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
            />
        );
    }
}

export default Alarm;