import React, { Component } from 'react'


class App extends Component {
  constructor (props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this)
    this.state = {
      userInput: '',
      welcome: '',
      displayName: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  handleInputChange (e) {
    this.setState({
      userInput: e.target.value
    })
  }
  
  handleOnClick (event) {
    this.setState({
      displayName: this.state.userInput,
      welcome: 'Welcome to Christchurch'
    })
    event.preventDefault()
  }
  
  gethtml(){
    return(
      <div>
          <div>
            <h1>{this.state.welcome}</h1>
            <h1>{this.state.displayName}</h1>
          </div>
          <form>
            <div id='inputs'>
              <input type='text' name='userInput' value={this.state.userInput} onChange={this.handleInputChange} />
              <label htmlFor='userInput'>Enter Your Name</label>
            </div>
            <input id='submit' type='submit' onClick={this.handleOnClick} value='Submit' />
          </form>   
        </div>
    )
  }
  
  render(){
    return (
      <div id='app'>
        <div id='bottom-image'>
         {this.gethtml()}
        </div>
        <div id='sides'>        
          <div id='left-image'>
          {this.gethtml()}
          </div>
          <div id='right-image'>
          {this.gethtml()}
          </div>
        </div>
      </div>
    )
  }
  

}

export default App
