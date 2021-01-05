import React from "react";
import "../style/CrudForm.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function CrudForm() {
  return (
    <div className="CrudForm__Container">
      <h1>It’s easy to make an appointment here in Medico.</h1>
      <p>Let’s get started with the basic things</p>
      <div className="Form__Container__Fields">
        <div className="Form__Container__Fields__Top">
          <p>What is the patient name?</p>
          <TextField
            id="outlined-basic"
            placeholder="i.e. Martin Jones"
            variant="outlined"
          />
        </div>
        <div className="Form__Container__Fields__Bottom">
          <div className="Form__Container__Fields__Bottom__Left">
            <p>Select patient gender</p>
            <div className="male__female">
              <label>Male</label>
              <input type="checkbox"></input>
              <label>Female</label>
              <input type="checkbox"></input>
            </div>
          </div>
          <div className="Form__Container__Fields__Bottom__Right">
            <p>How old is patient?</p>
            <select>
              <option value="0">Select age:</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrudForm;
