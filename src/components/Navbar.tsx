import { useState } from "react";

// COMPONENTS
import { Button } from "./Button";

// ICONS
import { FaBars, FaTimes } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { Searchbar } from "./Searchbar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-18 bg-gray-800 text-white p-4 flex justify-between items-center">
      <a href="/">
        <div className="text-2xl font-bold">FileBox</div>
      </a>
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
        <div className="absolute z-10 top-16 right-4 bg-gray-800 border border-gray-700 rounded shadow-md md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li className="rounded bg-yellow-200">
              <Searchbar />
            </li>
            <li>
              <Button size="medium" nature="info" Icon={<FiUpload />} fullWidth>
                Upload
              </Button>
            </li>
            <li>
              <Button
                size="medium"
                nature="dull"
                Icon={<IoSettingsOutline />}
                fullWidth
              >
                Settings
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
