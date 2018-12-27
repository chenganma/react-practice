//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Joke from './Joke'

function App(){
  return(
    <div>
      <Joke 
        question="1"
        punchLine="01"
      />
      <Joke
        question="2"
        punchLine="02"
      />
      <Joke
        question="3"
        punchLine="03"
      />
      <Joke
        question="4"
        punchLine="04"
      />
      <Joke
        question="5"
        punchLine="05"
      />
    </div>
  )
}

export default App
