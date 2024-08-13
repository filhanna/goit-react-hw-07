import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, 'Invalid phone number'),
});
export const ContactForm = ({ initialValues, onSubmit }) => {
  return (
    <div className={css.formContainer}>
      <h1 className={css.formTitle}>Phonebook</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={FormSchema}
      >
        <Form autoComplete="off">
          <label className={css.formLabel}>
            Name
            <Field type="text" name="name" className={css.formInput} />
            <ErrorMessage
              name="name"
              component="div"
              className={css.formError}
            />
          </label>
          <label className={css.formLabel}>
            Phonenumber
            <Field type="text" name="number" className={css.formInput} />
            <ErrorMessage
              name="number"
              component="div"
              className={css.formError}
            />
          </label>
          <button type="submit" className={css.formButton}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.proptype = {
  initialValue: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
