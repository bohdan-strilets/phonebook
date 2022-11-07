import styled from '@emotion/styled';
import { ImUpload3 } from 'react-icons/im';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const Input = styled.input`
  display: none;
`;

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;
  margin-bottom: 30px;

  background-color: var(--main-bg-color);
  color: var(--accent-text-color);
  border: 2px solid var(--accent-bg-color);

  font-family: inherit;

  cursor: pointer;
  transition: background-color var(--main-hover-animation),
    color var(--main-hover-animation);

  :hover,
  :focus {
    background-color: var(--accent-bg-color);
    color: var(--second-text-color);
  }
`;

export const Preview = styled.img`
  width: 200px;
  margin-bottom: 30px;
`;

export const Icon = styled(ImUpload3)`
  margin-right: 7px;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 270px;
  height: 40px;
  margin-bottom: 50px;

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
`;
