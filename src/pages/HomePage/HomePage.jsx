import styles from './HomePage.module.css';
import welcomeImage from '../../../public/welcome-img.png';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <img className={styles.image} src={welcomeImage} alt="Welcome" />
      <h1 className={styles.welcomeMessage}>Welcome to Phonebook</h1>
      <p className={styles.description}>
        Your one-stop solution to manage and organize your contacts.
      </p>
      <div className={styles.btn}>
        <NavLink to="/register" className={styles.navLink}>
          Sign up
        </NavLink>
        <NavLink to="/login" className={styles.navLink}>
          Login
        </NavLink>
      </div>
      {/* <div className={styles.appInfo}>
        <p className={styles.developerInfo}>
          Phonebook is developed by Anastasiia Onyshchuk. Our mission is to create
          useful and user-friendly applications that enhance productivity and
          simplify daily tasks. We strive to deliver high-quality software that
          meets the needs of our users.
        </p>
      </div> */}
    </div>
  );
};

export default HomePage;
