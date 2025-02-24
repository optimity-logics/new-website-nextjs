import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

type HeroVideoProps = {
  forModal?: boolean | null;
  setForModal: (val: boolean) => void;
  width: string;
  children: React.ReactNode;
  outSideClick?: () => void;
  className?: string;
  isCloseOutSide?: boolean;
};

const ParentModal: React.FC<{ children: React.ReactNode } & HeroVideoProps> = ({
  children,
  setForModal,
  forModal,
  width,
  outSideClick,
  className,
  isCloseOutSide = true,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    if (outSideClick) {
      outSideClick();
    }
    setIsOpen(false);
    setForModal(false);
    document.body.style.overflow = 'unset';
  };

  const openModal = () => {
    setIsOpen(true);
    setForModal(true);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    if (forModal) {
      openModal();
    }
    if (!forModal) {
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forModal]);

  return (
    <>
      <Modal
        ariaHideApp={false}
        onRequestClose={isCloseOutSide ? () => closeModal() : undefined}
        isOpen={modalIsOpen}
        style={{
          overlay: {
            backgroundColor: '#22222282',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            width,
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden',
          },
        }}
        className={`${className} zoom-in-fade shadow-guestPriceModal rounded-xl bg-white outline-none`}
      >
        {children}
      </Modal>
    </>
  );
};

export default ParentModal;
