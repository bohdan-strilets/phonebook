import { Wrapper } from './AppBar.styled';
import Container from 'components/Container';
import Logo from './Logo';
import Navigations from './Navigations';
import AuthNav from './AuthNav';
import UserBar from './UserBar';
import { useAppSelector } from 'hooks/useAppSelector';
import { getIsLoggedIn } from 'redux/auth/auth-selecors';

const AppBar: React.FC = () => {
  const isLoggedIn = useAppSelector(state => getIsLoggedIn(state));

  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navigations />
        {isLoggedIn ? <UserBar /> : <AuthNav />}
      </Wrapper>
    </Container>
  );
};

export default AppBar;
