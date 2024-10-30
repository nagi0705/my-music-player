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
    title: "ないしょのお話",
    artist: "甘茶の音楽工房",
    coverUrl: "/naishonoohanashi.jpeg",
    musicUrl: "/naishonoohanashi.mp3",
  },
  {
    title: "6月の森",
    artist: "甘茶の音楽工房",
    coverUrl: "/rokugatsunomori.jpg",
    musicUrl: "/rokugatsunomori.mp3",
  },
  {
    title: "遠い星の光",
    artist: "甘茶の音楽工房",
    coverUrl: "/toihoshinohikari.jpeg",
    musicUrl: "/toihoshinohikari.mp3",
  },
  {
    title: "雪解け",
    artist: "甘茶の音楽工房",
    coverUrl: "/yukidoke.jpg",
    musicUrl: "/yukidoke.mp3",
  },
  {
    title: "夢の名残り",
    artist: "甘茶の音楽工房",
    coverUrl: "/yumenonagori.jpeg",
    musicUrl: "/yumenonagori.mp3",
  },
  {
    title: "夕日に羽ばたく心",
    artist: "甘茶の音楽工房",
    coverUrl: "/yuuzoranihabatakukokoro.jpeg",
    musicUrl: "/yuuzoranihabatakukokoro.mp3",
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