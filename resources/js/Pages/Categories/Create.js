import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

const Create = ({ auth, errors }) => {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Create" />
        </Authenticated>
    );
};

export default Create;
