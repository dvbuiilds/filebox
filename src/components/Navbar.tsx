import { useState } from "react";

// COMPONENTS
import { Button } from "./Button";

// ICONS
import { FaBars, FaTimes } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { Searchbar } from "./Searchbar";
import { useWindowSize } from "@f-box/hooks";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // to be removed
  const [width] = useWindowSize();
  console.log({ width });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">FileBox</div>
      <div className="hidden md:flex space-x-4 w-3/5">
        <Searchbar />
        <Button size="medium" nature="info" Icon={<FiUpload />}>
          Upload
        </Button>
        <Button size="medium" nature="dull" Icon={<IoSettingsOutline />}>
          Settings
        </Button>
      </div>
      <div className="md:hidden">
        <button onClick={toggleDropdown}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 border border-gray-700 rounded shadow-md md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Searchbar />
            </li>
            <li>
              <Button size="medium" nature="info" Icon={<FiUpload />}>
                Upload
              </Button>
            </li>
            <li>
              <Button size="medium" nature="dull" Icon={<IoSettingsOutline />}>
                Settings
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
