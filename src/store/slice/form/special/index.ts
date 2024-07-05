import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ISpecialForm} from "../types/";

const InitialState:ISpecialForm = {
  message:"",
  count:1,
  place:"",
  time:"",
  date:"",
  feedback:"",
}

export const SpecialSlice = createSlice({
  name: 'Special',
  initialState:InitialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) =>{
      state.message = action.payload;
    },
    setCount: (state, action: PayloadAction<number>) =>{
      state.count = action.payload;
    },
    setPlace: (state, action: PayloadAction<string>) =>{
      state.place = action.payload;
    },
    setTime: (state, action: PayloadAction<string>) =>{
      state.time = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) =>{
      state.date = action.payload;
    },
    setFeedback: (state, action: PayloadAction<string>) =>{
      state.feedback = action.payload;
    },
    setDefault: (state) =>{
      Object.assign(state, InitialState);
    }
  },
})

// Action creators are generated for each case reducer function
export const actions = SpecialSlice.actions;
export default SpecialSlice.reducer