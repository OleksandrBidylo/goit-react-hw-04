import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, photo }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modalContent}
      overlayClassName={s.modalOverlay}
    >
      <div>
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          width={700}
          height={800}
          className={s.modalImage}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
