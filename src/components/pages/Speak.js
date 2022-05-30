import React, { Component } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import BackendText from './BackendText';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export default class Speak extends Component {
  // Constructor For Recording
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    };
  }
  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)

        this.setState({ blobURL, isRecording: false });
        const audioFile = new Audio(blobURL)
        console.log(audioFile);
        // audioFile.play(); it will play sound

        const file = new File(buffer, 'me-at-thevoice.mp3', {
          type: blob.type,
          lastModified: Date.now()
        });

        //player to record audio file
        const player = new Audio(URL.createObjectURL(file));
        console.log(player);


      }).catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  render() {
    return (
      <div>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <p className="lead font-weight-normal">Click Speak Button then read the sentence aloud</p>

            {/* BackendText.js is used here to show backend text */}
            <h5 className="display-4 font-weight-normal"><BackendText /></h5>


            <button className="btn btn-outline-secondary" onClick={this.start} disabled={this.state.isRecording}>Speak</button>
            ...
            <button className="btn btn-outline-secondary" onClick={this.stop} disabled={!this.state.isRecording}>Stop</button>

            <audio src={this.state.blobURL} controls="controls" />

          </div>
          <button className="btn btn-outline-secondary">Submit</button>

          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
          


        </div>
      </div>
    )
  }
}

