import React from "react";

const PageHeaderContent = ({ headerText, icon }) => {
  return (
    <div className="flex items-center px-5 py-9 border-b border-dashed border-yellow-400">
      <h2 className="text-[36px] font-bold tracking-wider leading-4 capitalize text-yellow-400 flex-grow">
        {headerText}
      </h2>
      <span className="text-yellow-400">{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
