import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [towatch, setToWatch] = useState( [] )


  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToWatch = (movie) => {
    let newToWatch = [];
    if (!towatch.includes(movie.id)){
      newToWatch = [...towatch, movie.id];
    }
    else{
      newToWatch = [...towatch];
    }
    setToWatch(newToWatch)
    console.log(setToWatch)
  };
  

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        towatch,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatch
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;