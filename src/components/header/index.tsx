import { useLocation } from "react-router-dom";

import Container from "../Container";

import { useState } from "react";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import MobileMenuButton from "./MobileMenuButton";

const Header = () => {
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white w-screen h-[103px] shadow-md flex items-center justify-center">
      <Container>
        <div className="w-full flex items-center justify-between">
          <Logo />

          <MobileMenuButton onClick={toggleSidebar} isOpen={isSidebarOpen} />

          <div className="hidden md:block">
            <NavMenu pathname={pathname} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
