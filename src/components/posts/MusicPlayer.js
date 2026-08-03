// Компонент-обертка
import { useAudio } from "../../hooks/useAudio";

// Вспомогательная функция для форматирования времени
const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds) || seconds === Infinity) return "0:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const MusicPlayer = ({ src }) => {
  const { isPlaying, progress, duration, togglePlay, seek } = useAudio(src);

  return (
    <div style={styles.player}>
      <button onClick={togglePlay} style={styles.button}>
        {isPlaying ? "⏸️" : "▶️"}
      </button>

      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) => seek(Number(e.target.value))}
        style={styles.slider}
      />

      <span>{formatTime((progress / 100) * duration)}</span>
    </div>
  );
};

const styles = {
  player: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "20px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "12px",
    maxWidth: "500px",
  },
  button: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(10px)",
    color: "white",
    fontSize: "28px",
    cursor: "pointer",
    transition: "transform 0.2s, background 0.2s",
    ":hover": {
      transform: "scale(1.05)",
      background: "rgba(255,255,255,0.3)",
    },
  },
  slider: {
    flex: 1,
    height: "4px",
    WebkitAppearance: "none",
    background: "rgba(255,255,255,0.3)",
    borderRadius: "2px",
    outline: "none",
    ":hover": {
      opacity: 1,
    },
  },
};

export default MusicPlayer;
