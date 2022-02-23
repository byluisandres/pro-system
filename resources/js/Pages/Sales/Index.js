import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

const Index = ({ auth, errors }) => {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Index" />
        </Authenticated>
    );
};

export default Index;
