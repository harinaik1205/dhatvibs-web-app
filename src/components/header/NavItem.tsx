import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  label: string;
  path: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, path, isActive }) => (
  <li>
    <Link
      to={path}
      className={`text-lg font-semibold ${
        isActive ? "text-primary-500" : "text-text-primary"
      } hover:text-primary-500 transition-all duration-300 cursor-pointer`}
    >
      {label}
    </Link>
  </li>
);

export default NavItem;
