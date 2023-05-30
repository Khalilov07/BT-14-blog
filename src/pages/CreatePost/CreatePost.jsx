import React, { useState } from 'react';
import "./createpost.css"
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import postServices from '../../services/services'


const CreatePost = () => {

  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState(0)
  const [open, setOpen] = useState(false);

  const handelPost = (e) => {
    e.preventDefault()
    const newCourse = {
      title,
      duration,
      important: Math.random() > 0.5
      // 0.2 > 0.5 false
      // 0.6 > 0.5 true
    }

    postServices.postData(newCourse)
      .then(res => {
        setOpen(true)
        setTitle("")
        setDuration(0)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        X
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className='form__wrapper'>
      <form onSubmit={handelPost}>

        <h1 style={{ paddingBottom: "10px" }}>Create Post</h1>

        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={title}
          type="text"
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          style={{ marginTop: "20px" }}
          id="outlined-basic"
          label="Duration"
          variant="outlined"
          value={duration}
          type="number"
          placeholder='Duration'
          onChange={(e) => setDuration(e.target.value)}
        />

        <Button style={{ marginTop: "20px" }} variant="contained" type='submit'>Contained</Button>

      </form>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Send"
        action={action}
      />

    </div>
  );
};

export default CreatePost;