import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import ActionsButtons from "@/Components/ActionsButtons";
import Breadcrumb from "@/Components/Breadcrumb";
import { Inertia } from "@inertiajs/inertia";

const Edit = ({ auth, errors, category }) => {
    const [editCategory, setEditCategory] = useState({
        name: category.name,
        description: category.description,
        status: category.status,
    });

    const { name, description, status } = editCategory;
    // Guardar useState
    const handleChange = (e) => {
        setEditCategory({
            ...editCategory,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/categories/${category.id}`, editCategory);
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
                            id="name"
                            name="name"
                            className={`w-full ${
                                errors.name
                                    ? "border-red-500"
                                    : "border-neutral-300"
                            }  focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm`}
                            type="text"
                            defaultValue={name}
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
                            defaultValue={description ? description : ""}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            defaultValue={status}
                            onChange={handleChange}
                        >
                            <option value="1">Activo</option>
                            <option value="0">Desactivo</option>
                        </select>
                    </div>

                    <ActionsButtons>Guardar</ActionsButtons>
                </form>
            </section>
        </Authenticated>
    );
};

export default Edit;
