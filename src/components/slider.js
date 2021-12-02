import {useState, useEffect, useRef} from "react";
import useSound from 'use-sound';

const Slider = () => {
    
    const [BPM, setBPM]= useState(125);
    // const [playing, setPlaying] = useState(false);
    // const [count, setCount] = useState(0);
    // const [beatsPerMeasure] = useState(5);

    const handleSlider = (e) =>{
        const xbpm = e.target.value
        setBPM(xbpm)
    }      


    return (
        <>
            <h3>Slider</h3>
            <h4>{BPM}</h4>
            <div className="metronome">
                <div className="slider">
                    <input type="range" min="35" max="250" value = {BPM} step="10" onChange={handleSlider}/>
                    <label>Choose Frequency</label>
                </div>
            </div>


        </>
        
    )
}

export default Slider;