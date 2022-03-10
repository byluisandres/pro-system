import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import HeaderSection from "@/Components/HeaderSection";
import Paginate from "@/Components/Paginate";
import { Pencil, Trash, Eye } from "@/icons";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ auth, errors, clients }) => {
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
                Inertia.delete(`/clients/${id}`);
            }
        });
    };
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Index" />
            <HeaderSection href={"clients.create"} btntext="Agregar Cliente">
                Listado de Clientes
            </HeaderSection>
            <section className="mt-5 overflow-hidden">
                {clients.data.length > 0 ? (
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
                            {clients.data.map((client, index) => (
                                <tr
                                    className="border-b border-gray-200 relative"
                                    key={index}
                                >
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        <Link
                                            href={route("clients.show", {
                                                client: client.id,
                                            })}
                                            className="hover:underline"
                                        >
                                            {client.name}
                                        </Link>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {client.phone}
                                    </td>

                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        <a
                                            href={`mailto:${client.email}`}
                                            className="hover:underline"
                                        >
                                            {client.email}
                                        </a>
                                    </td>

                                    <td>
                                        <div className="flex gap-2">
                                            <Link
                                                href={route("clients.edit", {
                                                    client: client.id,
                                                })}
                                                className="bg-cyan-900 hover:bg-cyan-800 p-2 rounded-md font-semibold flex"
                                            >
                                                <Pencil className="text-white" />
                                            </Link>
                                            <Link
                                                href={route("clients.show", {
                                                    client: client.id,
                                                })}
                                                className="bg-yellow-900 hover:bg-yellow-800 p-2 rounded-md font-semibold flex"
                                            >
                                                <Eye className="text-white" />
                                            </Link>
                                            <button
                                                className="bg-red-900 hover:bg-red-800 p-2 rounded-md font-semibold flex"
                                                onClick={() =>
                                                    handleClick(client.id)
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
                        Aún no hay clientes
                    </p>
                )}
            </section>
            <section>
                <Paginate links={clients.links} />
            </section>
        </Authenticated>
    );
};

export default Index;
