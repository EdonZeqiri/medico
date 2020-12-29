import React from 'react'
import Appointment from '../components/Footer'
import Form from '../components/Form/Form'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../style/AppoinmentHome.css'

function AppointmentHome() {
    return (
        <div className='appointmenthome__background'>
            <Header/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default AppointmentHome
