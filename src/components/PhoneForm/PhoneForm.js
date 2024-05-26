import { Formik, Field, ErrorMessage } from 'formik';
// import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { ButtonContact, Form } from './PhoneFormStyled';

const PhoneSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const PhoneForm = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          contacts: [],
          name: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={PhoneSchema}
      >
        <Form>
          <label>Name</label>
          <Field
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
          <ButtonContact type="submit">Add contact</ButtonContact>
        </Form>
      </Formik>
    </div>
  );
};
