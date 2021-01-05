import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../../style/DoctorsForm.css";
import DoctorsInfo from "./DoctorsInfo";
import { useSelector, useDispatch } from "react-redux";
import {
  changeStep,
  selectStep,
} from "../../../features/counter/patientFormSlice";

function DoctorsForm() {
  const dispatch = useDispatch();
  return (
    <div className="doctors__form">
      <div className="doctors__form__fields">
        <DoctorsInfo
          className="field__active"
          id="1"
          name="Dr.Roger Gordon"
          title="Senior Surgeon"
          hours="Mon-Tues, 10am-4pm"
          hoursWeekend="Fri-Sat, 2pm-8pm"
          image="https://i.ibb.co/ZHsWV5f/Oval8.png"
        />
        <DoctorsInfo
          id="2"
          name="Dr. Flora Thornton"
          title="Senior Surgeon"
          hours="Mon-Tues, 10am-4pm"
          hoursWeekend="Fri-Sat, 2pm-8pm"
          image="https://i.ibb.co/89Yr7b0/Oval9.png"
        />
        <DoctorsInfo
          id="3"
          name="Dr.Roger Gordon"
          title="Senior Surgeon"
          hours="Mon-Tues, 10am-4pm"
          hoursWeekend="Fri-Sat, 2pm-8pm"
          image="https://i.ibb.co/ZHsWV5f/Oval8.png"
        />
        <DoctorsInfo
          id="4"
          name="Dr. Flora Thornton"
          title="Senior Surgeon"
          hours="Mon-Tues, 10am-4pm"
          hoursWeekend="Fri-Sat, 2pm-8pm"
          image="https://i.ibb.co/89Yr7b0/Oval9.png"
        />
        <DoctorsInfo
          id="5"
          name="Dr.Roger Gordon"
          title="Senior Surgeon"
          hours="Mon-Tues, 10am-4pm"
          hoursWeekend="Fri-Sat, 2pm-8pm"
          image="https://i.ibb.co/ZHsWV5f/Oval8.png"
        />
        <DoctorsInfo
          id="6"
          name="Dr. Flora Thornton"
          title="Senior Surgeon"
          hours="Mon-Tues, 10am-4pm"
          hoursWeekend="Fri-Sat, 2pm-8pm"
          image="https://i.ibb.co/89Yr7b0/Oval9.png"
        />
        <DoctorsInfo
          id="7"
          name="Dr.Roger Gordon"
          title="Senior Surgeon"
          hours="Mon-Tues, 10am-4pm"
          hoursWeekend="Fri-Sat, 2pm-8pm"
          image="https://i.ibb.co/ZHsWV5f/Oval8.png"
        />
        <DoctorsInfo
          id="8"
          name="Dr. Flora Thornton"
          title="Senior Surgeon"
          hours="Mon-Tues, 10am-4pm"
          hoursWeekend="Fri-Sat, 2pm-8pm"
          image="https://i.ibb.co/89Yr7b0/Oval9.png"
        />
        <DoctorsInfo
          id="9"
          name="Dr.Roger Gordon"
          title="Senior Surgeon"
          hours="Mon-Tues, 10am-4pm"
          hoursWeekend="Fri-Sat, 2pm-8pm"
          image="https://i.ibb.co/ZHsWV5f/Oval8.png"
        />
        <DoctorsInfo
          id="10"
          name="Dr. Flora Thornton"
          title="Senior Surgeon"
          hours="Mon-Tues, 10am-4pm"
          hoursWeekend="Fri-Sat, 2pm-8pm"
          image="https://i.ibb.co/89Yr7b0/Oval9.png"
        />
      </div>
      <Button
        onClick={() => dispatch(changeStep())}
        variant="contained"
        color="blue"
        className="button__end__info"
        disableElevation
      >
        Almost there, select a date now
      </Button>
    </div>
  );
}

export default DoctorsForm;
