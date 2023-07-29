// import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts, setFilter } from 'redux/contactsStorageReducer';

export const App = () => {
  const contacts = useSelector(state => state.contactsStorage.contacts);
  const filter = useSelector(state => state.contactsStorage.filter);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const onRemoveContact = contactId =>
    dispatch(setContacts(contacts.filter(contact => contact.id !== contactId)));

  const onAddContact = contactData => {
    const comparison = contacts.find(
      el => contactData.name.toLowerCase() === el.name.toLowerCase()
    );

    if (comparison) {
      alert(`${contactData.name} is already in contacts!`);
      return;
    }

    const contact = {
      ...contactData,
      id: nanoid(),
    };
    dispatch(setContacts([...contacts, contact]));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <h2>Contacts</h2>
      {contacts.length !== 0 && (
        <Filter value={filter} onChange={changeFilter} />
      )}
      {contacts.length !== 0 && (
        <ContactList
          contacts={getFilteredContacts()}
          onRemoveContact={onRemoveContact}
        />
      )}
    </>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
