import { InferType } from 'prop-types';
import { contactSchema } from 'utilities/validationSchema';
import IContact from 'types/IContact';

type Contact = InferType<typeof contactSchema>;

interface IContactForm {
  title: string;
  initialValues: IContact;
  onSubmitForm: (data: IContact) => void;
  validationSchema: Contact;
  buttonLabel: string;
}

export default IContactForm;
