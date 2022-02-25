import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { CheckCircle, Pencil, Plus, Trash, XCircle } from "@/icons";
import Paginate from "@/Components/Paginate";

const Index = ({ auth, errors, categories }) => {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Index" />
            <section className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">
                    Listado de Categorías
                </h1>
                <Link
                    href={route("categories.create")}
                    className="bg-emerald-900 hover:bg-emerald-800 text-white p-2 rounded-md font-semibold flex justify-between items-center"
                >
                    <Plus />
                    Agregar Categorías
                </Link>
            </section>
            <section className="mt-5">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <select
                            className="w-full border-gray-300 focus:border-indigo-300 focus:ring
                        focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        >
                            <option>-- Categoría --</option>
                            <option>dfsdf</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                        <form method="POST">
                            <div className="flex justify-between items-center">
                                <input
                                    className="w-11/12 border-gray-300 focus:border-indigo-300
                                 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    id=""
                                    type="text"
                                    placeholder="Buscar"
                                />
                                <button
                                    type="submit"
                                    className="bg-green-800 text-white rounded-md p-2 ml-3"
                                >
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="mt-5 overflow-hidden">
                <table className="min-w-full table-fixed ">
                    <thead className="">
                        <tr className="border-b border-gray-700">
                            <th
                                scope="col"
                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                            >
                                Nombre
                            </th>
                            <th
                                scope="col"
                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                            >
                                Descripción
                            </th>
                            <th
                                scope="col"
                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                            >
                                Estado
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.data.map((category, index) => (
                            <tr
                                className="border-b border-gray-200"
                                key={index}
                            >
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    {category.name}
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    {category.description}
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    {category.status === 1 ? (
                                        <button
                                            className="p-2 shadow-md no-underline rounded-full bg-green-900 text-white font-sans"
                                            title="Activo"
                                        >
                                            <CheckCircle className="text-white" />
                                        </button>
                                    ) : (
                                        <button
                                            className="p-2 shadow-md no-underline rounded-full bg-red-900 text-white font-sans"
                                            title="Desactivo"
                                        >
                                            <XCircle className="text-white" />
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <div className="flex gap-2">
                                        <Link
                                            href={route(
                                                "categories.edit",
                                                category.id
                                            )}
                                            className="bg-cyan-900 hover:bg-cyan-800 p-2 rounded-md font-semibold flex"
                                        >
                                            <Pencil className="text-white" />
                                        </Link>

                                        <button className="bg-red-900 hover:bg-red-800 p-2 rounded-md font-semibold flex ">
                                            <Trash className="text-white" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section className="mt-5">
                <Paginate links={categories.links} />
            </section>
        </Authenticated>
    );
};

export default Index;
