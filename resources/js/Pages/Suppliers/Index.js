import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import HeaderSection from "@/Components/HeaderSection";
import Paginate from "@/Components/Paginate";
import { Pencil, Trash, Eye } from "@/icons";

const Index = ({ auth, errors, suppliers }) => {
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
                                        {supplier.name}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {supplier.phone}
                                    </td>

                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {supplier.email}
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
