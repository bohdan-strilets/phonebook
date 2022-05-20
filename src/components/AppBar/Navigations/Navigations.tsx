import { List, Item, Link } from './Navigations.styled';
import { getIsLoggedIn } from 'redux/auth/auth-selecors';
import { useAppSelector } from 'hooks/useAppSelector';

const Navigations: React.FC = () => {
  const isLoggedIn = useAppSelector(state => getIsLoggedIn(state));

  return (
    <List>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      {isLoggedIn && (
        <Item>
          <Link to="/contacts">Contacts</Link>
        </Item>
      )}
    </List>
  );
};

export default Navigations;
