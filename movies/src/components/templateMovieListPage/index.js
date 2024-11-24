import React, { useState, useContext } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import Pagination from "@mui/material/Pagination";
import { MoviesContext } from "../../contexts/moviesContext";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [lauguageFilter, setLauguageFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // 当前页码
  const moviesPerPage = 10; // 每页显示10部电影
  const { page, addNewPage } = useContext(MoviesContext);
  

  const genreId = Number(genreFilter);

  // 过滤电影
  const filteredMovies = movies
    .filter((m) => m.title.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter((m) => (genreId > 0 ? m.genre_ids.includes(genreId) : true))
    .filter((m) => (lauguageFilter !== "" ? m.original_language === lauguageFilter : true));

  // 分页逻辑
  const indexOfLastMovie = currentPage * moviesPerPage; // 当前页最后一部电影的索引
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage; // 当前页第一部电影的索引
 let displayedMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  if (title === "Discover Movies"){
     displayedMovies = filteredMovies
  }


  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value)
    else if (type === "language") setLauguageFilter(value);
     setCurrentPage(1); // 过滤器变化时重置页码
  };

  return (
    <Grid container>
      {/* 页头 */}
      <Grid size={12}>
        <Header title={title} />
      </Grid>

      {/* 主内容：过滤器 + 电影列表 */}
      <Grid container sx={{ flex: "1 1 500px" }}>
        {/* 过滤器 */}
        <Grid
          key="find"
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          sx={{ padding: "20px" }}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            lauguageFilter={lauguageFilter}
          />
        </Grid>

        {/* 电影列表 */}
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>

      {/* 分页控件 */}
      <Grid size={12} sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <Pagination
          count={title === "Discover Movies" ? 20 : Math.ceil(filteredMovies.length / moviesPerPage)} // 计算总页数
          page={title === "Discover Movies" ? page : currentPage}
          onChange={title === "Discover Movies" ? addNewPage :handlePageChange}
          color="primary"
        />
      </Grid>
    </Grid>
  );
}

export default MovieListPageTemplate;