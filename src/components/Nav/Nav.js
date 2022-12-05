const Nav = () => {
  return (
    <nav className="px-32">
      <div className=" flex justify-between   py-5">
        <div className="text-2xl text-red-500">Portfolio</div>
        <div>
          <ul className=" flex justify-center ">
            <li className=" px-2 hover:text-teal-500">
              <a href="/" className=" text-2xl">
                Home
              </a>
            </li>
            <li className=" px-2 hover:text-teal-500">
              <a href="#" className=" text-2xl">
                About
              </a>
            </li>
            <li className=" px-2 hover:text-teal-500">
              <a href="#" className=" text-2xl">
                Works
              </a>
            </li>
          </ul>
        </div>
        <div className=" border-2 border-gray-500 hover:border-teal-500">
          <a href="#" className="px-4 py-3 text-2xl">
            Contact Me
          </a>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Nav;
