import React from "react";
import NavLink from "@/Components/NavLink";
import { usePage } from "@inertiajs/inertia-react";
import { menuItems } from "../routes";

const Sidebar = () => {
    const { url } = usePage();

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
                <div className="mt-2">
                    <nav>
                        <ul>
                            {menuItems.map((item, index) => (
                                <NavLink
                                    href={route(item.path)}
                                    active={url.startsWith(item.route_name)}
                                    key={index}
                                >
                                    <span className="bg-neutral-700 p-1 rounded-lg">
                                        {item.icon}
                                    </span>
                                    <span className="flex items-center text-white text-1xl mx-2 font-semibold">
                                        {item.menu_title}
                                    </span>
                                </NavLink>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
