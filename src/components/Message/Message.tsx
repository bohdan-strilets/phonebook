import { Wrapper, Text } from './Message.styled';

const Message: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <Wrapper>
      <Text>{message}</Text>
    </Wrapper>
  );
};

export default Message;
