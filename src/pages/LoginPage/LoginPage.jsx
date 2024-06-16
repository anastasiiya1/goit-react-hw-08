import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Log in</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
