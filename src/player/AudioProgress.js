import "./AudioProgress.css";

export const AudioProgress = ({ currentTime, duration, onChange }) => {
  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <input
      className="audio-progress"
      type="range"
      min="0"
      max={duration || 0}
      step="0.1"
      value={currentTime}
      onChange={onChange}
      style={{
        background: `linear-gradient(
      to right,
      var(--purple) 0%,
      var(--purple) ${progress}%,
      transparent  ${progress}%
    ) center / 100% 4px no-repeat`,
      }}
    />
  );
};
