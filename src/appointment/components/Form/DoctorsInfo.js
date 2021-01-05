import React from "react";
import "../../style/DoctorsInfo.css";
import {
  selectFieldColor,
  selectDoctorID,
  changeFieldColor,
  addDoctor,
} from "../../../features/counter/patientFormSlice";
import { useSelector, useDispatch } from "react-redux";

function DoctorsForm({
  id,
  name,
  title,
  image,
  hours,
  hoursWeekend,
  className,
}) {
  const dispatch = useDispatch();
  const modeFieldActive = useSelector(selectFieldColor);
  const docID = useSelector(selectDoctorID);

  const handleClick = () => {
    dispatch(changeFieldColor());
    dispatch(
      addDoctor({
        id: id,
        name: name,
        title: title,
        image: image,
        hours: hours,
        hoursWeekend: hoursWeekend,
      })
    );
  };

  return (
    <div
      className={docID === id ? "field__active" : "doctors__info"}
      key={id}
      onClick={handleClick}
    >
      <div className="doctors__info__left">
        <div className="circle">
          <div className="photo">
            <img src={image}></img>
          </div>
        </div>
        <div className="doctors__info__left__name">
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
      <div className="doctors__info__right">
        <p>{hours}</p>
        <p>{hoursWeekend}</p>
      </div>
    </div>
  );
}

export default DoctorsForm;
