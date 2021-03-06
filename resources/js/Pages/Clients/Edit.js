import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Breadcrumb from "@/Components/Breadcrumb";
import ActionsButtons from "@/Components/ActionsButtons";
import { Inertia } from "@inertiajs/inertia";

const Edit = ({ auth, errors, client }) => {
    const [editClient, setEditClient] = useState({
        name: client.name,
        type_document: client.type_document,
        num_document: client.num_document,
        address: client.address,
        phone: client.phone,
        email: client.email,
    });

    const { name, type_document, num_document, address, phone, email } =
        editClient;
    const handleChange = (e) => {
        setEditClient({
            ...editClient,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/clients/${client.id}`, editClient);
    };

    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Edit" />
            <section>
                <Breadcrumb />
            </section>
            <section className="mt-3">
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Nombre</label>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            defaultValue={name}
                            onChange={handleChange}
                        />
                        {errors.name ? (
                            <p className="text-red-500">{errors.name}</p>
                        ) : null}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="mb-3">
                            <label htmlFor="type_document">
                                Tipo de documento
                            </label>
                            <input
                                name="type_document"
                                id="type_document"
                                type="text"
                                className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                defaultValue={type_document}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="num_document">
                                N??mero de documento
                            </label>
                            <input
                                name="num_document"
                                id="num_document"
                                type="text"
                                className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                defaultValue={num_document}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address">Direcci??n</label>
                        <input
                            name="address"
                            id="address"
                            type="text"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            defaultValue={address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Tel??fono</label>
                        <input
                            name="phone"
                            id="phone"
                            type="tel"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            defaultValue={phone}
                            onChange={handleChange}
                        />
                        {errors.phone ? (
                            <p className="text-red-500">{errors.phone}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Correo el??ctronico</label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            defaultValue={email}
                            onChange={handleChange}
                        />
                        {errors.email ? (
                            <p className="text-red-500">{errors.email}</p>
                        ) : null}
                    </div>
                    <ActionsButtons>Editar</ActionsButtons>
                </form>
            </section>
        </Authenticated>
    );
};

export default Edit;
