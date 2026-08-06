export const PlayPauseButton = (props) => {
  const { className, onClick, alt, style, icon } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      type="button"
      style={style}
      aria-label={alt}
    >
      {icon}
    </button>
  );
};
