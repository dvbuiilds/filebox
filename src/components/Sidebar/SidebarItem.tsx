import React from "react";

interface SidebarItemProps extends React.ComponentProps<"div"> {
  label: string;
  icon?: React.ReactNode;
  isActive: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon,
  isActive,
  ...otherSidebarProps
}) => {
  return (
    <div
      className={`flex items-center py-4 px-6 cursor-pointer gap-4 ${
        isActive ? "bg-gray-300" : "bg-white hover:bg-gray-200"
      }  transition-all`}
      {...otherSidebarProps}
    >
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-lg font-bold text-gray-700">
        {icon ? icon : label.charAt(0).toUpperCase()}
      </div>
      <span className="mr-4 text-gray-800 hidden md:block">{label}</span>
    </div>
  );
};
