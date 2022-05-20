import { useState } from 'react';

const useShowModal = (option: boolean) => {
  const [showModal, setShowModal] = useState<boolean>(option);
  const toggleModal = () => setShowModal(prevState => !prevState);

  return { toggleModal, showModal };
};

export default useShowModal;
