import type React from "react";
import { Link } from "react-router-dom";

interface BannerProps {
  imageURL: string;
}

const Banner: React.FC<BannerProps> = ({ imageURL }) => (
  <div className="relative w-full h-[calc(100vh-103px)] flex items-center justify-center">
    <div className="max-w-3xl px-6 flex flex-col items-center selection:bg-primary-500  z-20">
      <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl font-semibold text-center">
        Innovate with DBS: Your Digital Transformation Partner
      </h1>
      <Link
        to="/contact"
        className="relative inline-block border border-primary-500 px-6 py-2 rounded-full text-white text-sm font-semibold mt-10 overflow-hidden group"
      >
        <span className="relative z-10 text-base uppercase tracking-wider">
          Connect with Us
        </span>
        <span className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-green-700 scale-0 group-hover:scale-100 origin-bottom-left transition-transform duration-500 ease-out rounded-full"></span>
      </Link>
    </div>

    <div className="absolute inset-0 -z-10">
      <img src={imageURL} alt="Banner" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 z-10 bg-black/50"></div>
  </div>
);

export default Banner;
