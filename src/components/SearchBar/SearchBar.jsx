import toast, { Toaster } from "react-hot-toast";
import s from "./Header.module.css";

const SearchBar = ({ setQuery }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.query.value;
    setQuery(query);
    form.reset();

    if (query === "") {
      toast.error("Type something!");
      return;
    }
  };

  return (
    <div className={s.wrapper}>
      <header>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <Toaster />
    </div>
  );
};

export default SearchBar;
