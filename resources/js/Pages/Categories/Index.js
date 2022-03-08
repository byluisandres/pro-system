import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { CheckCircle, Pencil, Trash, XCircle } from "@/icons";
import Paginate from "@/Components/Paginate";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";
import HeaderSection from "@/Components/HeaderSection";
import { toastMessage } from "@/utils/ToastMessage";

const Index = ({ auth, errors, categories }) => {
    const handleClick = (id) => {
        Swal.fire({
            title: "¿Estás seguro de querer eliminarlo?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#14532D",
            cancelButtonColor: "#7F1D1D",
            confirmButtonText: "Sí,eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(`/categories/${id}`);
                toastMessage("top-end", "success", "Categoría borrada");
            }
        });
    };
    const handleClickState = (id, state) => {
        let currentState = {
            state: state,
        };
        Inertia.put(`/categories/${id}/updatestate`, currentState);
    };
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Index" />
            <HeaderSection
                href={"categories.create"}
                btntext="Agregar Categoría"
            >
                Listado de Categorías
            </HeaderSection>

            <section className="mt-5 overflow-hidden">
                {categories.data.length > 0 ? (
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
                                        {category.status === 1 ? (
                                            <button
                                                className="p-2 shadow-md no-underline rounded-full bg-green-900 text-white font-sans"
                                                title="Activo"
                                                onClick={() =>
                                                    handleClickState(
                                                        category.id,
                                                        category.status
                                                    )
                                                }
                                            >
                                                <CheckCircle className="text-white" />
                                            </button>
                                        ) : (
                                            <button
                                                className="p-2 shadow-md no-underline rounded-full bg-red-900 text-white font-sans"
                                                title="Desactivo"
                                                onClick={() =>
                                                    handleClickState(
                                                        category.id,
                                                        category.status
                                                    )
                                                }
                                            >
                                                <XCircle className="text-white" />
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        <div className="flex gap-2">
                                            <Link
                                                href={route("categories.edit", {
                                                    category: category.id,
                                                })}
                                                className="bg-cyan-900 hover:bg-cyan-800 p-2 rounded-md font-semibold flex"
                                            >
                                                <Pencil className="text-white" />
                                            </Link>

                                            <button
                                                className="bg-red-900 hover:bg-red-800 p-2 rounded-md font-semibold flex"
                                                onClick={() =>
                                                    handleClick(category.id)
                                                }
                                            >
                                                <Trash className="text-white" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-xl text-center text-neutral-500">
                        Aún no hay categorías
                    </p>
                )}
            </section>
            <section className="mt-5">
                <Paginate links={categories.links} />
            </section>
        </Authenticated>
    );
};

export default Index;
