import useLogoutUser from 'hooks/useLogoutUser';
import { useAppSelector } from 'hooks/useAppSelector';
import useShowModal from 'hooks/useShowModal';
import { getName, getEmail, getAvatar } from 'redux/auth/auth-selecors';

import Modal from 'components/Modal';
import ChangeAvatar from 'components/ChangeAvatar';

import {
  Wrapper,
  GroupWrapper,
  Avatar,
  TextWrapper,
  Text,
  UserName,
  Email,
  Button,
  Icon,
} from './UserBar.styled';

function UserBar() {
  const userName = useAppSelector(state => getName(state));
  const userEmail = useAppSelector(state => getEmail(state));
  const userAvatar = useAppSelector(state => getAvatar(state));
  const logout = useLogoutUser();

  const { showChangeAvatarModal, toggleChangeAvatarModal } =
    useShowModal(false);

  return (
    <>
      {showChangeAvatarModal && (
        <Modal onClose={toggleChangeAvatarModal} title="Change user avatar">
          <ChangeAvatar onclose={toggleChangeAvatarModal} />
        </Modal>
      )}

      <Wrapper>
        <GroupWrapper>
          <Avatar
            src={userAvatar as string}
            alt="Avatar"
            onClick={toggleChangeAvatarModal}
          />
          <TextWrapper>
            <Text>
              Welcome, <UserName>{userName}</UserName>
            </Text>
            <Email>{userEmail}</Email>
          </TextWrapper>
        </GroupWrapper>
        <Button type="button" onClick={logout}>
          Logout
          <Icon />
        </Button>
      </Wrapper>
    </>
  );
}

export default UserBar;
