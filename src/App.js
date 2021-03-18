import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from './redux/actionCreators';
import { Grid, FormControl, InputLabel, Button, Select, MenuItem, TextField } from '@material-ui/core';

function App() {
  const { location, token } = useSelector(state => state);
  const [success, setSuccess] = useState();
  const [c, setC] = useState();
  const [f, setF] = useState();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (token, location) {
      console.log('passing data')
      fetch(`http://api.weatherapi.com/v1/current.json?key=${token}&q=${location}`)
        .then(res => res.json())
        .then(data => {
          if (data.current.temp_c) {
            setC(data.current.temp_c);
          }
          if (data.current.temp_f) {
            setF(data.current.temp_f);
          }
          setSuccess(true);
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  let showPage1 =
    <FormControl >
      <FormControl >
        <TextField
          id="my-input"
          label='Your API Key'
          defaultValue={token}
          style={{
            marginLeft: '40px',
            marginRight: '40px',
            marginTop: '100px'
          }}
        />
      </FormControl>
      <FormControl >
        <InputLabel
          id="demo-simple-select-label"
          style={{
            marginLeft: '40px',
            marginRight: '40px',
            marginTop: '20px'
          }}
        >City name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          onChange={event => { dispatch(setLocation(event.target.value)) }}
          style={{
            marginLeft: '40px',
            marginRight: '40px',
            marginTop: '40px'
          }}
        >
          <MenuItem value="Kuala Lumpur">Kuala Lumpur</MenuItem>
          <MenuItem value="Singapore">Singapore</MenuItem>
        </Select>
      </FormControl>
      <FormControl >
        <Button
          variant="contained"
          onClick={handleSubmit}
          color="primary"
          style={{
            textDecorationStyle: 'bold',
            marginLeft: '40px',
            marginRight: '40px',
            marginTop: '40px'
          }}
        >Submit</Button>
      </FormControl>
    </FormControl>

  let showPage2 = null;
  if (c && f) {
    showPage2 =
      <FormControl >
        <TextField
          id="standard-read-only-input-celsius"
          label="Celsius"
          value={c}
          InputProps={{
            readOnly: true,
          }}
          style={{
            marginLeft: '40px',
            marginRight: '40px',
            marginTop: '100px'
          }}
        />
        <TextField
          id="standard-read-only-input-fahrenheit"
          label="Fahrenheit"
          value={f}
          InputProps={{
            readOnly: true,
          }}
          style={{
            marginLeft: '40px',
            marginRight: '40px',
            marginTop: '20px'
          }}
        />
        <Button
          variant="contained"
          onClick={() => { setSuccess(null) }}
          color="primary"
          style={{
            marginLeft: '40px',
            marginRight: '40px',
            marginTop: '40px'
          }}
        >Back</Button>
      </FormControl>
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{
        height: '100%',
        width: '100%'
      }}
    >
      {
        success ? <FormControl className="App-formControl">{showPage2}</FormControl> : <FormControl className="App-formControl">{showPage1}</FormControl>
      }
    </Grid>
  );
}

export default App;
