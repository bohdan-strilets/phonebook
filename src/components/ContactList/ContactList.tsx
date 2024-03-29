import { useEffect } from 'react';
import { useGetContactsQuery } from 'redux/contacts/contact-api';
import useFiltredContacts from 'hooks/useFiltredContacts';
import usePagination from 'hooks/usePagination';
import useSorting from 'hooks/useSorting';

import Contact from 'components/Contact/Contact';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Pagination from 'components/Pagination';
import DropDownList from 'components/DropDownList';

import { IContactList } from 'types/IContactList';
import { Wrapper, List, Item } from './ContactList.styled';

const ContactList: React.FC<{}> = () => {
  const { filteredContactList } = useFiltredContacts();
  const { isFetching, error, refetch } = useGetContactsQuery();
  const { sort, getValue } = useSorting(filteredContactList);
  const {
    firstContentIndex,
    lastContentIndex,
    gaps,
    nextPage,
    page,
    prevPage,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 10,
    count: filteredContactList.length,
  });

  sort();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <Wrapper>
      {isFetching && <Loader />}
      {error && <NotFound data={error} status={error} />}

      <DropDownList
        options={['Alphabet A-Z', 'Alphabet Z-A', 'Date creation']}
        label="Sorting by..."
        top="53px"
        right="10px"
        getValue={getValue}
      />

      <List>
        {filteredContactList &&
          filteredContactList
            .slice(firstContentIndex, lastContentIndex)
            .map(({ _id, name, phone, email, favorite }: IContactList) => {
              return (
                <Item key={_id}>
                  <Contact
                    id={_id}
                    name={name}
                    phone={phone}
                    email={email}
                    favorite={favorite}
                  />
                </Item>
              );
            })}
      </List>

      {filteredContactList && filteredContactList.length > 9 && (
        <Pagination
          contentPerPage={3}
          filteredContactList={filteredContactList}
          gaps={gaps}
          nextPage={nextPage}
          page={page}
          prevPage={prevPage}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </Wrapper>
  );
};

export default ContactList;
