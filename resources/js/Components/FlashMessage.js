import React, { useState } from "react";

const FlashMessage = ({ message }) => {
    const [show, setShow] = useState(true);
    setTimeout(() => {
        setShow(false);
    }, 1000);
    return (
        show && (
            <div
                className="absolute top-3 right-3 z-50
             p-5 bg-white rounded-md  border-t-4
             border-teal-500 rounded-b text-teal-900
              px-4 py-3 shadow-md"
                role="alert"
            >
                <div className="flex items-center gap-4">
                    <div className="py-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="font-bold">{message}</p>
                    </div>
                </div>
            </div>
        )
    );
};

export default FlashMessage;
