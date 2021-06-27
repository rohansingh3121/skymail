import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { pxToRem, pxToVh, pxToVw } from "./theme";
import { Grid } from "@material-ui/core";
import composeicon from './img/composeicon.png';
import composeicon2 from './img/composeicon2.png';
import composeicon3 from './img/composeicon3.png';



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

var data = [];
export const View = (props) => {
  data = props;
  return props;
};

const Compose = () => {
  //   let [responseData, setResponseData] = React.useState([]);
  //   const viewcc = () => {
  //     let len = data.length;
  //     let ids = data;
  //     console.log(data);
  //     for (let i = 0; i < len; i++) {
  //       axios
  //         .get(
  //           `http://localhost:8080/1805350/fetchingCorrespondence?doc_id=${ids[i]}`
  //         )
  //         .then((response) => {
  //           console.log(response);
  //           setResponseData([...responseData, ...response.data]);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   };

  //   console.log(responseData);

  //   const [x] = responseData;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    window.location.reload(false);
  };

  const handleClose1 = () => {
    setOpen(false);
    window.location.reload(false);
  };

  const viewcorrstyle = {
    backgroundColor: "coral",
    height: "6vh",
  };

  return (
    <>
      <Button
        id="viewcorr"
        style={{width: "10vw", border: "1.5px solid cornsilk",height:"6vh",borderRadius:"20px"}}
        variant="outlined"
        onClick={() => {
          handleClickOpen();
          //   viewcc();
        }}
      >
        <img src={composeicon} style={{width:"2vw"}}></img>&nbsp;
        <p><b>Compose</b></p>
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle
          className="adddialog"
          onClose={handleClose}
          style={{ color: "white", backgroundColor: "#151019" }}
        >
          <Grid
            container
            direction="row"
            justify=""
            alignItems="flex-start"
            // spacing={2}
            style={{ marginLeft: "1px" }}
          >
            New Message
          </Grid>
        </DialogTitle>

        <DialogContent
          className="adddialog"
          dividers
          style={{ padding: "20px",backgroundColor:"#9CB0D3" }}
        >
          <Grid container direction="row" alignItems="flex-start">
              <form>
                  <label>To </label>&nbsp;&nbsp;<input style={{width:"20vw"}} type="email"></input><br></br>
                  <label>Cc </label>&nbsp;&nbsp;<input style={{width:"20vw"}} type="text"></input><br></br>
                  <label>Bcc </label>&nbsp;<input style={{width:"20vw"}} type="text"></input><br></br><br></br>
                  <label>Subject </label>&nbsp;<input style={{width:"25vw",height:"4vh"}} type="text"></input><br></br><br></br>
                   <textarea rows="14" cols="122"></textarea>
              </form>
            </Grid>
        </DialogContent>
        <DialogActions className="adddialog" style={{backgroundColor:"#151019"}}>
          <Button
            autoFocus
            variant="outlined"
            style={{
              backgroundColor:"coral",
              textTransform: "none",
              fontFamily: "Ubuntu-Regular",
              color:"white"
            }}
            onClick={handleClose1}
          >
            Schedule Send
          </Button>
          <Button
            autoFocus
            onClick={() => {}}
            variant="contained"
            style={{
              background: "coral",
              color: "#FFFFFF",
              textTransform: "none",
              fontFamily: "Ubuntu-Regular",
            }}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Compose;
