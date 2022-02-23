import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, children }) {

    return (
        <li className="items-center duration-200 py-1 px-6">
            <Link
                href={href}
                className={`flex p-2 ${
                    active
                        ? "bg-neutral-800  border-l-2 border-l-neutral-700 "
                        : ""
                }`}
            >
                {children}
            </Link>
        </li>
    );
}
