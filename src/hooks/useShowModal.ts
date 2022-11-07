import { useState } from 'react';

const useShowModal = (option: boolean) => {
  const [showContactInfoModal, setShowContactInfoModal] = useState(option);
  const [showDeleteContactModal, setShowDeleteContactModal] = useState(option);

  const toggleContactInfoModal = () => setShowContactInfoModal(state => !state);
  const toggleDeleteContactModal = () =>
    setShowDeleteContactModal(state => !state);

  return {
    showContactInfoModal,
    toggleContactInfoModal,
    showDeleteContactModal,
    toggleDeleteContactModal,
  };
};

export default useShowModal;
