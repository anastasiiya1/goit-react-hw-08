import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';
import { useState } from 'react';

function LoginForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

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
    try {
      await dispatch(login(values));
      resetForm();
      setError('');
    } catch (error) {
      if (error.message === 'User not registered') {
        setError('This user is not registered');
      } else {
        setError('Oops, something went wrong... Please try again.');
      }
    } finally {
      setError('');
    }
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

            {error && <div className={styles.error}>{error}</div>}

            <button type="submit">Log In</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
