import { configureStore } from '@reduxjs/toolkit';
import patientFormReducer from '../features/counter/patientFormSlice'

export default configureStore({
  reducer: {
    patientForm:patientFormReducer
  },
});
