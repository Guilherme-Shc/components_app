import { createRandomMovie } from "../index";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store";


function MoviePlaylist() {
  // Get list of movies
  const dispatch = useDispatch();
  const moviePlaylist = useSelector((state) => {
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
    // Add movie to list of movies
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie) => {
    // Remove movie from list of movies
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <Button warning outline
          onClick={() => handleMovieRemove(movie)}
          className="Button is-danger"
        >
          X
        </Button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <Button primary rounded outline
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="Button is-link"
          >
            + Add Movie to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
