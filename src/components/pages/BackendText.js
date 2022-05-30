import React from 'react';
import axios from 'axios'


//It is code for receiving backend text to frontend
export default class BackendText extends React.Component {
    state={
        textList : []
    }

    componentDidMount() {  
        axios.get(`http://localhost:8080/speak2`)  
          .then(res => {  
            const textList = res.data;  
            this.setState({ textList });  
          })  
      }  
  render() {
    return (
        <ul>
        {
          this.state.textList
            .map(text =>
              <p key={text.text}>{text.text}</p>
            )
        }
      </ul>
    )
  }
}
