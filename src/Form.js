import React from 'react'



export default function Form(props) {
    const { values, errors, disabled, inputChange, submit } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onInputChange = evt => {
        const { name, value } = evt.target;
        inputChange(name, value);
    }

    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Onboard a new user</h2>

                {/* button starts out disabled untill all parameters filled */}
                <button disabled={disabled}>submit</button>

                <div className='errors'>
                    {/* to render validation errors here */}
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>Please input the name, email, and password for the User</h4>

                {/* ///// TEXT INPUTS ///// */}
                <label>Name&nbsp;
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>

                <label>Email&nbsp;
                    <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='text'
                    />
                </label>

                <label>Password&nbsp;
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='text'
                    />
                </label>

                {/* ///// RADIO BUTTONS ///// */}
                <label>Agree to Terms of Condition
                    <input
                        type='radio'
                        name='terms'
                        value='agree'
                        checked={values.terms === 'agree'}
                        onChange={onInputChange}
                    />
                </label>

                <label>Disagree to Terms of Condition
                    <input 
                        type='radio'
                        name='terms'
                        value='disagree'
                        checked={values.terms === 'disagree'}
                        onChange={onInputChange}
                    />
                </label>
            </div>
        </form>
    )
}

