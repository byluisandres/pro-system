import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Breadcrumb from "@/Components/Breadcrumb";

const Show = ({ auth, errors, supplier }) => {
    console.log(supplier);
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Show" />
            <section>
                <Breadcrumb />
            </section>
            <section className="mt-3 bg-neutral-50 rounded-md p-2">
                <h1>
                    <span className="text-neutral-700 mr-2"> Nombre:</span>
                    {supplier.name}
                </h1>
                <div className="grid grid-cols-2 gap-4">
                    <p>
                        <span className="text-neutral-700 mr-2">
                            Tipo de documento:
                        </span>
                        {supplier.type_document}
                    </p>
                    <p>
                        <span className="text-neutral-700 mr-2">
                            Número de documento:
                        </span>
                        {supplier.num_document}
                    </p>
                </div>
                <p>
                    <span className="text-neutral-700 mr-2">Dirección:</span>
                    {supplier.direction}
                </p>
                <p>
                    <span className="text-neutral-700 mr-2">Teléfono:</span>
                    {supplier.phone}
                </p>
                <p>
                    <span className="text-neutral-700 mr-2">
                        Correo eléctronico:
                    </span>
                    <a
                        href={`mailto:${supplier.email}`}
                        className="hover:underline"
                    >
                        {supplier.email}
                    </a>
                </p>
            </section>
            <section className="mt-3 p-2">
                <h2 className="text-xl text-neutral-900">
                    Historial de compras
                </h2>
            </section>
        </Authenticated>
    );
};

export default Show;
