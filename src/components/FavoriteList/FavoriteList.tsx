import { useEffect } from 'react';
import { useGetFavoritesContactsQuery } from 'redux/contacts/contact-api';

import Contact from 'components/Contact';
import Loader from 'components/Loader';

import { IContactList } from 'types/IContactList';
import { List, Item } from './FavoriteList.styled';

const FavoriteList: React.FC<{}> = () => {
  const { data, isFetching, refetch } = useGetFavoritesContactsQuery();
  const favorite = data?.favoriteData;

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      {isFetching && <Loader />}
      <List>
        {favorite &&
          favorite.map(
            ({ _id, name, phone, email, favorite }: IContactList) => {
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
            },
          )}
      </List>
    </>
  );
};

export default FavoriteList;
