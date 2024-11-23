import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromToWatch = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromToWatch = (e) => {
    e.preventDefault();
    context.removeFromToWatch(movie); // 调用上下文中的方法，从 To Watch 列表中移除
  };

  return (
    <IconButton
      aria-label="remove from to watch"
      onClick={handleRemoveFromToWatch}
    >
      <HighlightOffIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromToWatch;