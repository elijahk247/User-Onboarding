import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// get imports 
import Form from './Form'
import axios from 'axios'
import * as yup from 'yup'

///// INITIAL STATES /////
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  password: '',
  ///// RADIO BUTTONS /////
  terms: '',
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialUsers = []
const initialDisabled = true;

function App() {
  ///// STATES /////
  const [users, setUsers] = useState(initialUsers);    // array of user objects
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
