import { List, Item, Link } from './AuthNav.styled';

const AuthNav: React.FC = () => {
  return (
    <List>
      <Item>
        <Link to="/register">Register</Link>
      </Item>
      <Item>
        <Link to="/login">Login</Link>
      </Item>
    </List>
  );
};

export default AuthNav;
