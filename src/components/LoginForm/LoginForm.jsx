import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../AuthProvider';
import styles from './LoginForm.module.css';

function LoginForm() {
  const { loginUser, error: authError } = useAuth();

  const initValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLoginSubmit = async (values, { resetForm }) => {
    await loginUser(values);
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={handleLoginSubmit}
      >
        {() => (
          <Form>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </div>

            {authError && <div className={styles.error}>{authError}</div>}

            <button type="submit">Log In</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
