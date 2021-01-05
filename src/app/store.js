import { configureStore } from '@reduxjs/toolkit';
import patientFormReducer from '../features/counter/patientFormSlice'
import dashboardReducer from '../features/counter/dashboardSlice'

export default configureStore({
  reducer: {
    patientForm:patientFormReducer,
    dashboard:dashboardReducer
  },
});
