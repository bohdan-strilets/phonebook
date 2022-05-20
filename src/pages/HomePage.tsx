import homeBg from '../images/homeBg.jpg';
import Container from 'components/Container';

const HomePage: React.FC = () => {
  return (
    <Container>
      <img src={homeBg} alt="Phone book" />
    </Container>
  );
};

export default HomePage;
