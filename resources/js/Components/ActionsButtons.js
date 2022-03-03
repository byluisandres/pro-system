import React from "react";
import { ChevronLeft } from "@/icons";

const ActionsButtons = ({ children }) => {
    const handleClick = () => {
        window.history.back();
    };
    return (
        <div className="py-3 bg-white  font-bold text-md uppercase">
            <div className="flex justify-between items-center">
                <button
                    className="hover:underline flex items-center"
                    type="button"
                    onClick={handleClick}
                >
                    <ChevronLeft />
                    Volver
                </button>
                <div className="flex gap-3">
                    <button
                        className="p-2 bg-red-800 hover:bg-red-900 text-white rounded
                        flex items-center justify-between font-bold text-md uppercase"
                        type="button"
                        onClick={handleClick}
                    >
                        Cancelar
                    </button>
                    <button
                        className="p-2 bg-green-800 hover:bg-green-900 text-white rounded flex items-center justify-between font-bold text-md uppercase"
                        type="submit"
                    >
                        {children}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActionsButtons;
