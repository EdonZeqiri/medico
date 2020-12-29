import React from 'react'
import '../../style/Form.css'
import PatientFrom from './PatientForm'
import ProblemFrom from './ProblemFrom'
import DoctorsFrom from './DoctorsForm'
import DateForm from './DateForm'
import ConfirmForm from './ConfirmForm'
import SuccessForm from './SuccessForm'
import { useSelector, useDispatch } from 'react-redux';
import {selectStep, selectName} from '../../../features/counter/patientFormSlice'

function Form() {
    const dispatch = useDispatch();
    const step = useSelector(selectStep)
    const name = useSelector (selectName)

    switch (step) {
        case 1:
            return (
                <div className='form__container'> 
                    <div className="step__details">
                        <h1>It’s easy to make an appointment here in Medico.</h1>
                        <p>Let’s get started with the basic things</p>
                    </div>
                    <PatientFrom/>
                </div>
            )
            break;
        case 2:
            return (
                <div className='form__container'>   
                    <div className="step__details">
                        <h1>Answer two questions to find the right doctors for {name}.</h1>
                        <p>If you are confused about the questions, call us at</p>
                    </div>
                    <ProblemFrom/>
                </div>
            )
            break;
        case 3:
            return (
                <div className='form__container'>   
                    <div className="step__details">
                        <h1>We have found 10 doctors to help {name} with problems.</h1>
                        <p>If you are confused about selecting a doctor, call us at 543-323-3456</p>
                    </div>
                    <DoctorsFrom/>
                </div>
            )
            break;
        case 4:
            return (
                <div className='form__container'>   
                    <div className="step__details">
                        <h1>Select a date and time for your appointment</h1>
                        <p>If you are confused about selecting a date or time, call us at 543-323-3456</p>
                    </div>
                    <DateForm/>
                </div>
            )
            break;
        case 5:
            return (
                <div className='form__container'>   
                    <div className="step__details">
                        <h1>Select a date and time for your appointment</h1>
                        <p>If you are confused about selecting a date or time, call us at 543-323-3456</p>
                    </div>
                        <ConfirmForm/>
                </div>
            )
            break;
        case 6:
            return (
                <div className='form__container'>
                        <SuccessForm/>
                </div>
                )
            break;
        default:
            break;
    }
    
    
}

export default Form
