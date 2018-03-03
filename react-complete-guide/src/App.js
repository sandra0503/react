import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [

      { id: '01', name: 'Sandra', age: 27 },
      { id: '02', name: 'Alex', age: 32 },
      { id: '03', name: 'Aleka', age: 25 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    } )
  }

  deletePersonHandler = (personIndex) => {
    // do not mutate the original state!
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    this.setState({showPersons: this.state.showPersons ? false : true })
  }

  render () {
    const style = {
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      outline: 'none',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person key={person.id}
                           name={person.name}
                           age={person.age}
                           onClickFn={() => this.deletePersonHandler(index)}
                           change={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!'));
  }
}

export default App;
