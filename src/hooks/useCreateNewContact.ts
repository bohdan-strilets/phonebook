import { useNavigate } from 'react-router-dom';
import { useCreateContactMutation } from 'redux/contacts/contact-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { IContactToServer } from 'types/IContact';

const useCreateNewContact = () => {
  const navigate = useNavigate();

  const [createContact] = useCreateContactMutation();

  const onSubmitForm = (data: IContactToServer) => {
    createContact(data);
    navigate('/contacts');

    Notify.success(`The ${data.name} has been added to your contact list.`);
    return;
  };

  return { onSubmitForm };
};

export default useCreateNewContact;
