import { useState, useRef } from "react";

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
  // 他の曲データもここに追加
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
    <div>
      <div>
        <img src={currentSong.coverUrl} alt="Cover" style={{ width: "300px", height: "300px" }} />
      </div>
      <div>
        <h2>{currentSong.title}</h2>
        <p>{currentSong.artist}</p>
      </div>
      <div>
        <button onClick={handlePrevious}>戻る</button>
        <button onClick={togglePlayPause}>{isPlaying ? "一時停止" : "再生"}</button>
        <button onClick={handleNext}>次へ</button>
      </div>
      <audio ref={audioRef} src={currentSong.musicUrl} onEnded={handleNext} />
    </div>
  );
}

export default App;