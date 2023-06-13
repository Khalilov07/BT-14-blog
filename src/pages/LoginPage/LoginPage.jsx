import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import userSerivces from '../../services/userSerivces';

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const authUser = (e) => {

        e.preventDefault()

        const user = {
            email,
            password
        }

        userSerivces.authUser(user)
            .then(res => console.log(res.data))

    }

    return (
        <>
            <h2>Login: </h2>
            <div className='form__wrapper'>
                <form onSubmit={authUser}>
                    <h1 style={{ marginBottom: "20px" }}>Login</h1>
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
                        style={{ margin: "20px 0" }}
                        value={password}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button variant="outlined" type='submit'>Send</Button>
                </form>
            </div>
        </>
    );
};

export default LoginPage;