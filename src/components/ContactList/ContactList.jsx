import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(state => state.contact.loading);
  const error = useSelector(state => state.contact.error);
  if (loading) {
    return <p style={{ width: '100%', textAlign: 'center' }}>Loading...</p>;
  }
  if (error) {
    Notiflix.Notify.error(error);
  }
  return (
    <ul className={css.list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id} className={css.contactListItem}>
            <div className={css.contactInfo}>
              <span className={css.contactName}>{name}</span>
              <span className={css.contactNumber}>{number}</span>
            </div>
            <button
              type="button"
              onClick={event => {
                dispatch(deleteContact(event.target.id));
              }}
              id={id}
              className={css.deleteButton}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
ContactList.proptype = {
  contactNames: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
