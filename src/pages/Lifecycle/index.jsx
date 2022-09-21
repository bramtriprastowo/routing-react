import React from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import SearchBar from "./components/SearchBar";

const url1 = "https://newsapi.org/v2/top-headlines?country=us";
const pageTitle = 'lifecycle';

class Lifecycle extends React.Component {
  state = {
    dataNews: [],
    search: "",
  };

  //Fungsi untuk menggunakan Fetch API
  fetchNews = (url) => {
    fetch(url, {
      headers: {
        "X-Api-Key": "dfb0aebf0cb64552b1a1da8efe1d6002",
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ dataNews: data["articles"] }));
  };

  //Fungsi untuk menangkap input pada search bar untuk fitur live search
  handleChange = (e) => {
    this.setState(
      {
        search: e.target.value,
      },
      () => console.log(this.state.search)
    );
  };

  render() {
    const { search, dataNews } = this.state;
    return (
      <>
        {/* Navbar */}
        <Navbar />

        {/* Kolom Pencarian */}
        <SearchBar search={search} onChange={this.handleChange} />

        {/* Tampilan berita dalam bentuk kumpulan card */}
        <NewsCard dataNews={dataNews} />
      </>
    );
  }

  //Melakukan fetch berita menggunakan componentDidMount
  componentDidMount() {
    this.fetchNews(url1);
    this.props.handleActivePage(pageTitle);
  }

  // Menambahkan fitur live search dengan componentDidUpdate
  componentDidUpdate(prevProp, prevState) {
    const url2 = `https://newsapi.org/v2/everything?q=${this.state.search}&searchIn=title`;
    const { search } = this.state;

    if (prevState.search !== search) {
      if (search.length > 0) {
        this.fetchNews(url2);
      } else if (search.length === 0) {
        this.fetchNews(url1);
      }
    }
  }

  componentWillUnmount() {
    this.props.handleActivePage('');
  }
}

export default Lifecycle;
