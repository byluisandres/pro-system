import React from "react";

const Content = ({ children }) => {
    return (
        <div className=" border-l-4 border-neutral-900 p-2 bg-neutral-50 mb-3">
            <span className="font-bold text-lg">{children}</span>
        </div>
    );
};

export default Content;
