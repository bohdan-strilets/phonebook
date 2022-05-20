import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Button, Label } from './GoBack.styled';
import { useNavigate } from 'react-router-dom';
import IGoBack from 'types/IGoBack';

const GoBack = ({ text, path }: IGoBack) => {
  const navigate = useNavigate();
  const goToPage = () => navigate(path);

  return (
    <Button type="button" onClick={goToPage}>
      <FaLongArrowAltLeft />
      <Label>{text}</Label>
    </Button>
  );
};

export default GoBack;
