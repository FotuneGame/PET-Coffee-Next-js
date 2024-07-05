import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IItemForm} from "../types/";

const InitialState: IItemForm = {
  id:null,
  count:1,
  sugar:0,
  place:"",
  time:"",
  date:"",
  feedback:"",
}

export const ItemSlice = createSlice({
  name: 'Item',
  initialState:InitialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) =>{
      state.id = action.payload;
    },
    setCount: (state, action: PayloadAction<number>) =>{
      state.count = action.payload;
    },
    setSugar: (state, action: PayloadAction<number>) =>{
      state.sugar = action.payload;
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


export const actions = ItemSlice.actions;
export default ItemSlice.reducer