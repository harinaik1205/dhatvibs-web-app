import { Mail, MapPin, PhoneCall, X } from "lucide-react";
import React from "react";
import SidebarItem from "./SidebarItem";
import { LOGO_URL, NAV_ITEMS } from "../../constants/data";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/50 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      ></div>

      <div
        className={`md:hidden fixed top-0 right-0 z-50 h-screen w-full max-w-[270px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out overflow-x-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-screen border-l-3 border-primary-500 overflow-hidden overflow-y-auto">
          <div className="h-[103px] pr-4 flex items-center justify-between border-b border-gray-200 box-border">
            <div className="w-[100px] h-[100px]">
              <img src={LOGO_URL} alt="" className="object-cover" />
            </div>
            <button
              className="bg-primary-500 h-10 w-10 rounded flex items-center justify-center text-white cursor-pointer"
              onClick={onClose}
            >
              <X />
            </button>
          </div>

          <div className="h-[calc(100vh-103px)] flex flex-col justify-between">
            <ul className="px-6 pt-6">
              {NAV_ITEMS.map((navItem, index) => {
                return (
                  <SidebarItem
                    key={navItem.path}
                    path={navItem.path}
                    label={navItem.label}
                    onClose={onClose}
                    isLastItem={index === NAV_ITEMS.length - 1}
                  />
                );
              })}
            </ul>
            <div className="h-fit bg-primary-500 px-6 py-5">
              <h2 className="text-xl text-white font-semibold mb-5">
                Contact Info
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={70} className="text-text-primary" />
                  <span className="text-sm text-white">
                    PB House, 1st Floor, HUDA Techno Enclave, Street No.7,
                    Madhapur, Hyderabad, Telangana 500081
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-text-primary" />
                  <span className="text-sm text-white">info@dhatvibs.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall size={20} className="text-text-primary" />
                  <span className="text-sm text-white">+91 40 45374487</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
