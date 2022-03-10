import React from "react";
import Header from "@/partials/Header";
import Sidebar from "@/partials/Sidebar";
import { usePage } from "@inertiajs/inertia-react";
import FlashMessage from "@/Components/FlashMessage";

const Authenticated = ({ auth, children }) => {
    const { flash } = usePage().props;

    return (
        <>
            {flash.message && <FlashMessage message={flash.message} />}
            <div className="flex h-screen font-roboto">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header auth={auth} />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                        <div className="container mx-auto sm:px-4 pt-4 relative">
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
