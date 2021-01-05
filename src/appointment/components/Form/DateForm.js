import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import moment from "moment";
import Button from "@material-ui/core/Button";
import "../../style/DateForm.css";
import { useSelector, useDispatch } from "react-redux";
import {
  changeStep,
  setDateOfDoctor,
  setTimeOfDoctor,
  changeSteptoBack,
  selectDoctorInfoName,
  selectDoctorInfoImg,
  selectDoctorInfoImage,
} from "../../../features/counter/patientFormSlice";

function DateForm() {
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [time, setTime] = useState(moment(new Date()).format("HH-MM"));

  const handleChangeDate = (e) => {
    setDate(e.target.value);
    dispatch(setDateOfDoctor(date));
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
    dispatch(setTimeOfDoctor(time));
  };

  const dispatch = useDispatch();
  const doctorName = useSelector(selectDoctorInfoName);
  const doctorImg = useSelector(selectDoctorInfoImage);

  return (
    <div className="date__form">
      <div className="date__form__fields">
        <div className="date__form__fields__top">
          <div className="date__form__fields__top__left">
            <div className="photo">
              <img src={doctorImg}></img>
            </div>
          </div>
          <div className="date__form__fields__top__middle">
            <p>Selected Doctors</p>
            <h3>{doctorName}</h3>
            <p>Junior Surgeon</p>
          </div>
          <div className="date__form__fields__top__right">
            <button onClick={() => dispatch(changeSteptoBack())}>
              Change Doctor
            </button>
          </div>
        </div>

        <div className="date__form__fields__bottom">
          <p>Select an available date</p>
          <TextField
            name="date"
            id="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={handleChangeDate}
            fullWidth
            required
          />
        </div>
        <div className="date__form__fields__end">
          <p>Select a time slot</p>
          <TextField
            name="time"
            id="time"
            type="time"
            format="hh:mm:ss"
            InputLabelProps={{ shrink: true }}
            value={time}
            onChange={handleChangeTime}
            fullWidth
            required
          />
        </div>

        <Button
          variant="contained"
          color="grey"
          className={"button__end__date"}
          disableElevation
          onClick={() => dispatch(changeStep())}
        >
          Last step, confirm the info now
        </Button>
      </div>
    </div>
  );
}

export default DateForm;
