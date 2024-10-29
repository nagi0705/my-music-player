import { useState, useRef } from "react";
import "./App.css";

type Song = {
  title: string;
  artist: string;
  coverUrl: string;
  musicUrl: string;
};

const songs: Song[] = [
  {
    title: "シャイニングスター",
    artist: "詩歩",
    coverUrl: "/shining_star.jpeg",
    musicUrl: "/maou_14_shining_star.mp3",
  },
  {
    title: "Burning Heart",
    artist: "KEI",
    coverUrl: "/burning_heart.jpg",
    musicUrl: "/maou_08_burning_heart.mp3",
  },
];

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = songs[currentSongIndex];

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app-container flex items-center justify-center min-h-screen">
      <div className="container">
        <img
          src={currentSong.coverUrl}
          alt="Cover"
          className="album-cover"
        />
        <h2 className="song-title">{currentSong.title}</h2>
        <p className="song-artist">{currentSong.artist}</p>
        <div className="controls">
          <button onClick={handlePrevious}>⏪</button>
          <button onClick={togglePlayPause}>{isPlaying ? "⏸" : "▶️"}</button>
          <button onClick={handleNext}>⏩</button>
        </div>
        <audio ref={audioRef} src={currentSong.musicUrl} onEnded={handleNext} />
      </div>
    </div>
  );
}

export default App;