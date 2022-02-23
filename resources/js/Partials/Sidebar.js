import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Sidebar = () => {
    return (
        <div className="flex">
            {/* <!-- Backdrop --> */}
            <div
                // :className="isOpen ? 'block' : 'hidden'"
                // @click="isOpen = false"
                className="
                fixed
                z-20
                inset-0
                bg-neutral-900
                opacity-50
                transition-opacity
                lg:hidden
                py-2
                block
            "
            ></div>
            {/* <!-- End Backdrop --> */}

            <div
                // :className="
                //     isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
                // "
                className="
                fixed
                z-30
                inset-y-0
                left-0
                w-64
                transition
                duration-300
                transform
                bg-neutral-900
                overflow-y-auto
                lg:translate-x-0
                lg:static lg:inset-0
                -translate-x-full ease-in
            "
            >
                <div className="flex items-center justify-center mt-5">
                    <div className="flex items-center">
                        <span className="text-white text-2xl mx-2 font-semibold">
                            Pro System
                        </span>
                    </div>
                </div>
                <div className="p-2 mt-5"></div>
                {/* <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
          <ul>
            <li>
              <Link
                className="text-white flex  px-4 py-2 mt-2 text-md font-semibold  bg-transparent rounded-lg"
                href="/dashboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-home h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                </svg>
                <span className="ml-2">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                className="text-white flex  px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg"
                href="/cita"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-file h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                </svg>
                <span className="ml-2">Citas</span>
              </Link>
            </li>
            <li>
              <Link
                className="text-white flex  px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg"
                href="/calendario"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-event h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                  <line x1="16" y1="3" x2="16" y2="7"></line>
                  <line x1="8" y1="3" x2="8" y2="7"></line>
                  <line x1="4" y1="11" x2="20" y2="11"></line>
                  <rect x="8" y="15" width="2" height="2"></rect>
                </svg>
                <span className="ml-2">Calendario</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex  px-4 py-2 mt-2 text-md font-semibold text-gray-50 bg-transparent rounded-lg"
                href="/gasto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-cash h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="7" y="9" width="14" height="10" rx="2"></rect>
                  <circle cx="14" cy="14" r="2"></circle>
                  <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"></path>
                </svg>
                <span className="ml-2">Gastos</span>
              </Link>
            </li>
          </ul>
        </nav> */}
            </div>
        </div>
    );
};

export default Sidebar;
