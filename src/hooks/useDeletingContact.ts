import { useNavigate } from 'react-router-dom';
import { useDeleteContactMutation } from 'redux/contacts/contact-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const useDeletingContact = (
  id?: string,
  name?: string,
  toggleModal?: () => void,
) => {
  const navigate = useNavigate();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteSelectedContact = () => {
    if (id !== undefined && toggleModal !== undefined) {
      deleteContact(id);
      navigate('/contacts');
      toggleModal();
      Notify.success(`The ${name} has been removed from your contact list.`);
    }
  };

  return { isDeleting, deleteSelectedContact };
};

export default useDeletingContact;
