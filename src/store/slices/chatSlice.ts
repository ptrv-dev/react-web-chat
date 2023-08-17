import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ChatState {
  selected: number;
}

const initialState: ChatState = {
  selected: 0,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<number>) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelected } = chatSlice.actions;

export default chatSlice.reducer;
