import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contactOperations';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    console.log('state:', state);
    return state.contact.contacts;
  });
  const loading = useSelector(state => state.contact.loading);
  const error = useSelector(state => state.contact.error);
  const filter = useSelector(state => state.contact.filter);
  if (loading) {
    return <p>Loading...</p>;
  }
  console.log('contacts:', contacts[0]);
  console.log('error:', error);
  return (
    <ul className={css.list}>
      {contacts[0].map(({ name, id, number }) => {
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
                dispatch(fetchContacts());
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
