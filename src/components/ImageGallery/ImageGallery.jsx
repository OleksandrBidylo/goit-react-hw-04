import s from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <div className={s.wrapper}>
      <ul>
        {photos.map((item) => (
          <li key={item.id}>
            <ImageCard photo={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
