import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Breadcrumb from "@/Components/Breadcrumb";
import ActionsButtons from "@/Components/ActionsButtons";
import { Inertia } from "@inertiajs/inertia";

const Create = ({ auth, errors }) => {
    const [supplier, setSupplier] = useState({
        name: "",
        type_document: "",
        num_document: "",
        address: "",
        phone: "",
        email: "",
    });

    const { name, type_document, num_document, address, phone, email } =
        supplier;
    const handleChange = (e) => {
        setSupplier({
            ...supplier,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/suppliers", supplier);
    };
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Create" />
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
                            value={name}
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
                                value={type_document}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="num_document">
                                Número de documento
                            </label>
                            <input
                                name="num_document"
                                id="num_document"
                                type="text"
                                className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                value={num_document}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address">Dirección</label>
                        <input
                            name="address"
                            id="address"
                            type="text"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            value={address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            name="phone"
                            id="phone"
                            type="tel"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            value={phone}
                            onChange={handleChange}
                        />
                        {errors.phone ? (
                            <p className="text-red-500">{errors.phone}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Correo eléctronico</label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            value={email}
                            onChange={handleChange}
                        />
                        {errors.email ? (
                            <p className="text-red-500">{errors.email}</p>
                        ) : null}
                    </div>
                    <ActionsButtons>Agregar</ActionsButtons>
                </form>
            </section>
        </Authenticated>
    );
};

export default Create;
