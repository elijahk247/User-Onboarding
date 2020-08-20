import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// imports for working on the form
import Form from './Form'
import User from './User'

// get imports for web and requirements
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './formSchema'

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
  const [formValues, setFormValues] = useState(initialFormValues);    // object
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled)

  ///// NETWORKING HELPERS /////
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => {
        console.log('Error: ', err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  ///// FORM ACTIONS /////
  const inputChange = (name, value) => {
    // validation with yup
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({...formErrors, [name]: '',})
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues, [name]: value
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }

    // passing in newUser to post into reqres api
    postNewUser(newUser);
  }

  ///// SIDE EFFECTS /////
  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid);
      })
  }, [formValues])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <p>
          Advanced Form Management
        </p>
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Form
        values={formValues}
        errors={formErrors}
        disabled={disabled}
        inputChange={inputChange}
        submit={submit}
      />
      {
        users.map(user => {
          return(
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
