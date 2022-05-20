import { useGetContactsQuery } from 'redux/contacts/contact-api';
import { getFilter } from 'redux/contacts/contact-selectors';
import { useAppSelector } from './useAppSelector';

const useFiltredContacts = () => {
  const { data: contacts } = useGetContactsQuery();
  const filter = useAppSelector(state => getFilter(state));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return (
      contacts &&
      contacts.filter(contact =>
        contact?.name?.toLowerCase().includes(normalizedFilter),
      )
    );
  };

  const filteredContactList = filtredContacts();

  return { filteredContactList };
};

export default useFiltredContacts;
