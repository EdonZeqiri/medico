import React, { useState, useEffect } from "react";
import "../style/ListAppointments.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { db } from "../../config/firebase";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ListAppointments() {
  useEffect(() => {
    db.collection("data").onSnapshot((snapshot) =>
      setAppointmentsData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [list, setList] = useState({
    i: null,
    name: "",
    gender: "",
    doctorName: "",
    doctorDate: "",
    doctorTime: "",
    email: "",
  });

  const handleOpen = (
    e,
    i,
    name,
    gender,
    doctorName,
    doctorDate,
    doctorTime,
    email
  ) => {
    setOpen(true);
    e.preventDefault();
    setList({
      i: (e.target.entry, i + 1),
      name: (e.target.entry, name),
      gender: (e.target.entry, gender),
      doctorName: (e.target.entry, doctorName),
      doctorDate: (e.target.entry, doctorDate),
      doctorTime: (e.target.entry, doctorTime),
      email: (e.target.entry, email),
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [appointmentsData, setAppointmentsData] = useState([]);

  return (
    <div className="list__appointments__container">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        onClose={handleClose}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="modal__container">
              <div className="modal__top">
                <h3>M-00{list.i}</h3>
                <button>Edit</button>
              </div>
              <div className="modal__center">
                <div className="modal__center__left">
                  <p>Name</p>
                  <h4>{list.name}</h4>
                  <p>Email</p>
                  <h4>{list.email}</h4>
                  <p>Department</p>
                  <h4>Neorology</h4>
                  <p>Requested Date</p>
                  <h4>{list.doctorDate}</h4>
                </div>
                <div className="modal__center__right">
                  <p>Gender</p>
                  <h4>{list.gender}</h4>
                  <p>Phone</p>
                  <h4>763-726-2382</h4>
                  <p>Doctor</p>
                  <h4>{list.doctorName}</h4>
                  <p>Time</p>
                  <h4>{list.doctorTime}</h4>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Requested Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointmentsData.map(
              (
                {
                  data: {
                    name,
                    gender,
                    doctorName,
                    doctorDate,
                    doctorTime,
                    email,
                  },
                },
                i
              ) => {
                return (
                  <TableRow
                    key={i}
                    onClick={(e) =>
                      handleOpen(
                        e,
                        i,
                        name,
                        gender,
                        doctorName,
                        doctorDate,
                        doctorTime,
                        email
                      )
                    }
                  >
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{gender}</TableCell>
                    <TableCell>Neurology</TableCell>
                    <TableCell>{doctorName}</TableCell>
                    <TableCell>{doctorDate}</TableCell>
                    <TableCell>{doctorTime}</TableCell>
                    <TableCell>
                      <div className="buttons__table">
                        <Button
                          variant="contained"
                          color="grey"
                          className={"button__table"}
                        >
                          DETAILS
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          className={"button__table"}
                          disableElevation
                        >
                          CANCEL
                        </Button>
                      </div>{" "}
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ListAppointments;
