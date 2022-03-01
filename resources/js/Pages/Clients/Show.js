import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Breadcrumb from "@/Components/Breadcrumb";
import CardInfo from "@/Components/CardInfo";

const Show = ({ auth, errors, client }) => {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Show" />
            <section>
                <Breadcrumb />
            </section>
            <CardInfo data={client} />
            <section className="mt-3 p-2">
                <h2 className="text-xl text-neutral-900">
                    Historial de compras
                </h2>
            </section>
        </Authenticated>
    );
};

export default Show;
