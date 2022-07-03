import React from "react";

export interface HeaderProps {
  title: string;
  icon?: JSX.Element;
  action?: React.ReactNode;
}

const SubHeader: React.FC<HeaderProps> = ({ title, icon }) => {
  return (
    <div className="pt-8 pb-4 font-semibold">
    <div className="flex items-center justify-between">
      <div className="flex justify-start items-center text-xl">
        {icon && (
          <div className="mr-2 flex items-center justify-center">{icon}</div>
        )}
        {title}
      </div>
    </div>
  </div>
  )
};

export default SubHeader;