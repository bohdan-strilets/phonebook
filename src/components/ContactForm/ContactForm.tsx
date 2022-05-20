import {
  TitlePage,
  Label,
  Title,
  StyledField,
  Button,
} from './ContactForm.styled';
import { Formik, Form, ErrorMessage } from 'formik';
import GoBack from 'components/GoBack';
import IContactForm from 'types/IContactForm';

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
              <ErrorMessage name="name" component="div" />
            </Label>
            <Label>
              <Title>Number</Title>
              <StyledField
                type="tel"
                name="number"
                onChange={handleChange}
                value={values.number}
              />
              <ErrorMessage name="number" component="div" />
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? '...' : buttonLabel}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
