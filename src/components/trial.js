import React, {Component} from "react";
import toc from "../sounds/toc.mp3"

class Metronome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm : 100,
            beatsPerMeasure: 4
        };

        this.toc = new Audio(toc)
    }

    handleBpmChange = e => {
        const bpm = e.target.value
        this.setState ({bpm})
    }

    startStop = () => {
        if(this.state.playing) {
            clearInterval(this.timer);
            this.setState({
                playing: false
            });
        } else {
                this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
                this.setState({
                    count: 0,
                    playing: true
                })
            }
        }

    render () {
        const { playing, bpm } = this.state

        return (
            <div className="metronome">
                <div className="slider">
                    <div>{bpm} BPM
                        <input
                            type="range"
                            min = "35"
                            max="250"
                            value={bpm}
                            onChange={this.handleBpmChange}/>
                    </div>
                    <button>
                        {playing ? 'Stop' : 'Start'}
                    </button>
                </div>

            </div>
        )
    }
}

export default Metronome;