import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ServiceItemProps {
  service: {
    id: string;
    label: string;
    imageURL: string;
  };
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <li
      onClick={handleToggle}
      className="relative h-[340px] rounded-lg group cursor-pointer"
    >
      <img
        src={service.imageURL}
        alt={service.label}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="w-full h-full flex items-center justify-center px-6 absolute top-0 z-10">
        <span className="text-4xl text-white font-semibold text-center">
          {service.label}
        </span>
      </div>

      <div
        className={`absolute inset-0 z-20 bg-black/10 p-4 opacity-0 group-hover:opacity-100 ${
          isActive ? "opacity-100" : ""
        } transition-opacity duration-300`}
      >
        <div className="w-full h-full bg-primary-500 flex flex-col items-center justify-center gap-3">
          <span className="text-2xl text-white font-semibold text-center">
            {service.label}
          </span>
          <Link
            to={"/services"}
            className="h-12 w-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
            aria-label={`Learn more about ${service.label}`}
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ServiceItem;
