import { ContainerWrapper, Title } from './Container.styled';

interface IContainer {
  title?: string;
  children?: any;
}

const Container = ({ children, title }: IContainer) => {
  return (
    <ContainerWrapper>
      {title && <Title>{title}</Title>}
      {children}
    </ContainerWrapper>
  );
};

export default Container;
