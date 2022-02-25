import React from "react";
import Header from "@/partials/Header";
import Sidebar from "@/partials/Sidebar";
const Authenticated = ({ auth, children }) => {
    return (
        <>
            <div className="flex h-screen font-roboto">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header auth={auth} />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 relative">
                        <div className="container mx-auto sm:px-4 pt-4">
                            <div className="p-8 bg-white rounded-md">
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Authenticated;
