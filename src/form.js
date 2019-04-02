import React from 'react';

class Form extends React.Component {

  state = {
    text: ''
  }

  handleText = (event) =>{
    this.setState({
    text : event.target.value
    })
  }

    render(){
      return(
        <form>
        <input type="text" onChange={event => this.handleText(event)} value={this.state.text} />
        <p> {this.state.text} </p>
        </form>
      )
    }
}

export default Form;
