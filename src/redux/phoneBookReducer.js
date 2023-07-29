import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { setName, setNumber } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;

// export const phoneBookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'phonebook/setName': {
//       return {
//         ...state,
//         name: action.payload,
//       };
//     }
//     case 'phonebook/setNumber': {
//       return {
//         ...state,
//         number: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const setName = payload => {
//   return {
//     type: 'phonebook/setName',
//     payload,
//   };
// };

// export const setNumber = payload => {
//   return {
//     type: 'phonebook/setNumber',
//     payload,
//   };
// };
