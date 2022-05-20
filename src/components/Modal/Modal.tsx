import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { Backdrop, ModalWrapper, Wrapper, Title, Button } from './Modal.styled';
import IModal from 'types/IModal';

const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;

const Modal = ({ children, onClose, title }: IModal) => {
  useEffect(() => {
    const onPessKeyDown = (e: { code: string }) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onPessKeyDown);

    return () => window.removeEventListener('keydown', onPessKeyDown);
  }, [onClose]);

  const onBackdropClick = (e: { target: any; currentTarget: any }) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalWrapper>
        <Wrapper>
          <Title>{title}</Title>
          <Button type="button" onClick={onClose}>
            <AiOutlineClose />
          </Button>
        </Wrapper>
        {children}
      </ModalWrapper>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;
