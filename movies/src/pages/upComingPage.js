import React from "react";
import { getUpComingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchIcon from "../components/cardIcons/addToWatch";

const UpComingPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpComingMovies)

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
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToWatchIcon movie={movie} />
      }}
    />
);
};
export default UpComingPage;