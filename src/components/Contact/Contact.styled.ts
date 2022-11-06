import styled from '@emotion/styled';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IoIosStar } from 'react-icons/io';

export const Wrapper = styled.div`
  background-color: #fafafa;
  border-radius: 10px;
  border: 1px solid #f2f2f2;

  padding: 10px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconUser = styled.p<{ background?: string }>`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;

  background-color: ${({ background }) =>
    background ? background : 'var(--accent-bg-color)'};
  color: var(--main-bg-color);

  margin-right: 30px;
  padding: 7px 15px;
`;

export const Name = styled.p`
  font-size: 18px;
  color: var(--main-text-color);
`;

export const DataWrapper = styled.div`
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0;
  }
`;

export const Number = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }
`;

export const NumberIcon = styled(BsFillTelephoneFill)`
  fill: var(--accent-bg-color);
  margin-right: 5px;
`;

export const Email = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmailIcon = styled(MdEmail)`
  fill: var(--accent-bg-color);
  margin-right: 5px;
`;

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonItem = styled.li`
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 30px;
  padding: 10px;

  border: none;
  background-color: transparent;
  color: var(--accent-bg-color);

  cursor: pointer;
  transition: color var(--main-hover-animation);

  :hover,
  :focus {
    color: var(--second-bg-color);
  }
`;

export const StarIcon = styled(IoIosStar)<{ fill?: string }>`
  fill: ${({ fill }) => (fill ? fill : '')};
`;
