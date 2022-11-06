import { useGetFavoritesContactsQuery } from 'redux/contacts/contact-api';

import Container from 'components/Container';
import FavoriteList from 'components/FavoriteList';
import Message from 'components/Message';

const FavoritesPage: React.FC<{}> = () => {
  const { data, isFetching, refetch } = useGetFavoritesContactsQuery();
  const favorite = data?.favoriteData;

  return (
    <Container>
      {favorite && favorite.length > 0 ? (
        <FavoriteList />
      ) : (
        <Message message="You not added contacts for favorites for now... :(" />
      )}
    </Container>
  );
};

export default FavoritesPage;
