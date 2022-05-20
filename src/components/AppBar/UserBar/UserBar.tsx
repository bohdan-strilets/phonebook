import {
  Wrapper,
  GroupWrapper,
  UserIcon,
  TextWrapper,
  Text,
  UserName,
  Email,
  Button,
} from './UserBar.styled';
import { getName, getEmail } from 'redux/auth/auth-selecors';
import useLogoutUser from 'hooks/useLogoutUser';
import { useAppSelector } from 'hooks/useAppSelector';

function UserBar() {
  const userName = useAppSelector(state => getName(state));
  const userEmail = useAppSelector(state => getEmail(state));
  const logout = useLogoutUser();

  return (
    <Wrapper>
      <GroupWrapper>
        <UserIcon />
        <TextWrapper>
          <Text>
            Welcome, <UserName>{userName}</UserName>
          </Text>
          <Email>{userEmail}</Email>
        </TextWrapper>
      </GroupWrapper>
      <Button type="button" onClick={logout}>
        Logout
      </Button>
    </Wrapper>
  );
}

export default UserBar;
