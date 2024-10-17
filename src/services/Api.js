import axios from "axios";

export const fetchPhotos = async (page = 1, query) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=20&client_id=2KB_xAiOY-3PlaK_xrBHHZi-yuwI2rXgjJad37c2aEY`
  );
  return data;
};
