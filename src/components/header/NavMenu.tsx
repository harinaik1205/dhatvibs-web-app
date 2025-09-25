import { NAV_ITEMS } from "../../constants/data";
import NavItem from "./NavItem";

const NavMenu = ({ pathname }: { pathname: string }) => (
  <ul className="flex items-center justify-end gap-10">
    {NAV_ITEMS.map((item) => (
      <NavItem
        key={item.path}
        label={item.label}
        path={item.path}
        isActive={pathname === item.path}
      />
    ))}
  </ul>
);

export default NavMenu;
