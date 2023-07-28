import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setNumber } from 'redux/phoneBookReducer';

export const ContactForm = ({ onAddContact }) => {
  const name = useSelector(state => state.phoneBook.name);
  const number = useSelector(state => state.phoneBook.number);

  const dispatch = useDispatch();

  const handelInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        dispatch(setName(value));
        break;
      case 'number':
        dispatch(setNumber(value));
        break;
      default:
        break;
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    dispatch(setName(''));
    dispatch(setNumber(''));
  };

  return (
    <form className={css.form} onSubmit={handelSubmit}>
      <span>Name</span>
      <label className={css.label}>
        <input
          onChange={handelInputChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <span>Number</span>
      <label>
        <input
          onChange={handelInputChange}
          type="text"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
