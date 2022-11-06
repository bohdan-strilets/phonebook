import { Formik, Form } from 'formik';
import GoBack from 'components/GoBack';

import IContactForm from 'types/IContactForm';

import {
  TitlePage,
  Label,
  Error,
  Title,
  StyledField,
  Button,
} from './ContactForm.styled';

const ContactForm = ({
  title,
  initialValues,
  onSubmitForm,
  validationSchema,
  buttonLabel,
}: IContactForm) => {
  return (
    <>
      <TitlePage>{title}</TitlePage>
      <GoBack text="Contact list" path="/contacts" />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitForm}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Label>
              <Title>Name</Title>
              <StyledField
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              <Error name="name" component="div" />
            </Label>
            <Label>
              <Title>Phone</Title>
              <StyledField
                type="tel"
                name="phone"
                onChange={handleChange}
                value={values.phone}
              />
              <Error name="phone" component="div" />
            </Label>
            <Label>
              <Title>Email</Title>
              <StyledField
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              <Error name="email" component="div" />
            </Label>
            <Button type="submit">{isSubmitting ? '...' : buttonLabel}</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
