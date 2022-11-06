import { useNavigate } from 'react-router-dom';
import useShowModal from 'hooks/useShowModal';
import { useChangeFavoriteMutation } from 'redux/contacts/contact-api';
import getFirstLetter from 'utilities/getFirstLetter';
import getRandomHexColor from 'utilities/getRandomHexColor';

import { FaTrash, FaUserEdit } from 'react-icons/fa';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Modal from 'components/Modal';
import DeletingContact from 'components/DeletingContact';

import {
  Wrapper,
  NameWrapper,
  IconUser,
  Name,
  DataWrapper,
  Number,
  NumberIcon,
  Email,
  EmailIcon,
  ButtonList,
  ButtonItem,
  Button,
  StarIcon,
} from './Contact.styled';

const Contact = ({
  id,
  name,
  phone,
  email,
  favorite,
}: {
  id: string;
  name: string;
  phone: string;
  email: string;
  favorite: boolean;
}) => {
  const { showModal, toggleModal } = useShowModal(false);
  const navigate = useNavigate();
  const [changeFavorite] = useChangeFavoriteMutation();

  const toggleFavorite = () => {
    changeFavorite({ contactId: id, favorite: !favorite });

    !favorite
      ? Notify.success(`User ${name} been successfully added to favorite list.`)
      : Notify.success(
          `User ${name} been successfully deleted from favorite list.`,
        );
  };

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal} title={name}>
          <DeletingContact id={id} name={name} toggleModal={toggleModal} />
        </Modal>
      )}

      <Wrapper>
        <NameWrapper>
          <IconUser background={getRandomHexColor()}>
            {getFirstLetter(name)}
          </IconUser>
          <Name>{name}</Name>
        </NameWrapper>

        <DataWrapper>
          <Number>
            <NumberIcon />
            {phone}
          </Number>
          {email !== '' && (
            <Email>
              <EmailIcon />
              {email}
            </Email>
          )}
        </DataWrapper>

        <ButtonList>
          <ButtonItem>
            <Button type="button" onClick={toggleModal}>
              <FaTrash />
            </Button>
          </ButtonItem>
          <ButtonItem>
            <Button type="button" onClick={() => navigate(`edit/${id}`)}>
              <FaUserEdit />
            </Button>
          </ButtonItem>
          <ButtonItem>
            <Button type="button" onClick={toggleFavorite}>
              {favorite ? <StarIcon fill="#e6be0e" /> : <StarIcon />}
            </Button>
          </ButtonItem>
        </ButtonList>
      </Wrapper>
    </>
  );
};

export default Contact;
