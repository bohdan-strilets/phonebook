import useChangeAvatar from 'hooks/useChangeAvatar';
import Loader from 'components/Loader';

import {
  Wrapper,
  Text,
  Form,
  Input,
  DownloadButton,
  Preview,
  Icon,
  SubmitButton,
} from './ChangeAvatar.styled';

const ChangeAvatar: React.FC<{ onclose: () => void }> = ({ onclose }) => {
  const {
    fileInputState,
    handleChange,
    handleClick,
    handleSubmit,
    hiddenFileInput,
    isLoading,
    previewSource,
  } = useChangeAvatar(onclose);

  return (
    <Wrapper>
      <Text>
        The selected file must be in one of the following formats ".jpg, .png,
        .svg". The file must not exceed 2MB. A square image is best.
      </Text>
      <Form onSubmit={handleSubmit}>
        <Input
          type="file"
          name="avatar"
          ref={hiddenFileInput}
          onChange={handleChange}
          multiple
          accept=".jpg, .png, .svg"
          value={fileInputState}
        />
        <DownloadButton type="button" onClick={handleClick}>
          <Icon />
          Choose a file...
        </DownloadButton>

        {previewSource && (
          <Preview src={previewSource as string} alt="Selected avatar" />
        )}

        <SubmitButton type="submit">Change avatar</SubmitButton>
      </Form>

      {isLoading && <Loader />}
    </Wrapper>
  );
};

export default ChangeAvatar;
