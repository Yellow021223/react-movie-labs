import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromToWatch from "../components/cardIcons/removeFromToWatch"; // 假设已创建
import MarkAsWatched from "../components/cardIcons/MarkAsWatched"; // 假设已创建

const ToWatchMoviesPage = () => {
  const { towatch: movieIds } = useContext(MoviesContext);

  // 创建并行查询以获取待看的电影详情
  const toWatchMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  // 检查是否仍有查询在加载中
  const isLoading = toWatchMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  // 处理电影数据
  const movies = toWatchMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Movies to Watch"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromToWatch movie={movie} /> {/* 从待看中移除 */}
            <MarkAsWatched movie={movie} /> {/* 标记为已看 */}
          </>
        );
      }}
    />
  );
};

export default ToWatchMoviesPage;
