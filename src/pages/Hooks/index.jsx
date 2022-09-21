import { useState, useEffect, useCallback } from "react";
import Navbar from "./Components/Navbar";
import NewsCard from "./Components/NewsCard";
import SearchBar from "./Components/SearchBar";

const NewsSite = (props) => {
  const [dataNews, setDataNews] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState();
  const pageTitle = "hooks";

  const { handleActivePage } = props;

  //Fungsi untuk menyimpan input dari kolom pencarian
  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  //UseEffect untuk melakukan fetch data
  useEffect(() => {
    const url1 = "https://newsapi.org/v2/top-headlines?country=us";
    const url2 = `https://newsapi.org/v2/everything?q=${search}&searchIn=title`;

    const fetchNews = (url) => {
      setIsLoading(true);

      fetch(url, {
        headers: {
          "X-Api-Key": "dfb0aebf0cb64552b1a1da8efe1d6002",
        },
      })
        .then((response) => response.json())
        .then((data) => setDataNews(data["articles"]))
        .then(() => setIsLoading(false));
    };

    if (search.length === 0) {
      fetchNews(url1);
    } else if (search.length > 0) {
      fetchNews(url2);
    }
  }, [search]);

  //UseEffect untuk mengubah tampilan Sidebar ketika aktif
  useEffect(() => {
    handleActivePage(pageTitle);
  }, [handleActivePage]);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Kolom Pencarian */}
      <SearchBar onChange={handleChange} />

      {/* Tampilan berita dalam bentuk kumpulan card */}
      <NewsCard dataNews={dataNews} isLoading={isLoading} />
    </>
  );
};

export default NewsSite;
