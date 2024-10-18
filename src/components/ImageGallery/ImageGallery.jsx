import s from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <div className={s.wrapper}>
      <ul>
        {photos.map((item) => (
          <li key={item.id}>
            <ImageCard photo={item} openModal={() => openModal(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
