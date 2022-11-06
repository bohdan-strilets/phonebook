import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<{ background?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  margin-right: 7px;

  background-color: ${({ background }) =>
    background ? background : 'var(--accent-bg-color)'};
  color: var(--second-text-color);
  font-family: inherit;
  border: none;

  cursor: pointer;
  transition: opacity var(--main-hover-animation);
  opacity: 1;

  :hover,
  :focus {
    opacity: 0.7;
  }

  :last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
`;

export const Points = styled.p`
  margin-right: 7px;

  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }
`;
