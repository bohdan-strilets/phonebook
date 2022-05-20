import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import useCreateNewContact from 'hooks/useCreateNewContact';
import { contactSchema } from 'utilities/validationSchema';
import IContact from 'types/IContact';

const AddContactPage: React.FC = () => {
  const initialValues: IContact | null = { name: '', number: '' };
  const createNewContact = useCreateNewContact();

  return (
    <Container>
      <ContactForm
        title="Add new contact"
        initialValues={initialValues}
        onSubmitForm={createNewContact}
        validationSchema={contactSchema}
        buttonLabel="Add contact"
      />
    </Container>
  );
};

export default AddContactPage;
