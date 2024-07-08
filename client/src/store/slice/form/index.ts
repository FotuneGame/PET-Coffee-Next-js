import {combineSlices} from '@reduxjs/toolkit';
import { ItemSlice } from './item';
import { TeamSlice } from './team';
import { SpecialSlice } from './special';

export const FormSlices = combineSlices(ItemSlice,TeamSlice,SpecialSlice,{
    item: ItemSlice.reducer,
    team: TeamSlice.reducer,
    special: SpecialSlice.reducer
})