import "./App.css";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MessageTable from "./MessageTable";
import Footer from "./Footer";
import Compose from "./Compose";
import Login from "./Login";
import skybg from "./img/buttonbg.png";
import Background from "./img/bgimg.jpg";
import mailicon from "./img/mailicon2.png";
import mailicon2 from "./img/1403413.png";
import homeicon from "./img/homeicon.png";
import homeicon2 from "./img/homeicon2.png";
import historyicon from "./img/historyicon.png";

//backgroundImage: `url(${Background})`
function App() {
  return (
    <div style={{ backgroundImage: `url(${skybg})` }}>
      <div style={{ textAlign: "center", paddingTop: "3vh" }}>
        <img
          src={mailicon2}
          style={{
            width: "3.8vw",
            border: "2px solid white",
            padding: "0.5vh",
            borderRadius: "0.8vw",
          }}
        ></img>
        <br></br>
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: "5vh",
            color: "cornsilk",
            display: "-webkit-inline-flex",
            // borderTopLeftRadius:"8px",
            // // borderBottomRightRadius:"8px",
            // border:"2px solid grey",
            // padding:"1vh"
          }}
        >
          <i>SKY</i>
          <b>mail</b>
        </span>
      </div>

      <div
        style={{
          border: "2px double black",
          marginTop: "1vh",
          backgroundImage: `url(${Background})`,
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="left"
          style={{ paddingLeft: "2vw", marginTop: "1vh", marginBottom: "1vh" }}
        >
          <Grid item>
            <Button
              id="home"
              variant="outlined"
              style={{
                width: "10vw",
                border: "1.5px solid cornsilk",
                borderRadius: "20px",
              }}
            >
              <img src={homeicon2} style={{ width: "2vw" }}></img>&nbsp;
              <b>Home</b>
            </Button>
          </Grid>
          <Grid item style={{ paddingLeft: "2vw" }}>
            <Compose />
            {/* <Button id="compose" variant="outlined" style={{backgroundColor:"coral"}}>
              compose
            </Button> */}
          </Grid>
          <Grid item style={{ paddingLeft: "2vw" }}>
            <Button
              id="History"
              variant="outlined"
              style={{
                width: "10vw",
                border: "1.5px solid cornsilk",
                borderRadius: "20px",
              }}
            >
              <img src={historyicon} style={{ width: "2vw" }}></img>&nbsp;
              <b>History</b>
            </Button>
          </Grid>
        </Grid>
      </div>

      <MessageTable />
      <div style={{ marginTop: "33px" }}></div>
      <Footer />
    </div>
  );
}

export default App;
