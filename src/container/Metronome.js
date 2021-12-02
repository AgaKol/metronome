import React, {useState, useEffect} from "react";
import Slider from "../components/slider"
import Dropdown from "../components/dropdown"


const Metronome = () => {

    const soundPlay = () =>{
        const snd = new Audio("data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAFhpbmcAAAAPAAAAAwAAA6gAnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2d7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs////////////////////////////////////////////AAAAAExhdmM1OC4xMwAAAAAAAAAAAAAAACQC7gAAAAAAAAOol9Rm4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+NYxAAdgTbRv0FYAar3ACnLuAAMYxjGMeAAAAB4xjGN5AAAAPGMY/kAAMf//DHve95ubjeHsBAB4HgmHHdAP/83/8cA//Rv/8wB38Rn//iPwAAMPDw8eACP9Gf+YeAAAAAAYeHh48AADP3mHh4eAAAAAIw8PH+4Ad//mHjwAAAHf49gAAAAAgA5UOjME+FuBtEhE9HSFUJ9/+TkSUvw9R5E9N08f/wvieiag2SfG8cQ+f/2RJjFwlVS7oEADbi2q0mlMmRt////QnGACAIYBYCgIATMCIDcwVgDzCqB7MDQB9eKGoVAKAwBZgfAwGRimwYKAmRjUgzf/9pWlPtPmAoAqhOLNFpmQpiqAukzpnQQG60mHGvQ1PwzKbEqbT/////9pKpVSuku5nUAuS5MSf5/nCh9hsRmH+rTMZ1KrX///////8Rcl/Zp/o1VjNLWprW6WrGcJqNXZmHZqVRaOxGK/////////+NIxOVB23rB2Y/xgP/Y1TV+4zVXGI01M+0plLsyqNVq1qrVs1q1qrVs1q1qrVsqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/zOpSwwEwYCKguVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxNACyS3sAcAQAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
        // console.log(snd)
        snd.play();
    }
    // const soundPause = () =>{
    //     const snd = new Audio("data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAFhpbmcAAAAPAAAAAwAAA6gAnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2d7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs////////////////////////////////////////////AAAAAExhdmM1OC4xMwAAAAAAAAAAAAAAACQC7gAAAAAAAAOol9Rm4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+NYxAAdgTbRv0FYAar3ACnLuAAMYxjGMeAAAAB4xjGN5AAAAPGMY/kAAMf//DHve95ubjeHsBAB4HgmHHdAP/83/8cA//Rv/8wB38Rn//iPwAAMPDw8eACP9Gf+YeAAAAAAYeHh48AADP3mHh4eAAAAAIw8PH+4Ad//mHjwAAAHf49gAAAAAgA5UOjME+FuBtEhE9HSFUJ9/+TkSUvw9R5E9N08f/wvieiag2SfG8cQ+f/2RJjFwlVS7oEADbi2q0mlMmRt////QnGACAIYBYCgIATMCIDcwVgDzCqB7MDQB9eKGoVAKAwBZgfAwGRimwYKAmRjUgzf/9pWlPtPmAoAqhOLNFpmQpiqAukzpnQQG60mHGvQ1PwzKbEqbT/////9pKpVSuku5nUAuS5MSf5/nCh9hsRmH+rTMZ1KrX///////8Rcl/Zp/o1VjNLWprW6WrGcJqNXZmHZqVRaOxGK/////////+NIxOVB23rB2Y/xgP/Y1TV+4zVXGI01M+0plLsyqNVq1qrVs1q1qrVs1q1qrVsqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/zOpSwwEwYCKguVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxNACyS3sAcAQAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
    //     console.log(snd)
    //     snd.pause();
    // }


    const [BPM, setBPM]= useState(125);

    // const intervalID = setInterval(myCallback, 500);

    //     function myCallback(a, b)
    //         {

    //         // console.log(a);
    //         // console.log(b);
    //         }

    //     intervalID();

    // const intervalID = setInterval(function() { soundPlay()}, 6000);

    // useEffect(() => {
        const interval = setInterval(() => {
          soundPlay();
        }, 4000);
    //   }, []);
      

 
    
    
    return (
        <>
            <h1>Metronome</h1>
            <h2>Play/Stop</h2>
            <h2><Slider BPM = {BPM}/></h2>
            {/* <button onClick={soundPlay}>play</button> */}
            <h2><Dropdown/></h2>
        </>
    )
}

export default Metronome;