import React, { useState } from 'react';
import "./createpost.css"
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';

const CreatePost = () => {

  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState(0)
  const [open, setOpen] = useState(false);

  const handelPost = (e) => {
    e.preventDefault()

    const newCourse = {
      title,
      duration
    }

    axios.post("http://localhost:3001/courses", newCourse)
      .then(res => {
        setOpen(true)
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
    <div>
      <form onSubmit={handelPost}>

        <input
          value={title}
          type="text"
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          value={duration}
          type="number"
          placeholder='Duration'
          onChange={(e) => setDuration(e.target.value)}
        />

        <button type='submit'>Send</button>

      </form>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Send"
        action={action}
      />

    </div>
  );
};

export default CreatePost;