import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITeamFrom } from '../types'

const InitialState: ITeamFrom = {
  name:"",
  message:"",
  feedback:"",
}

export const TeamSlice = createSlice({
  name: 'Team',
  initialState:InitialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) =>{
      state.name = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) =>{
      state.message = action.payload;
    },
    setFeedback: (state, action: PayloadAction<string>) =>{
      state.feedback = action.payload;
    },
    setDefault: (state) =>{
      Object.assign(state, InitialState);
    }
  },
})


export const actions = TeamSlice.actions;
export default TeamSlice.reducer