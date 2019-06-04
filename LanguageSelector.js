import React, { Component } from 'react'

var videos = [
  {
    language: 'English',
    video: 'http://localhost:3000/english.mp4'
  },
  {
    language: 'Te Reo',
    video: 'http://localhost:3000/maori.mp4'
  },
  {
    language: 'Chinese',
    video: 'http://localhost:3000/chinese.mp4'
  },
  {
    language: 'Japanese',
    video: 'http://localhost:3000/japanese.mp4'
  }
]

export default class LanguageSelector extends Component {
  constructor (props) {
    super(props);
    this.state = {
      videoIndex: 0
    };
  }
  
  goToVideo(index) {
    let videoIndex = index
    this.setState({
      videoIndex
    })
  }
  
  getVideo(){
    const {language, video} = videos[this.state.videoIndex]
    return (
      <video 
        width={500} height={270} 
        muted 
        autoPlay
        loop
        src={video}            
      / > 
    )
  }
  
  render() {
    return (
      <div>
        <p>
          {this.getVideo()}
        </p>
        <button onClick={this.goToVideo.bind(this, 0)}>
          English
        </button>
        <button onClick={this.goToVideo.bind(this, 1)}>
          Te Reo
        </button>
        <button onClick={this.goToVideo.bind(this, 2)}>
          Chinese
        </button>
        <button onClick={this.goToVideo.bind(this, 3)}>
          Japanese
        </button>
      </div>
    )
  }
}


