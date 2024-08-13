import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Fiender } from './Fiender/Fiender';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from '../redux/contactOperations';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contact.contacts);
  const handleSubmit = (values, { resetForm }) => {
    if (contacts.some(contact => contact.name === values.name)) {
      alert(`${values.name} is already in contacts`);
    } else {
      values.id = nanoid();
      dispatch(addContact(values));
      resetForm();
    }
  };

  return (
    <div>
      <ContactForm initialValues={{ name: '', number: '' }} onSubmit={handleSubmit} />
      <Fiender />
      <h1 className={css.title}>Contacts</h1>
      <ContactList />
    </div>
  );
}
