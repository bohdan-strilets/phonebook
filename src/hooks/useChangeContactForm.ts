import { useParams, useNavigate } from 'react-router-dom';
import {
  useChangeContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contact-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { IContact, IContactToServer } from 'types/IContact';

const useChangeContactForm = () => {
  let currentContact: IContact | null | undefined = null;
  let initialValues = {} as IContactToServer;

  const { contactId } = useParams();
  const navigate = useNavigate();

  const [chengeContact, { isLoading: isUpdating }] = useChangeContactMutation();
  const { data } = useGetContactsQuery();
  const contacts = data?.data?.contacts;

  if (contacts) {
    currentContact = contacts.find(
      ({ _id }: { _id: string }) => _id === contactId,
    );

    initialValues = {
      name: currentContact?.name,
      phone: currentContact?.phone,
      email: currentContact?.email,
    };
  }

  const onSubmitForm = (values: IContactToServer) => {
    if (JSON.stringify(values) === JSON.stringify(initialValues)) {
      Notify.warning('Try to change something first.');
      return;
    }
    chengeContact({ contactId, ...values });
    navigate('/contacts');
    Notify.success('The contact has been successfully changed.');
  };

  return { isUpdating, onSubmitForm, initialValues };
};

export default useChangeContactForm;
