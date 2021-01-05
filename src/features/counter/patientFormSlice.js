import { createSlice } from "@reduxjs/toolkit";

export const patientFormSlice = createSlice({
  name: "patientForm",
  initialState: {
    step: 1,
    patientName: "",
    patientAge: "",
    patientMaleOrFemale: "",
    buttonActive: false,
    typeOfProblem: [""],
    daysOfProblem: "",
    fieldColor: false,
    doctorInfo: [],
    date: "",
    time: "",
    patientEmail: "",
    patientNumber: "",
  },

  reducers: {
    changeStep: (state) => {
      state.step = state.step + 1;
    },
    setStepToInfo: (state, action) => {
      state.step = action.payload;
    },
    //step 1
    setPatientName: (state, action) => {
      state.patientName = action.payload;
    },
    setPatientAge: (state, action) => {
      state.patientAge = action.payload;
    },
    setPatientGender: (state, action) => {
      state.patinetGenderMaleOrFemale = action.payload;
    },
    changeButtonMode: (state) => {
      state.buttonActive = !state.buttonActive;
    },

    //step 2
    setTypeOfProblem: (state, action) => {
      state.typeOfProblem = action.payload;
    },
    setDaysOfProblem: (state, action) => {
      state.daysOfProblem = action.payload;
    },

    //step3
    changeFieldColor: (state) => {
      // if(state.doctorInfo.id === "1"){
      //   state.fieldColor=true
      // }else{
      //   state.fieldColor=false
      // }
    },
    addDoctor: (state, action) => {
      state.doctorInfo = action.payload;
    },
    //step4
    changeSteptoBack: (state) => {
      state.step = state.step - 1;
    },
    setDateOfDoctor: (state, action) => {
      state.date = action.payload;
    },
    setTimeOfDoctor: (state, action) => {
      state.time = action.payload;
    },
    //step5
    setPatientEmail: (state, action) => {
      state.patientEmail = action.payload;
    },
    setPatientNumber: (state, action) => {
      state.patientNumber = action.payload;
    },
  },
});

export const {
  //step1
  setPatientAge,
  setPatientName,
  setPatientGender,
  changeButtonMode,
  changeStep,
  //step2
  setTypeOfProblem,
  setDaysOfProblem,
  //step3
  changeFieldColor,
  addDoctor,
  //step4
  changeSteptoBack,
  setDateOfDoctor,
  setTimeOfDoctor,
  //step5
  setPatientEmail,
  setPatientNumber,
  setStepToInfo,
} = patientFormSlice.actions;

//step1
export const selectButtonMode = (state) => state.patientForm.buttonActive;
export const selectStep = (state) => state.patientForm.step;
//step2
export const selectType = (state) => state.patientForm.typeOfProblem;
export const selectName = (state) => state.patientForm.patientName;
//step3
export const selectFieldColor = (state) => state.patientForm.fieldColor;
export const selectDoctorID = (state) => state.patientForm.doctorInfo.id;
//step4
export const selectDoctorInfoImage = (state) =>
  state.patientForm.doctorInfo.image;
export const selectDoctorInfoName = (state) =>
  state.patientForm.doctorInfo.name;
export const selectDateOfDoctor = (state) => state.patientForm.date;
export const selectTimeOfDoctor = (state) => state.patientForm.time;
//step5
export const selectPatientAge = (state) => state.patientForm.patientAge;
export const selectPatientGender = (state) =>
  state.patientForm.patinetGenderMaleOrFemale;
export const selectDoctorTitle = (state) => state.patientForm.doctorInfo.title;
export const selectPatientDays = (state) => state.patientForm.daysOfProblem;
export const selectPatientNumber = (state) => state.patientForm.patientNumber;
export const selectPatientEmail = (state) => state.patientForm.patientEmail;

// export const doctorInfoImg = state=> state.doctorInfo.image
export default patientFormSlice.reducer;
