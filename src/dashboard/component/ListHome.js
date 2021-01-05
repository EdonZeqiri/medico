import React from "react";
import "../style/ListHome.css";
import Chart from "./Chart";
import doc from "../assets/doc-01.png";
import doc2 from "../assets/doc-02.png";
import yellow from "../assets/yellow.png";
import blue from "../assets/blue.png";
import chart from "../assets/chart.png";
import gradient1 from "../assets/gradient1.png";
import gradient2 from "../assets/gradient2.png";

function ListHome() {
  return (
    <div className="list__home__container">
      <div className="list__home__top__container">
        <h3>Quick stats</h3>
        <div className="list__home__top__cards__container">
          <div className="home__top__card">
            <p>Total Patients</p>
            <h1>45,673</h1>
          </div>
          <div className="home__top__card">
            <p>Pending Appointments</p>
            <h1>67</h1>
          </div>
          <div className="home__top__card">
            <p>New Patients</p>
            <h1>45</h1>
          </div>
          <div className="home__top__card">
            <p>Returning Patients</p>
            <h1>32%</h1>
          </div>
          <div className="home__top__card">
            <p>Today’s Earnings</p>
            <h1>$59,624</h1>
          </div>
          <div className="home__top__card">
            <p>Yesterday's Earnings</p>
            <h1>$63,457</h1>
          </div>
        </div>
      </div>

      <div className="list__home__center__container">
        {/* 
                ----Upcoming appointments----
            */}
        <div className="list__home__center__container__left">
          <h3>Upcoming appointments</h3>
          <div className="list__home__center__left">
            <div className="patient__field">
              <div className="field__top">
                <h2>Dora Floyd</h2>
                <p>in next 2 hours</p>
              </div>
              <div className="field__center">
                <p>Anaesthesiology</p>
                <p>Dr. Leah Baker</p>
              </div>
              <div className="field__end">
                <button className="call__patient">CALL PATIENT</button>
                <button>RE-SCHEDULE</button>
              </div>
            </div>
            <div className="patient__field">
              <div className="field__top">
                <h2>Dora Floyd</h2>
                <p>in next 2 hours</p>
              </div>
              <div className="field__center">
                <p>Anaesthesiology</p>
                <p>Dr. Leah Baker</p>
              </div>
              <div className="field__end">
                <button className="call__patient">CALL PATIENT</button>
                <button>RE-SCHEDULE</button>
              </div>
            </div>
            <div className="patient__field">
              <div className="field__top">
                <h2>Dora Floyd</h2>
                <p>in next 2 hours</p>
              </div>
              <div className="field__center">
                <p>Anaesthesiology</p>
                <p>Dr. Leah Baker</p>
              </div>
              <div className="field__end">
                <button className="call__patient">CALL PATIENT</button>
                <button>RE-SCHEDULE</button>
              </div>
            </div>
            <div className="patient__field">
              <div className="field__top">
                <h2>Dora Floyd</h2>
                <p>in next 2 hours</p>
              </div>
              <div className="field__center">
                <p>Anaesthesiology</p>
                <p>Dr. Leah Baker</p>
              </div>
              <div className="field__end">
                <button className="call__patient">CALL PATIENT</button>
                <button>RE-SCHEDULE</button>
              </div>
            </div>
            <div className="patient__field">
              <div className="field__top">
                <h2>Dora Floyd</h2>
                <p>in next 2 hours</p>
              </div>
              <div className="field__center">
                <p>Anaesthesiology</p>
                <p>Dr. Leah Baker</p>
              </div>
              <div className="field__end">
                <button className="call__patient">CALL PATIENT</button>
                <button>RE-SCHEDULE</button>
              </div>
            </div>
          </div>
        </div>

        {/* 
                <----Website visitor status---->
                */}

        <div className="list__home__center__right">
          <div className="home__center__right__top">
            <h3>Website visitor status</h3>
            <div className="graph__container">
              <div className="info__chart">
                <div className="costumers">
                  <p> {<img src={yellow} />} New customers</p>
                  <p> {<img src={blue} />} Returning customers</p>
                </div>
                <p>Today, May 20, 2018</p>
              </div>
              <Chart />
            </div>
          </div>
          <div className="home__center__right__end">
            <div className="home__center__right__end__doctors__container">
              <h3>Available doctors</h3>
              <div className="home__center__right__end__doctors">
                <div className="doctors">
                  <img src={doc} />
                  <div className="doctors__nameinfo">
                    <h4>Dr. Bettie Castro</h4>
                    <p>Anaesthesiology</p>
                  </div>
                </div>
                <div className="doctors">
                  <img src={doc2} />
                  <div className="doctors__nameinfo">
                    <h4>Dr. Eleanor Cannon</h4>
                    <p>Anaesthesiology</p>
                  </div>
                </div>
                <div className="doctors">
                  <img src={doc} />
                  <div className="doctors__nameinfo">
                    <h4>Dr. Bettie Castro</h4>
                    <p>Anaesthesiology</p>
                  </div>
                </div>
                <div className="doctors">
                  <img src={doc2} />
                  <div className="doctors__nameinfo">
                    <h4>Dr. Bettie Castro</h4>
                    <p>Anaesthesiology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home__center__right__end__expense">
              <h3>Today’s income/expense</h3>
              <div className="home__center__right__end__graph">
                <img src={chart} />
                <p>54$</p>
                <div className="char__info">
                  <p> {<img src={gradient1} />} New customers</p>
                  <p> {<img src={gradient2} />} Returning customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListHome;
