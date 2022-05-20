import { Button, ButtonText } from './AddButton.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';

const AddButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Button to="/contacts/add">
      <ButtonText>{text}</ButtonText>
      <BsFillPersonPlusFill size={20} />
    </Button>
  );
};

export default AddButton;
