import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import styles from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const getClassName = ({isActive}) => {
    return clsx(styles.link, isActive && styles.isActive)
  }

  return (
    <>
      <nav className={styles.navContainer}>
        <NavLink to="/" className={getClassName}>
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" className={getClassName}>
            Contacts
          </NavLink>
        )}
      </nav>
    </>
  );
}

export default Navigation;
