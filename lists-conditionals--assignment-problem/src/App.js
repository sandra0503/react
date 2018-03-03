import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js'
import CharComponent from './CharComponent/CharComponent.js'

class App extends Component {

  state = {
    chars: []
  }

  getLength = (e) => {
    const chars = e.target.value.split('');

    this.setState( {
      chars: [...chars]
    } );
  }

  deleteCharFromText = (char) => {
    let charArray = [...this.state.chars];

    charArray = charArray.filter(c => c !== char);

    this.setState({
      chars: charArray
    });
  }

  render() {
    let chars = this.state.chars.map( (c, index) => {
      return <CharComponent click={() => this.deleteCharFromText(c)} value={c} />;
    })

    return (
      <div className="App">
        <input value={this.state.chars.join('')} onChange={(event) => this.getLength(event)}></input>
        <ValidationComponent length={this.state.chars.length}/>
        <p>{this.state.chars.length}</p>
        {chars}
      </div>
    );
  }
}

export default App;
