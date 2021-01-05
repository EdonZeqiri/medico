import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../style/MenuList.css";
import {
  selectDashboardStep,
  changeDashboardStep,
} from "../../features/counter/dashboardSlice";

function MenuList() {
  const dispatch = useDispatch();
  const dashStep = useSelector(selectDashboardStep);

  return (
    <div className="menu__list">
      <button
        onClick={() => dispatch(changeDashboardStep(1))}
        className={dashStep == 1 ? "menu__link__enter" : "menu__link"}
      >
        Home
      </button>
      <button
        onClick={() => dispatch(changeDashboardStep(2))}
        className={dashStep == 2 ? "menu__link__enter" : "menu__link"}
      >
        Appointments
      </button>
      <button
        onClick={() => dispatch(changeDashboardStep(3))}
        className={dashStep == 3 ? "menu__link__enter" : "menu__link"}
      >
        Patients
      </button>
      <button
        onClick={() => dispatch(changeDashboardStep(4))}
        className={dashStep == 4 ? "menu__link__enter" : "menu__link"}
      >
        Doctors
      </button>
      <button
        onClick={() => dispatch(changeDashboardStep(5))}
        className={dashStep == 5 ? "menu__link__enter" : "menu__link"}
      >
        Settings
      </button>
    </div>
  );
}

export default MenuList;
