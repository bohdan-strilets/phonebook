import { Wrapper, Title, Text, StyledLink } from './NotFound.styled';
import Container from 'components/Container';
import IErrorMessage from 'types/IErrorMessage';

const NotFound = ({ data = '', status = '' }: IErrorMessage) => {
  return (
    <Container>
      <Wrapper>
        <Title>Sorry {`${status} ${data}`} :(</Title>
        <Text>Something went wrong.</Text>
        <StyledLink to="/">Go back to the main page</StyledLink>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
