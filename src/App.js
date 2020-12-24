import logo from './logo.svg';
import './App.css';
import { Button, IconButton, Paper } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import PublicRoundedIcon from '@material-ui/icons/PublicRounded';
import video from './Videos/Gifbackground.mp4';
import Background from './background.jpeg';
function App() {
  return (
    <div className="App" >

      <Grid container style={{backgroundImage: `url(${Background})`, color:'#fff'}}>

        <Grid item xs={12} sm={10}>
          <h1 >This is a Dummy Company Name!</h1>
        </Grid>
        <Grid item xs={12} sm={2} style={{ padding: 0, margin: 0 }}>
          <Button variant='text' size='small' style={{backgroundImage: `url(${Background})`, color:'#fff'}}>
            <PublicRoundedIcon />
          Available Across the Globe
          </Button>
        </Grid>
        <Grid item xs={0} sm={8}>
        </Grid>
        <Grid item xs={3} sm={1} >
          <Button variant="contained"  size="large" color="default">Services</Button>
        </Grid>
        <Grid item xs={3} sm={1}>
          <Button variant="contained"  size="large" color="default">About</Button>
        </Grid>
        <Grid item xs={3} sm={1}>
          <Button variant="contained"  size="large" color="default" >Contact</Button>
        </Grid>

        <Grid item xs={3} sm={1}>
          <Button variant="contained" size='large' >Login</Button>
        </Grid>
      </Grid>

      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
      </header>

      
    </div>
  );
}

export default App;
