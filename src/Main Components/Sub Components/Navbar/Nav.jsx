import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import logo from "../../../assets/bird_2-removebg-preview.png";
import { Link } from "react-router-dom";

const Nav = ({ setMobileMenuOpen, products }) => {
  return (
    <>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 "
        aria-label="Global"
      >
        {/* logo website */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-10 w-auto" src={logo} alt="" />
          </Link>
        </div>
        {/* logo burger saat di mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* search bar */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <div className="flex w-72 min-w-7xl ">
            <label htmlFor="search-blog" className="sr-only">
              Search Bar
            </label>
            {/* <>
              <a href="#search-blog">
                <MagnifyingGlassCircleIcon className="w-8 m-1 text-white " />
              </a>
              <input
                id="search-blog"
                name="search"
                type="search"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/75 px-3.5 py-2 text-black shadow-sm ring-1 ring-blue-500 focus:ring-1 focus:ring-outset focus:ring-blue-500 sm:text-sm sm:leading-6 relative"
                placeholder="Search blog"
              />
            </> */}
          </div>
        </Popover.Group>
        {/* pop up untuk log in */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Continue Reading
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-64 max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-2 rounded-lg p-2 text-sm leading-6 hover:bg-blue-400"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            to={item.link}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        </div>
      </nav>
    </>
  );
};

export default Nav;
