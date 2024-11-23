import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { MoviesContext } from "../../contexts/moviesContext";

const MarkAsWatched = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleMarkAsWatched = (e) => {
    e.preventDefault();
    context.markAsWatched(movie); // 调用上下文中的方法，添加到已观看列表
  };

  return (
    <IconButton aria-label="mark as watched" onClick={handleMarkAsWatched}>
      <CheckCircleIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default MarkAsWatched;