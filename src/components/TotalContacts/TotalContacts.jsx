import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import css from './TotalContacts.module.css';

function TotalContacts() {
  const contacts = useSelector(selectContacts);
  const count = contacts.length;

  return (
    <div className={css.container}>
      <span className={css.text}>Total contacts: {count}</span>
    </div>
  );
}

export default TotalContacts;