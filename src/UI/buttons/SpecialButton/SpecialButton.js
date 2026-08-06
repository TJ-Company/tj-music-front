import "./styles/ProfileButton.css";
import "./styles/SortButton.css";

export const SpecialButton = ({ children, ...props }) => {
  const { className, icon } = props;
  return (
    <button className={className}>
      {icon}
      {children}
    </button>
  );
};
