import React, { Component } from 'react'

export default class UserDetails extends Component {

    
  render() {

    var msg = document.getElementById('msg');

    if (document.createElement('input').webkitSpeech === undefined) {
      msg.innerHTML = "x-webkit-speech is <strong>not supported</strong> in your browser.";
    } else {
      msg.innerHTML = "x-webkit-speech is <strong>supported</strong> in your browser.";
    }

    return (
        <div id="page-wrapper">
        <h1>Speech Input Demo / Tester</h1>
        
        <p id="msg"></p>
      
        <label for="text">Text</label>
                <input type="text" id="text" x-webkit-speech/>
      
                <label for="number">Number</label>
                <input type="number" id="number" x-webkit-speech/>
      
                <label for="email">Email</label>
                <input type="email" id="email" x-webkit-speech/>
        
                <label for="url">URL</label>
                <input type="url" id="url" x-webkit-speech/>
        
        <label for="tel">Telephone</label>
                <input type="tel" id="tel" x-webkit-speech/>
        
        <label for="date">Date</label>
                <input type="date" id="date" x-webkit-speech/>
        
        <label for="datetime">Date and Time</label>
                <input type="datetime" id="datetime" x-webkit-speech/>
      
        <label for="month">Month</label>
                <input type="month" id="month" x-webkit-speech/>
        
          </div>
    )
  }
}
