import bookContacts from '../data/bookContacts';

const initialState = {
  contacts:
    JSON.parse(window.localStorage.getItem('contacts')) ??
    bookContacts.contacts,
  filter: '',
};

export const contactsStorageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contactsStorage/setContacts': {
      return {
        ...state,
        contacts: action.payload,
      };
    }
    case 'contactsStorage/setFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};
export const setContacts = payload => {
  return {
    type: 'contactsStorage/setContacts',
    payload,
  };
};

export const setFilter = payload => {
  return {
    type: 'contactsStorage/setFilter',
    payload,
  };
};
