export const PlayPauseButton = (props) => {
  const { children, className, onClick, alt, style, icon } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      type="button"
      style={style}
      aria-label={alt}
    >
      {icon}
      {children}
    </button>
  );
};
