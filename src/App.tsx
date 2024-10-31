import { useState, useRef } from "react";
import "./App.css";
import { FaBackward, FaPlay, FaPause, FaForward } from "react-icons/fa";

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
  {
    title: "お地蔵様のいる小道",
    artist: "甘茶の音楽工房",
    coverUrl: "/ojizousamanoirukomichi.jpg",
    musicUrl: "/ojizousamanoirukomichi.mp3",
  },
  {
    title: "楽しい冒険",
    artist: "甘茶の音楽工房",
    coverUrl: "/tanoshiibouken.jpg",
    musicUrl: "/tanoshiibouken.mp3",
  },
  {
    title: "春への憧れ",
    artist: "甘茶の音楽工房",
    coverUrl: "/haruhenoakogare.jpg",
    musicUrl: "/haruenoakogare_healing.mp3",
  },
  {
    title: "クリスマス・コンチェルト",
    artist: "甘茶の音楽工房",
    coverUrl: "/christmasconcerto.jpg",
    musicUrl: "/christmasconcerto.mp3",
  },
  {
    title: "ミスト",
    artist: "甘茶の音楽工房",
    coverUrl: "/mist.jpeg",
    musicUrl: "/mist.mp3",
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
          <button onClick={handlePrevious}><FaBackward /></button>
          <button onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={handleNext}><FaForward /></button>
        </div>
        <audio ref={audioRef} src={currentSong.musicUrl} onEnded={handleNext} />
      </div>
    </div>
  );
}

export default App;