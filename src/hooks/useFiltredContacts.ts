import { useGetContactsQuery } from 'redux/contacts/contact-api';
import { getFilter } from 'redux/contacts/contact-selectors';
import { useAppSelector } from './useAppSelector';

const useFiltredContacts = () => {
  const { data } = useGetContactsQuery();
  const filter = useAppSelector(state => getFilter(state));
  const contacts = data?.data?.contacts;

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return (
      contacts &&
      contacts.filter((contact: { name: string }) =>
        contact?.name?.toLowerCase().includes(normalizedFilter),
      )
    );
  };

  const filteredContactList = filtredContacts();

  return { filteredContactList };
};

export default useFiltredContacts;
