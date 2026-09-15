import React, { Component } from 'react'
import BackendText from './BackendText';

export default class Listen extends Component {
 
  render() {
    //Path of audio
    const audio = new Audio(
      "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
    );
  
    //Function to play sound
    const start = () => {
      audio.play();
    };

    //Function to say No audioNotMatched for Audio Input
    const audioNotMatched = () =>{
      console.log("No audioNotMatched");
    }

       //Function to say Yes audioMatched No for Audio Input
       const audioMatched = () =>{
        console.log("yes audioMatched");
      }
    return (
      <div>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <p className="lead font-weight-normal">Click Listen button did they accurately speak the sentence?</p>

             {/* BackendText.js is used here to show backend text */}
             <h1 className="display-4 font-weight-normal"><BackendText/></h1>
            <button className="btn btn-outline-secondary" onClick={start}>Listen</button>
          </div>
          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
          <button className="btn btn-outline-primary" onClick={audioNotMatched}>No</button>
          <button className="btn btn-outline-secondary" onClick={audioMatched}>Yes</button>
        </div>
        
      </div>
    )
  }
}


