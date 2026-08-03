import "./SpecialButton.css";

export const SpecialButton = ({ children, ...props }) => {
  const { className, icon } = props;
  return (
    <button className={className}>
      {icon}
      {children}
    </button>
  );
};
