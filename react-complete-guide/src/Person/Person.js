import React from 'react';
import './Person.css';

const person = (props) => {
	return (
      <div className="person">
        <div className="name">{props.name}</div>
        <div onClick={props.onClickFn} className="age">{props.age} years old</div>
       	{props.children}
       	<input type="text" onChange={props.change} value={props.name}/>
      </div>
    );
}

export default person;

