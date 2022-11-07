import styled from '@emotion/styled';
import { IWrapper } from 'types/IDropDownList';

export const Wrapper = styled.div<IWrapper>`
  width: 100%;

  border: 1px solid var(--second-bg-color);
  color: var(--main-text-color);

  cursor: default;
  overflow: hidden;
  z-index: 99;

  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: ${({ top }) => (top ? top : '')};
    right: ${({ right }) => (right ? right : '')};
    left: ${({ left }) => (left ? left : '')};
    bottom: ${({ bottom }) => (bottom ? bottom : '')};

    width: 270px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
`;

export const Option = styled.div`
  background-color: #fafafa;
  padding: 10px;

  transition: background var(--main-hover-animation),
    color var(--main-hover-animation);
  cursor: pointer;

  :hover,
  :focus {
    background: var(--accent-bg-color);
    color: var(--second-text-color);
  }
`;
