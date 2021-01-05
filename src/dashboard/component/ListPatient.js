import React, { useEffect, useState } from "react";
import "../style/ListPatient.css";
import topImg from "../assets/Oval2-01.png";
import Button from "@material-ui/core/Button";

function ListPatient({ patient, gender, age, department, doctor, id }) {
  return (
    <div className="list__patient__container">
      <div class="patient__card">
        <div className="patient__top__conatiner">
          <div className="image__name">
            <img src={topImg} alt="" />
            <div className="name__age">
              <h4>{patient}</h4>
              <div className="gender__age">
                <p>{gender}</p>
                <p>{age}</p>
              </div>
            </div>
          </div>
          <div className="patient__id">
            <p>#{id}</p>
          </div>
        </div>

        <div className="patient__center__container">
          <div className="center__left">
            <p>Department</p>
            <h4>{department}</h4>
          </div>
          <div className="center__right">
            <p>Doctor</p>
            <h4>{doctor}</h4>
          </div>
        </div>

        <div className="patient__end__conatiner">
          <Button
            variant="contained"
            color="grey"
            className={"button__patient"}
            disableElevation
          >
            DETAILS
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ListPatient;
