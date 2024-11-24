import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [towatch, setToWatch] = useState([]);
  const [watched, setWatched] = useState([]); // 添加已观看列表
  const [page, setPage] = useState(1); 

  // 添加评论
  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  // 添加到收藏夹
  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)) {
      newFavorites = [...favorites, movie.id];
    } else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites);
  };

  // 从收藏夹中移除
  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };

  // 添加到待观看列表
  const addToWatch = (movie) => {
    let newToWatch = [];
    if (!towatch.includes(movie.id)) {
      newToWatch = [...towatch, movie.id];
    } else {
      newToWatch = [...towatch];
    }
    setToWatch(newToWatch);
  };

  // 从待观看列表中移除
  const removeFromToWatch = (movie) => {
    setToWatch(towatch.filter((mId) => mId !== movie.id));
  };

  const addNewPage = (event ,newePage) => {
    setPage(newePage)
  };

  // 标记为已观看
  const markAsWatched = (movie) => {
    // 从 "To Watch" 中移除并添加到 "Watched" 列表
    removeFromToWatch(movie);
    if (!watched.includes(movie.id)) {
      setWatched([...watched, movie.id]);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        towatch,
        watched, // 添加已观看状态
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatch,
        removeFromToWatch,
        markAsWatched,
        page,
        addNewPage,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;