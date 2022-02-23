import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

const Show = ({ auth, errors }) => {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Show" />
        </Authenticated>
    );
};

export default Show;
