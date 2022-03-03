import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import HeaderSection from "@/Components/HeaderSection";
import Paginate from "@/Components/Paginate";
import { Pencil, Trash, Eye } from "@/icons";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";
import { toastMessage } from "@/utils/ToastMessage";


const Index = ({ auth, errors, suppliers }) => {
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
                Inertia.delete(`/suppliers/${id}`);
                toastMessage("top-end", "success", "Proveedor borrado");
            }
        });
    };
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Index" />
            <HeaderSection
                href={"suppliers.create"}
                btntext="Agregar Proveedor"
            >
                Listado de Proveedores
            </HeaderSection>
            <section className="mt-5 overflow-hidden">
                {suppliers.data.length > 0 ? (
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
                                    Teléfono
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                                >
                                    Correo eléctronico
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.data.map((supplier, index) => (
                                <tr
                                    className="border-b border-gray-200 relative"
                                    key={index}
                                >
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        <Link
                                            href={route("suppliers.show", {
                                                supplier: supplier.id,
                                            })}
                                            className="hover:underline"
                                        >
                                            {supplier.name}
                                        </Link>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {supplier.phone}
                                    </td>

                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        <a
                                            href={`mailto:${supplier.email}`}
                                            className="hover:underline"
                                        >
                                            {supplier.email}
                                        </a>
                                    </td>

                                    <td>
                                        <div className="flex gap-2">
                                            <Link
                                                href={route("suppliers.edit", {
                                                    supplier: supplier.id,
                                                })}
                                                className="bg-cyan-900 hover:bg-cyan-800 p-2 rounded-md font-semibold flex"
                                            >
                                                <Pencil className="text-white" />
                                            </Link>
                                            <Link
                                                href={route("suppliers.show", {
                                                    supplier: supplier.id,
                                                })}
                                                className="bg-yellow-900 hover:bg-yellow-800 p-2 rounded-md font-semibold flex"
                                            >
                                                <Eye className="text-white" />
                                            </Link>
                                            <button
                                                className="bg-red-900 hover:bg-red-800 p-2 rounded-md font-semibold flex"
                                                onClick={() =>
                                                    handleClick(supplier.id)
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
                        Aún no hay proveedores
                    </p>
                )}
            </section>
            <section>
                <Paginate links={suppliers.links} />
            </section>
        </Authenticated>
    );
};

export default Index;
