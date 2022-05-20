import {
  Text,
  Name,
  List,
  Item,
  ButtonCancel,
  ButtonDelete,
} from './DeletingContact.styled';
import useDeletingContact from 'hooks/useDeletingContact';
import IDeletingContact from 'types/IDeletingContact';

const DeletingContact = ({ id, name, toggleModal }: IDeletingContact) => {
  const { isDeleting, deleteSelectedContact } = useDeletingContact(
    id,
    name,
    toggleModal,
  );

  return (
    <>
      <Text>
        Are you sure you want to delete a contact <Name>{name}</Name>?
      </Text>
      <List>
        <Item>
          <ButtonCancel type="button" onClick={toggleModal}>
            Cancel
          </ButtonCancel>
        </Item>
        <Item>
          <ButtonDelete type="button" onClick={deleteSelectedContact}>
            {isDeleting ? '...' : 'Delete'}
          </ButtonDelete>
        </Item>
      </List>
    </>
  );
};

export default DeletingContact;
