import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

const Edit = ({ auth, errors }) => {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Edit" />
        </Authenticated>
    );
};

export default Edit;
