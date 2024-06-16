import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { TbDoorExit } from 'react-icons/tb';
import styles from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <p className={styles.userWelcome}>👋 Welcome, {user.name}</p>
      <button
        className={styles.logoutButton}
        type="button"
        onClick={handleLogout}
      >
        <TbDoorExit className={styles.icon} />
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
