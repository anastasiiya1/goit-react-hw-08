import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/contactsOps';

const initialValue = {
  name: '',
  number: '',
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required!'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Invalid phone number! Enter the number in the format 000-00-00',
    )
    .required('Phone number is required!'),
});

function ContactForm() {
  const dispatch = useDispatch();
  const nameField = useId();
  const numberField = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addNewContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameField} className={css.label}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={nameField}
          className={css.field}
          placeholder="Name Surname"
        />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={numberField} className={css.label}>
          Number
        </label>
        <Field
          type="text"
          name="number"
          id={numberField}
          className={css.field}
          placeholder="000-00-00"
        />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
