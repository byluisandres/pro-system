import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Paginate = ({ links }) => {
    if (links.length === 3) return null;
    return (
        <div className="flex flex-col items-end my-2">
            <div className="flex text-neutral-700">
                <div className="flex h-9 font-medium rounded-full bg-neutral-200 px-2">
                    {links.map((link, index) => (
                        <div
                            className="md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full mr-3"
                            key={index}
                        >
                            <Link
                                href={link.url == null ? "" : link.url}
                                className={
                                    link.active
                                        ? "bg-neutral-900 rounded-full flex justify-center items-center w-7 h-7 text-white"
                                        : "hover:underline"
                                }
                            >
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                ></span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Paginate;
