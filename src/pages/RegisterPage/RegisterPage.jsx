import RegisterForm from '../../components/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.css';

function RegisterPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Registration</h1>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
