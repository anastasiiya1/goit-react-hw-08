import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectFilteredContacts,
} from '../../redux/selectors';
import css from './ContactList.module.css';
import TotalContacts from 'components/TotalContacts/TotalContacts';
import Loader from 'components/Loader/Loader';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ul className={css.list}>
      <TotalContacts />

      {isLoading && !error && <Loader />}
      {error && <p>Oops, something went wrong! Please, try again</p>}

      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

export default ContactList;
