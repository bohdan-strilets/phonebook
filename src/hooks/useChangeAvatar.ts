import { useRef, useState } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/auth/auth-operations';

const useChangeAvatar = (onClose: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState<null | File | Blob>(null);
  const [previewSource, setPreviewSource] = useState<
    string | ArrayBuffer | null
  >('');

  const dispatch = useAppDispatch();
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    hiddenFileInput?.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedFile) {
      previewFile(selectedFile);
      setIsLoading(true);
      const data = new FormData();
      data.append('avatar', selectedFile);

      if (!data) return;

      const res = await dispatch(operations.changeAvatar(data));
      console.log(res);

      if (res.payload) {
        setIsLoading(false);
        onClose();
      }
    }
  };

  return {
    handleSubmit,
    hiddenFileInput,
    handleChange,
    fileInputState,
    handleClick,
    previewSource,
    isLoading,
  };
};

export default useChangeAvatar;
