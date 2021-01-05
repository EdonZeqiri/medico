import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../style/SuccessForm.css";
import shape from "../../assets/oval_oval.png";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
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
  selectStep,
  changeStep,
  setStepToInfo,
  selectPatientDays,
  selectPatientNumber,
  selectPatientEmail,
} from "../../../features/counter/patientFormSlice";
import { db } from "../../../config/firebase";

function SuccessForm() {
  const dispatch = useDispatch();
  const patientName = useSelector(selectName);
  const patientAge = useSelector(selectPatientAge);
  const patientGender = useSelector(selectPatientGender);
  const patientProblem = useSelector(selectType);
  const doctorName = useSelector(selectDoctorInfoName);
  const doctorTitle = useSelector(selectDoctorTitle);
  const doctorDate = useSelector(selectDateOfDoctor);
  const doctorTime = useSelector(selectTimeOfDoctor);
  const patientDays = useSelector(selectPatientDays);
  const patientNumber = useSelector(selectPatientNumber);
  const patientEmail = useSelector(selectPatientEmail);

  useEffect(() => {
    db.collection("data").add({
      name: patientName,
      age: patientAge,
      gender: patientGender,
      problem: patientProblem,
      days: patientDays,
      email: patientEmail,
      number: patientNumber,
      doctorName: doctorName,
      doctorTitle: doctorTitle,
      doctorTime: doctorTime,
      doctorDate: doctorDate,
    });
  });

  return (
    <div className="success__form">
      <div className="success__form__fields">
        <img src={shape}></img>
        <h1>Thank You!</h1>
        <p>
          Your appointment is successfully received. Please meet us at your
          selected date and time.
        </p>
        <p>For any kind of inquiry, please call us at 543-323-3456</p>

        <Button
          color="grey"
          className={"button__end__form"}
          variant="contained"
          onClick={() => dispatch(setStepToInfo(1))}
          disableElevation
        >
          Go back to home
        </Button>
      </div>
    </div>
  );
}

export default SuccessForm;
