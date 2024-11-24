import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchIcon from "../components/cardIcons/addToWatch";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const TopRatedPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('toprated', getTopRatedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const towatch = movies.filter(m => m.towatch)
  localStorage.setItem('towatch', JSON.stringify(towatch))
  const addToWatch = (movieId) => true 

  return (
    <PageTemplate
      title="Toprate Movies"
      movies={movies}
      action={(movie) => {
        return(
          <>
            <AddToFavoritesIcon movie={movie} />
            <AddToWatchIcon movie={movie} />
          </>
        );
      }}
    />
);
};
export default TopRatedPage;