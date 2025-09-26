import React from "react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer">
      <div className="text-primary-500 text-4xl mb-4 bg-[#c9c9c9]/50 h-12 w-12 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureItem;
