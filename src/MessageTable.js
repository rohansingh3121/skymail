import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import tablebg from './img/cool-background.png';

const useStyles = makeStyles({
  container: {
    maxWidth: "100%",
    maxHeight: "400px",
    mixBlendMode: "normal",
  },
});

function createData(to,message, date) {
  return { to,message, date };
}

const rows = [
  createData("Rohan","Frozen yoghurt", "2-03-21"),
  createData("Rohan","Ice cream sandwich", "2-03-21"),
  createData("Rohan","Eclair", "2-03-21"),
  createData("Rohan","Cupcake", "2-03-21"),
  createData("Rohan","Gingerbread", "2-03-21"),
   createData("Rohan","Kitkat", "2-03-21"),
//   createData("Rohan","Scone", "2-03-21"),
];

const headstyle = {
  background: "black",
  color: "#FFFFFF",
  fontSize: "19.5px",
  borderBottom: "2px solid black",
  fontFamily: "Ubuntu-Regular",
};

function MessageTable() {
  const classes = useStyles();
  return (
    <>
      <TableContainer
        component={Paper}
        id="scrollableDiv"
        style={{
          background: "#f2f3f4",
          width: "80vw",
          marginLeft: "10vw",
          marginTop: "5vh",
        }}
      >
        <Table className={classes.table} stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell size="large" style={headstyle} align="left">
                To
              </TableCell>
              <TableCell size="large" style={headstyle} align="left">
                Subject
              </TableCell>

              <TableCell style={headstyle} align="center">
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundImage: `url(${tablebg})` }}>
            {rows.map((row) => (
              <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                  {row.to}
                </TableCell>
                <TableCell >
                  {row.message}
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MessageTable;
