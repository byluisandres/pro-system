import React from "react";
import { Plus } from "@/icons";
import { Link } from "@inertiajs/inertia-react";

const HeaderSection = ({ children, href, btntext }) => {
    return (
        <section className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">{children}</h1>
            <Link
                href={route(href)}
                className="bg-emerald-900 hover:bg-emerald-800 text-white p-2 rounded-md font-semibold flex justify-between items-center"
            >
                <Plus />
                {btntext}
            </Link>
        </section>
    );
};

export default HeaderSection;
