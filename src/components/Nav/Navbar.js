import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-32">
      <div className=" flex justify-between   py-5">
        <div className="text-2xl text-red-500">Portfolio</div>
        <div>
          <ul className=" flex justify-center ">
            <li className=" px-2 hover:text-teal-500">
              <Link to="/" className="text-2xl">
                Home
              </Link>
            </li>
            <li className=" px-2 hover:text-teal-500">
              <Link to="/about" className="text-2xl">
                About
              </Link>
            </li>
            <li className=" px-2 hover:text-teal-500">
              <Link to="/works" className="text-2xl">
                Works
              </Link>
            </li>
          </ul>
        </div>
        <div className=" border-2 border-gray-500 hover:border-teal-500">
          <Link to="/contact" className="px-4 py-3 text-2xl">
            Contact Me
          </Link>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
