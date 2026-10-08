import "./styles/ProfileButton.css";
import "./styles/SortButton.css";

export const SpecialButton = ({ children, ...props }) => {
  const { className, onClick, icon } = props;
  return (
    <button className={className} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};
