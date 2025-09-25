import { Menu } from "lucide-react";
import Sidebar from "../sidebar";
import type React from "react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  onClick,
  isOpen,
}) => (
  <div className="relative md:hidden">
    <button onClick={onClick}>
      <Menu
        size={30}
        className="text-text-primary hover:text-primary-500 transition-colors duration-200 cursor-pointer"
      />
    </button>
    <Sidebar isOpen={isOpen} onClose={onClick} />
  </div>
);

export default MobileMenuButton;
