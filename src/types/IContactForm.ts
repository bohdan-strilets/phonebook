import { InferType } from 'prop-types';
import { contactSchema } from 'utilities/validationSchema';
import { IContactToServer } from 'types/IContact';

type Contact = InferType<typeof contactSchema>;

interface IContactForm {
  title: string;
  initialValues: IContactToServer;
  onSubmitForm: (data: IContactToServer) => void;
  validationSchema: Contact;
  buttonLabel: string;
}

export default IContactForm;
