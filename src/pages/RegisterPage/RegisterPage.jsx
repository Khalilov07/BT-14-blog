import React, { useState } from 'react';
import userSerivces from '../../services/userSerivces';
import './registerpage.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const RegisterPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(false)

    message ? alert("Ошибка") : null

    const addUser = (e) => {

        e.preventDefault()

        const newUser = {
            email,
            password
        }

        userSerivces.addUser(newUser)
            .then(res => console.log(res.data))
            .catch(err => setMessage(true))
            
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

                <Button variant="outlined" type='submit'>Send</Button>
            </form>
        </div>
    );
};

export default RegisterPage;