import styled from '@emotion/styled';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IoIosStar } from 'react-icons/io';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;
`;

export const StarIcon = styled(IoIosStar)`
  fill: #e6be0e;
`;

export const Body = styled.div`
  margin-bottom: 30px;
`;

export const Property = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 8px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Value = styled.span`
  color: var(--accent-text-color);
`;

export const UseerIcon = styled(FaUserAlt)`
  margin-right: 10px;
  color: var(--accent-text-color);
`;

export const PhoneIcon = styled(BsFillTelephoneFill)`
  margin-right: 10px;
  color: var(--accent-text-color);
`;

export const EmailIcon = styled(MdEmail)`
  margin-right: 10px;
  color: var(--accent-text-color);
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
