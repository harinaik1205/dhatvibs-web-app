import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full md:max-w-4xl lg:max-w-[1140px] mx-auto box-border px-6">
      {children}
    </div>
  );
};
export default Container;
