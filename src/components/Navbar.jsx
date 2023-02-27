import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-gray-700 py-4 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <button
            className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent3"
            aria-controls="navbarSupportedContent3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto gap-8"
            id="navbarSupportedContent3"
            data-te-collapse-item
          >
            <Link className="text-3xl text-[#f4eb3d] font-bold" to="/">
              e-<span className="text-[#20cd1a]">Assistant</span>
            </Link>
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row text-xl gap-4"
              data-te-navbar-nav-ref
            >
              <li className="lg:px-2" data-te-nav-item-ref>
                <Link
                  className={`p-0 text-white hover:text-neutral-200 ${
                    location.pathname == "/" ? "text-white font-semibold" : ""
                  }`}
                  aria-current="page"
                  to="/"
                  data-te-nav-link-ref
                >
                  Home
                </Link>
              </li>
              <li className="lg:pr-2" data-te-nav-item-ref>
                <Link
                  className={`p-0 text-white hover:text-neutral-200 ${
                    location.pathname == "/add"
                      ? "text-white font-semibold"
                      : ""
                  }`}
                  to="/add"
                  data-te-nav-link-ref
                >
                  New Task
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
