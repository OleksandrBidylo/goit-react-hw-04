import s from "./ImageCard.module.css";

const ImageCard = ({ photo, openModal }) => {
  return (
    <div>
      <img
        className={s.image}
        src={photo.urls.small}
        alt={photo.alt_description}
        width="220"
        height="180"
        onClick={() => openModal(photo)}
      />
    </div>
  );
};

export default ImageCard;
