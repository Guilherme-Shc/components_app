import { createRandomSong } from "../index";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../store";



function SongPlaylist() {
  // Get list of songs
  const dispatch = useDispatch();
  const songPlaylist = useSelector((state) => {
    return state.songs;
  });

  const handleSongAdd = (song) => {
    // Add song to list of songs
    dispatch(addSong(song));
  };
  const handleSongRemove = (song) => {
    // Remove song from list of songs
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <Button warning outline
          onClick={() => handleSongRemove(song)}
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
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <Button success rounded outline
            onClick={() => handleSongAdd(createRandomSong())}
            className="Button is-link"
          >
            + Add Song to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
