import styled from '@emotion/styled';
import { IoLogOutSharp } from 'react-icons/io5';

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
  }
`;

export const GroupWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  transition: opacity var(--main-hover-animation);

  cursor: pointer;

  :hover {
    opacity: 0.6;
  }
`;

export const TextWrapper = styled.div`
  margin-left: 25px;
  margin-right: 25px;
`;

export const Text = styled.p`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const UserName = styled.span`
  color: var(--accent-text-color);
`;

export const Email = styled.p`
  font-size: 14px;
  color: #cccccc;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 35px;
  padding: 0 20px 0 20px;

  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  font-family: inherit;
  border: none;

  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  :hover,
  :focus {
    background-color: var(--second-bg-color);
  }

  @media screen and (max-width: 1439px) {
    width: 100%;
  }
`;

export const Icon = styled(IoLogOutSharp)`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;
