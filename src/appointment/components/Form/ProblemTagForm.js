import React, { useState } from "react";
import "../../style/ProblemTagForm.css";
import { useDispatch } from "react-redux";
import { setTypeOfProblem } from "../../../features/counter/patientFormSlice";

function ProblemTagForm() {
  const dispatch = useDispatch();
  const [types, setTypes] = useState([]);

  const removeTypes = (indexToRemove) => {
    setTypes(types.filter((_, i) => i !== indexToRemove));
    dispatch(setTypeOfProblem(types));
  };

  const addTypes = (e) => {
    if (e.key === "Enter") {
      setTypes([...types, e.target.value]);
      e.target.value = "";
    }
  };
  dispatch(setTypeOfProblem(types));

  return (
    <div className="problem__tag__form">
      <div className="tags__input">
        <ul className="tags">
          {types.map((type, i) => {
            return (
              <li key={i}>
                {type}{" "}
                <button className="x" onClick={() => removeTypes(i)}>
                  +
                </button>
              </li>
            );
          })}
          <input
            className="enter__text"
            type="text"
            size="4"
            placeholder="Press enter to add problems"
            onKeyUp={addTypes}
          />
        </ul>
      </div>
    </div>
  );
}

export default ProblemTagForm;
