import React, {useState, useEffect} from 'react'
import '../../style/PatientForm.css'
import { useSelector, useDispatch } from 'react-redux';
import {setPatientName, 
        setPatientAge, 
        setPatientGender, 
        changeButtonMode, 
        selectButtonMode,
        changeStep } from '../../../features/counter/patientFormSlice'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function PatientForm() {

    const dispatch = useDispatch();
    const modeActive = useSelector(selectButtonMode)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender]= useState('')

    const handleClick =(e)=>{
        setGender(e.target.value) 
        console.log(gender)
        dispatch(setPatientGender(e.target.value))
    }

    const submitForm = ()=>{
        dispatch(setPatientName(name))
        dispatch(setPatientAge(age))
        dispatch(changeStep())
    }
    
    return (
        <div className='patient__form'>
            <div className="patient__form__fields">
                <div className="patient__form__fields__top">
                    <p>What is the patient name?</p>
                    <TextField  
                    id="outlined-basic"
                    placeholder="i.e. Martin Jones" 
                    variant="outlined"
                    aria-label="Set increment amount"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </div>
            
                <div className="patient__form__fields__bottom">
                    <div className="patient__form__fields__bottom__left">
                        <p>Select patient gender</p>
                        <div className="male__female" onChange={handleClick}>
                            <div className="radio__item">
                                <input type="radio" value="Male" name="gender"/> Male
                            </div>
                            <div className="radio__item">
                                <input type="radio" value="Female" name="gender"/> Female
                            </div>
                        </div>
                    </div>

                    <div className="patient__form__fields__bottom__right">
                        <p>How old is patient</p>

                        <TextField  
                            id="outlined-basic" 
                            placeholder="i.e. 22" 
                            variant="outlined"
                            aria-label="Set increment amount"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                        />
                    </div>
                </div>
                <Button 
                variant="contained" 
                color="grey" 
                className={'button__end'} 
                disableElevation
                onClick={submitForm}
                >
                    Let’s start finding a doctor now
                </Button>
            </div>
        </div>
    )
}

export default PatientForm
