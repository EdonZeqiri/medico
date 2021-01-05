import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    dashboardStep: 1,
    data: [],
  },

  reducers: {
    changeDashboardStep: (state, action) => {
      state.dashboardStep = action.payload;
    },
  },
});

export const {
  //step1
  changeDashboardStep,
} = dashboardSlice.actions;

//step1
export const selectDashboardStep = (state) => state.dashboard.dashboardStep;

// export const doctorInfoImg = state=> state.doctorInfo.image
export default dashboardSlice.reducer;
