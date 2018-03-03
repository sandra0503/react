import React, { Component } from 'react';

const validation = (props) => {

	let text = props.length < 5 ? 'Text too short' : 'Text long enough';

	return <div>{text}</div>
}

export default validation;