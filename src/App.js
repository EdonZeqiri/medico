import React from 'react';
import AppointmentHome from './appointment/pages/AppointmentHome'
import DashboardHome from './dashboard/pages/DashboardHome'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path='/' component={AppointmentHome}/>
        <Route exact path='/dashboard' component={DashboardHome}/>
      </Router>
    </React.Fragment>
  );
}

export default App;
