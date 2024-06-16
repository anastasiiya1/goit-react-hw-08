import { useState } from 'react';
import { registration } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './RegisterForm.module.css';

function RegisterForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const handleRegistration = async (values, { resetForm }) => {
    try {
      await dispatch(registration(values));
      resetForm();
      setError('');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegistration}
      >
        {() => (
          <Form>
            <div className={styles.formGroup}>
              <label htmlFor="name">Username</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

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

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
