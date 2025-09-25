import type React from "react";
import { useNavigate } from "react-router-dom";

interface SidebarItemProps {
  path: string;
  label: string;
  onClose: () => void;
  isLastItem: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  path,
  label,
  onClose,
  isLastItem,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
    onClose();
  };

  return (
    <li
      className={`py-4 ${
        isLastItem ? "border-none" : "border-b border-gray-200"
      }`}
    >
      <button
        onClick={handleClick}
        className={`text-lg text-text-primary hover:text-primary-500 font-medium transition-colors duration-300 cursor-pointer`}
      >
        {label}
      </button>
    </li>
  );
};

export default SidebarItem;
