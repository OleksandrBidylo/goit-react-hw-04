import { useEffect, useState } from "react";
import "./App.css";
import "../src/App.css";
import { fetchPhotos } from "./services/Api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import ErorrMessage from "./components/ErrorMessage/ErorrMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchPhotos(page, query);
        setPhotos((prev) => [...prev, ...data.results]);
        setTotalResults(data.total);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (page && query) {
      getData();
    }
  }, [page, query]);

  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery} />

      {!!photos.length && <ImageGallery photos={photos} />}
      {!!photos.length && photos.length < totalResults && (
        <LoadMoreBtn handleChangePage={handleChangePage} />
      )}
      {isLoading && <Loader />}
      {isError && <ErorrMessage />}
    </div>
  );
}

export default App;
