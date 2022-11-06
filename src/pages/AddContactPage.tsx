import Container from 'components/Container';
import ContactForm from 'components/ContactForm';

import useCreateNewContact from 'hooks/useCreateNewContact';
import { contactSchema } from 'utilities/validationSchema';

interface IAddContactInitialValue {
  name: string;
  phone: string;
  email: string;
}

const AddContactPage: React.FC = () => {
  const initialValues: IAddContactInitialValue | null = {
    name: '',
    phone: '',
    email: '',
  };
  const { onSubmitForm } = useCreateNewContact();

  return (
    <Container>
      <ContactForm
        title="Add new contact"
        initialValues={initialValues}
        onSubmitForm={onSubmitForm}
        validationSchema={contactSchema}
        buttonLabel="Add contact"
      />
    </Container>
  );
};

export default AddContactPage;
