import "./App.css";
import Background from "./img/bgimg.jpg";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MessageTable from './MessageTable';
import Footer from "./Footer";
import Compose from './Compose';
import Login from './Login';

function Home() {
  return (
    <div style={{ backgroundImage: `url(${Background})` }}>
      <div>
        <span
          style={{
            textAlign: "left",
            marginLeft: "2vw",
            marginTop: "2vh",
    
            fontFamily: "sans-serif",
            fontSize: "5vh",
            color: "black",
          }}
        >
          SKYmail
        </span>
      </div>
      <div style={{border:"2px double black",marginTop:"1vh"}}>
      <Grid
        container
        direction="row"
        alignItems="left"
        style={{paddingLeft:"2vw",marginTop:"1vh",marginBottom:"1vh"}}
      >
        <Grid item>
        <Button id="home" variant="outlined" style={{backgroundColor:"coral"}}>
              Home
            </Button>
        </Grid>
        <Grid item style={{paddingLeft:"2vw"}}>
          <Compose/>
        {/* <Button id="compose" variant="outlined" style={{backgroundColor:"coral"}}>
              compose
            </Button> */}
        </Grid>
        <Grid item style={{paddingLeft:"2vw"}}>
        <Button id="History" variant="outlined" style={{backgroundColor:"coral"}}>
              History
            </Button>
        </Grid>
      </Grid>

      
      </div>

      <MessageTable/>
      <div style={{marginTop:"33px"}}>

      </div>
      <Footer/>
    </div>
  );
}

export default Home;
