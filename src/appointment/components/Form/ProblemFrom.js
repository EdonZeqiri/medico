import React, {useState, useEffect} from 'react'
import '../../style/ProblemForm.css'
import { useSelector, useDispatch } from 'react-redux';
import {setTypeOfProblem, 
        setDaysOfProblem, 
        changeStep,
        selectName
     } from '../../../features/counter/patientFormSlice'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ProgblemTagForm from './ProblemTagForm'
import ProblemTagForm from './ProblemTagForm';

function PatientForm() {

    const dispatch = useDispatch();
    const patientName = useSelector(selectName)
    const [type, setTypes] = useState([""])
    const [days, setDays] = useState('')


    const submitForm = ()=>{
        // dispatch(setTypeOfProblem(type))
        dispatch(setDaysOfProblem(days))
        dispatch(changeStep())
    }
    
    return (
        <div className='problem__form'>
            <div className="problem__form__fields">
                <div className="problem__form__fields__top">
                    <p>What type of problem do {patientName} have?</p>
                    <p className="under__paragraph">You can select multiple answers here</p>

                    <ProblemTagForm/>
                </div>
            
                <div className="problem__form__fields__bottom">
                    <div className="problem__form__fields__bottom__right">
                        <p>How long is {patientName} having these problems?</p>

                        <TextField  
                            id="outlined-basic" 
                            placeholder="i.e. Around 7 days" 
                            variant="outlined"
                            aria-label="Set increment amount"
                            value={days}
                            onChange={e => setDays(e.target.value)}
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
