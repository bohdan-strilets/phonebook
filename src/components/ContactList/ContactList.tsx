import Contact from 'components/Contact/Contact';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import { List, Item } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contacts/contact-api';
import useFiltredContacts from 'hooks/useFiltredContacts';
import { useEffect } from 'react';

const ContactList: React.FC = () => {
  const { data: contacts, isFetching, error, refetch } = useGetContactsQuery();
  const { filteredContactList } = useFiltredContacts();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      {isFetching && <Loader />}
      {error && <NotFound data={error} status={error} />}
      <List>
        {contacts &&
          filteredContactList &&
          filteredContactList.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <Contact id={id} name={name} number={number} />
              </Item>
            );
          })}
      </List>
    </>
  );
};

export default ContactList;
