import { usePage } from "@inertiajs/inertia-react";
import React from "react";

const Crumb = ({ crumblist, last }) => {
    return (
        <>
            <li>
                <span className="font-bold uppercase">{crumblist}</span>
            </li>
            {!last ? (
                <li>
                    <span className="mx-2">/</span>
                </li>
            ) : null}
        </>
    );
};

const Breadcrumb = () => {
    const { url } = usePage();
    let crumblists = url.split("/").filter((v) => v.length > 0);

    return (
        <nav className="bg-neutral-800 p-2 rounded font-sans w-full hover:bg-neutral-900">
            <ol className="list-reset flex text-xl text-white">
                {crumblists.map((crumblist, index) => (
                    <Crumb
                        key={index}
                        crumblist={crumblist}
                        last={index === crumblists.length - 1}
                    />
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
