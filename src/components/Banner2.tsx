import React from "react";
import Breadcrumbs from "./bread-crumbs";

interface Banner2Props {
  imageURL: string;
  text: string;
}

const Banner2: React.FC<Banner2Props> = ({ imageURL, text }) => {
  return (
    <div className="relative w-full h-[380px] md:h-[450px] flex items-center justify-center">
      <div className="max-w-3xl px-6 flex flex-col items-center selection:bg-primary-500 z-20">
        <Breadcrumbs />
        <h1 className="text-4xl text-white tracking-wider font-semibold text-center">
          {text}
        </h1>
      </div>

      <div className="absolute inset-0 -z-10">
        <img src={imageURL} alt="Banner" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 z-10 bg-black/50"></div>
    </div>
  );
};

export default Banner2;
