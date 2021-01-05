import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import "../../style/ConfirmForm.css";
import immmg from "../../assets/Oval9.png";
import TextField from "@material-ui/core/TextField";
import {
  setPatientEmail,
  setPatientNumber,
  selectName,
  selectPatientAge,
  selectPatientGender,
  selectType,
  selectDoctorInfoName,
  selectDoctorTitle,
  selectDateOfDoctor,
  selectTimeOfDoctor,
  setStepToInfo,
  changeStep,
} from "../../../features/counter/patientFormSlice";

function ConfirmForm() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const patientName = useSelector(selectName);
  const patientAge = useSelector(selectPatientAge);
  const patientGender = useSelector(selectPatientGender);
  const patientProblem = useSelector(selectType);
  const doctorName = useSelector(selectDoctorInfoName);
  const doctorTitle = useSelector(selectDoctorTitle);
  const doctorDate = useSelector(selectDateOfDoctor);
  const doctorTime = useSelector(selectTimeOfDoctor);
  console.log(doctorDate);

  const handleClick = () => {
    dispatch(setPatientNumber(number));
    dispatch(setPatientEmail(email));
    dispatch(changeStep());
  };

  return (
    <div className="confirm__form">
      <div className="confirm__form__fields">
        <div className="confirm__form__fields__section">
          <div className="confirm__form__fields__section__left">
            <p>Patient Info</p>
            <h4>{patientName}</h4>
            <div className="age___gender">
              {" "}
              <p>Age:{patientAge} </p> <p> Gender:{patientGender}</p>
            </div>
          </div>
          <div className="confirm__form__fields__section__right">
            <button onClick={() => dispatch(setStepToInfo(1))}>
              Change Info
            </button>
          </div>
        </div>
        <div className="confirm__form__fields__section">
          <div className="confirm__form__fields__section__left">
            <p>Problem</p>
            <div className="problem__tags">
              {patientProblem.map((item) => {
                return <h4>{item}.</h4>;
              })}
            </div>
            <p>Suggested Department: Urology</p>
          </div>
          <div className="confirm__form__fields__section__right">
            <button onClick={() => dispatch(setStepToInfo(2))}>
              Change Info
            </button>
          </div>
        </div>
        <div className="confirm__form__fields__section">
          <div className="confirm__form__fields__section3__left">
            <div className="confirm__form__fields__section3__left__image">
              <img src={immmg}></img>
            </div>
            <div className="confirm__form__fields__section3__left__info">
              <p>Selected Doctors</p>
              <h4>{doctorName}</h4>
              <p>{doctorTitle}</p>
            </div>
          </div>
          <div className="confirm__form__fields__section__right">
            <button onClick={() => dispatch(setStepToInfo(3))}>
              Change Doctor
            </button>
          </div>
        </div>
        <div className="confirm__form__fields__section">
          <div className="confirm__form__fields__section__left">
            <p>Date and Time</p>
            <h4>
              {doctorDate}, {doctorTime}
            </h4>
          </div>
          <div className="confirm__form__fields__section__right">
            <button onClick={() => dispatch(setStepToInfo(4))}>
              Change Info
            </button>
          </div>
        </div>
        <div className="confirm__form__fields__section4">
          <div className="confirm__form__fields__section__left">
            <p>Enter Email</p>
            <TextField
              id="outlined-basic"
              placeholder="i.e. martin@mail.com"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="confirm__form__fields__section4__right">
            <p>Contact Number</p>
            <TextField
              id="outlined-basic"
              placeholder="i.e. xxx-xxx-xxxx"
              variant="outlined"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>

        <Button
          variant="contained"
          color="grey"
          className={"button__end__form"}
          disableElevation
          onClick={handleClick}
        >
          Last step, confirm the info now
        </Button>
      </div>
    </div>
  );
}

export default ConfirmForm;
