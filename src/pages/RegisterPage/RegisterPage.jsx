import React, { useState } from 'react';
import userSerivces from '../../services/userSerivces';
import './registerpage.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const RegisterPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')


    const addUser = (e) => {

        e.preventDefault()

        const newUser = {
            email,
            password,
            login
        }

        userSerivces.addUser(newUser)
            .then(res => console.log(res.data))
    }

    return (
        <div className='form__wrapper'>
            <form onSubmit={addUser}>
                <h1 style={{marginBottom: "20px"}}>Register</h1>
                <TextField
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined"
                    value={email}
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    style={{margin: "20px 0"}}
                    value={password}
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <TextField
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                    style={{marginBottom: 20}}
                    value={login}
                    type='text'
                    onChange={(e) => setLogin(e.target.value)}
                />

                <Button variant="outlined" type='submit'>Send</Button>
            </form>
        </div>
    );
};

export default RegisterPage;