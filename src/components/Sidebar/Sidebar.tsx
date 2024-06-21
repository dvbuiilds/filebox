import React from "react";

interface SidebarProps extends React.ComponentProps<"div"> {}
export const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <div className="bg-white flex-shrink-0 border-r border-gray-200">
      {props?.children}
    </div>
  );
};
