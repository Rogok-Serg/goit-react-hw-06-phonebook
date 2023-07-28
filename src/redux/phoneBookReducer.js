const initialState = {
  name: '',
  number: '',
};

export const phoneBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'phonebook/setName': {
      return {
        ...state,
        name: action.payload,
      };
    }
    case 'phonebook/setNumber': {
      return {
        ...state,
        number: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setName = payload => {
  return {
    type: 'phonebook/setName',
    payload,
  };
};

export const setNumber = payload => {
  return {
    type: 'phonebook/setNumber',
    payload,
  };
};
