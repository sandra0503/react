import React, { Component } from 'react';
import './CharComponent.css'

const char = (props) => {

	return <div onClick={props.click} className='charComponent'>{props.value}</div>
}

export default char;