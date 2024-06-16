import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

function AuthNav() {
  return (
    <div className={styles.navContainer}>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
}

export default AuthNav;
