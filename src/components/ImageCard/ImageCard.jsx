import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";
import s from "./ImageCard.module.css";

const ImageCard = ({ photo }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <div>
      <img
        className={s.image}
        src={photo.urls.small}
        alt={photo.alt_description}
        width="220"
        height="180"
        onClick={openModal}
      />

      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        photo={photo}
      />
    </div>
  );
};

export default ImageCard;
