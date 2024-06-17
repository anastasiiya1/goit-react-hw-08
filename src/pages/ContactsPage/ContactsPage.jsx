import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import css from './ContactsPage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchContacts())
  }, [dispatch])
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
