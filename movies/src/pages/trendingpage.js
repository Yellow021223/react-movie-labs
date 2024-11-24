import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchIcon from "../components/cardIcons/addToWatch";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const TrendingPage = () => {
  const { data, error, isLoading, isError } = useQuery('trending', getTrendingMovies);
  console.log("trend",data)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const movies = data.results;

  return (
    <PageTemplate
      title="Trending Movies"
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

export default TrendingPage;