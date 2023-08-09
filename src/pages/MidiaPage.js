import "../styles/mediaStyle.css";
import MoviePlaylist from "../components/MoviePlaylist";
import SongPlaylist from "../components/SongPlaylist";
import Button from "../components/Button";

export default function MidiaPage() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container is-fluid">
      <Button danger onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </Button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
