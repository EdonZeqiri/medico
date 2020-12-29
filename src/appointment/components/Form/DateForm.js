import React, {useState} from 'react'
import { TextField } from "@material-ui/core";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import '../../style/DateForm.css';
import {useSelector, useDispatch} from 'react-redux'
import {changeStep, setDateOfDoctor, setTimeOfDoctor, changeSteptoBack, selectDoctorInfoName, selectDoctorInfoImg, selectDoctorInfoImage} from '../../../features/counter/patientFormSlice'


function DateForm() {

    // const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString());

    // const handleDateChange = (date) => {
    //   setSelectedDate(date);
    //   dispatch(setDateOfDoctor(date));
    // };

    const [date, setDate] = useState(
        moment(new Date()).format("YYYY-MM-DD")
    );
    const [time, setTime] = useState(
        moment(new Date()).format("HH-MM")
    )

    const handleChangeDate = e => {
        setDate(e.target.value);
        dispatch(setDateOfDoctor(date));
    };

    const handleChangeTime = e =>{
        setTime(e.target.value);
        dispatch(setTimeOfDoctor(time))
    }
    console.log(time)
    
    // const doctorIMG = useSelector(doctorInfoImg)
    const dispatch = useDispatch();
    const doctorName = useSelector(selectDoctorInfoName)
    const doctorImg = useSelector(selectDoctorInfoImage)
    // const doctorDate = useSelector(selectDateOfDoctor)

    return (
        
        <div className='date__form'>
            <div className="date__form__fields">
                <div className="date__form__fields__top">
                    <div className="date__form__fields__top__left">
                        <div className="photo">
                            <img src={doctorImg}></img>
                        </div>
                    </div>
                    <div className="date__form__fields__top__middle">
                    <p>Selected Doctors</p>
                    <h3>{doctorName}</h3>
                    <p>Junior Surgeon</p>
                    </div>
                    <div className="date__form__fields__top__right">
                        <button onClick={()=>dispatch(changeSteptoBack())}>Change Doctor</button>
                    </div>
                </div>
            
                <div className="date__form__fields__bottom">
                    <p>Select an available date</p>
                    <TextField
                        name="date"
                        id="date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={date}
                        onChange={handleChangeDate}
                        fullWidth
                        required
                    />
                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            value={selectedDate}
                            className={"date__picker"}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                    </MuiPickersUtilsProvider> */}
                </div>
                <div className="date__form__fields__end">
                    <p>Select a time slot</p>
                    <TextField
                        name="time"
                        id="time"
                        type="time"
                        InputLabelProps={{ shrink: true }}
                        value={time}
                        onChange={handleChangeTime}
                        fullWidth
                        required
                    />
                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                    />
                    </MuiPickersUtilsProvider> */}
                </div>                   
                
                <Button 
                variant="contained" 
                color="grey" 
                className={'button__end__date'} 
                disableElevation
                onClick={()=>dispatch(changeStep())}
                >
                    Last step, confirm the info now
                </Button>
            </div>
        </div>
    )
    }

export default DateForm
