import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white fixed lg:w-full md:w-full w-full top-0 left-0 z-20 ">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Veri5D</h1>
        <button
          className="block lg:hidden px-3 py-2 border border-gray-700 bg-gray-800 rounded-md text-gray-300 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul
          className={`lg:flex lg:space-x-4 space-y-4 lg:space-y-0 absolute lg:relative top-full  left-0 w-full pb-7 lg:w-auto bg-gray-800 lg:h-5 sm:h-60 lg:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer my-10 ml-10 sm:ml-10 hover:text-indigo-500 lg:font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className=" cursor-pointer my-10 ml-10 sm:ml-10 hover:text-indigo-500 lg:font-bold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer my-10 ml-10 sm:ml-10 hover:text-indigo-500 lg:font-bold"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="clients"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer my-10 ml-10 sm:ml-10 hover:text-indigo-500 lg:font-bold"
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className=" cursor-pointer my-10 ml-10 sm:ml-10 hover:text-indigo-500 lg:font-bold"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer my-10 ml-10 sm:ml-10 sm:mr-10 hover:text-indigo-500 lg:font-bold"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
