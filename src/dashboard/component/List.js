import React, { useState, useEffect } from "react";
import "../style/List.css";
import ListHome from "../component/ListHome";
import ListAppointments from "../component/ListAppointments";
import ListPatients from "../component/ListPatient";
import ListDoctors from "../component/ListDoctors";
import ListSettings from "../component/ListSettings";
import { useDispatch, useSelector } from "react-redux";
import notification from "../assets/notif.png";
import { db } from "../../config/firebase";
import { selectDashboardStep } from "../../features/counter/dashboardSlice";

function List() {
  const dispatch = useDispatch();
  const dashStep = useSelector(selectDashboardStep);

  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    db.collection("data").onSnapshot((snapshot) =>
      setPatientData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  switch (dashStep) {
    case 1:
      return (
        <div className="list__container">
          <div className="notification__dashboard">
            <img src={notification} alt="" />
          </div>
          <ListHome />
        </div>
      );
      break;
    case 2:
      return (
        <div className="list__container">
          <div className="notification__dashboard">
            <img src={notification} alt="" />
          </div>
          <div className="info__dashboard">
            <div className="info__dashboard__left">
              <h2>Appointment Requests</h2>
              <p>All the active appointment requests are listed here</p>
            </div>
            <div className="info__dashboard__right">
              <button>Add Manual Appointment</button>
            </div>
          </div>
          <div className="fields__dashboard">
            <div className="fields__dashboard__left">
              <input placeholder="Search ID, Name here"></input>
            </div>
            <div className="fields__dashboard__right">
              <button>Filter by department</button>
              <button>Filter by doctor</button>
              <button>Today, May 20, 2018</button>
            </div>
          </div>
          <ListAppointments />
        </div>
      );
      break;
    case 3:
      return (
        <div className="list__container">
          <div className="notification__dashboard">
            <img src={notification} alt="" />
          </div>
          <div className="info__dashboard">
            <div className="info__dashboard__left">
              <h2>Medico Patients</h2>
              <p>All the new and old patients are listed here</p>
            </div>
            <div className="info__dashboard__right">
              <button>Add New Patient</button>
            </div>
          </div>
          <div className="fields__dashboard">
            <div className="fields__dashboard__left">
              <input placeholder="Search ID, Name here"></input>
            </div>
            <div className="fields__dashboard__right">
              <button>Filter by department</button>
              <button>Filter by doctor</button>
              <button>Today, May 20, 2018</button>
            </div>
          </div>

          <div className="cards__container">
            {patientData.map(
              ({ id, data: { name, age, gender, doctorName } }) => (
                <ListPatients
                  id={Math.floor(Math.random() * 100000) + 1}
                  key={id}
                  patient={name}
                  age={age}
                  gender={gender}
                  doctor={doctorName}
                  department="Anaesthesiology"
                />
              )
            )}
          </div>
        </div>
      );
      break;
    case 4:
      return (
        <div className="list__container">
          <ListDoctors />
        </div>
      );
      break;
    case 5:
      return (
        <div className="list__container">
          <ListSettings />
        </div>
      );
      break;

    default:
      break;
  }
}

export default List;
