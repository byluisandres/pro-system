import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import ActionsButtons from "@/Components/ActionsButtons";
import Breadcrumb from "@/Components/Breadcrumb";
import { Inertia } from "@inertiajs/inertia";

const Create = ({ auth, errors }) => {
    const [category, setCategory] = useState({
        name: "",
        description: "",
    });
    // values
    const { name, description } = category;

    // Guardar useState
    const handleChange = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/categories", category);
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
                            id="name"
                            name="name"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            type="text"
                            value={name}
                            onChange={handleChange}
                        />
                        {errors.name ? (
                            <p className="text-red-500">{errors.name}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description">Descripción</label>
                        <textarea
                            id="description"
                            name="description"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            value={description}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <ActionsButtons>Guardar</ActionsButtons>
                </form>
            </section>
        </Authenticated>
    );
};

export default Create;
