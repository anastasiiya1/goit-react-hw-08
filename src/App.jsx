import ContactForm from 'components/ContactForm/ContactForm';
import SearchBox from 'components/SearchBox/SearchBox';
import ContactList from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm/>
      <SearchBox  />
      <ContactList />
    </div>
  );
};

export default App;
