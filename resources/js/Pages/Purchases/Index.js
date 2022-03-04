import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import HeaderSection from "@/Components/HeaderSection";
import { Pencil, Trash, Eye, File } from "@/icons";
import Paginate from "@/Components/Paginate";
import { formatCurrency } from "@/utils/formatCurrency";

const Index = ({ auth, errors, purchases }) => {
    const handleClick = () => {};

    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Index" />
            <HeaderSection href={"purchases.create"} btntext="Agregar Compra">
                Listado de compras
            </HeaderSection>
            <section className="mt-5 overflow-hidden">
                {purchases.data.length > 0 ? (
                    <table className="min-w-full table-fixed ">
                        <thead className="">
                            <tr className="border-b border-gray-700">
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                                >
                                    Número de compra
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                                >
                                    Fecha de compra
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                                >
                                    Total
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                                >
                                    Status
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                                >
                                    Proveedor
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchases.data.map((purchase, index) => (
                                <tr
                                    className="border-b border-gray-200"
                                    key={index}
                                >
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {purchase.num_purchase}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {purchase.date_purchase}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {formatCurrency(purchase.total)}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {purchase.status}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {purchase.supplier.name}
                                    </td>
                                    <td>
                                        <div className="flex gap-2">
                                            <Link
                                                href={route("purchases.edit", {
                                                    purchase: purchase.id,
                                                })}
                                                className="bg-cyan-900 hover:bg-cyan-800 p-2 rounded-md font-semibold flex"
                                                title="Editar"
                                            >
                                                <Pencil className="text-white" />
                                            </Link>
                                            <Link
                                                href={route("purchases.show", {
                                                    purchase: purchase.id,
                                                })}
                                                className="bg-yellow-900 hover:bg-yellow-800 p-2 rounded-md font-semibold flex"
                                                title="Ver"
                                            >
                                                <Eye className="text-white" />
                                            </Link>
                                            <button
                                                className="bg-red-900 hover:bg-red-800 p-2 rounded-md font-semibold flex"
                                                title="Obtener pdf"
                                            >
                                                <File className="text-white" />
                                            </button>
                                            <button
                                                className="bg-red-900 hover:bg-red-800 p-2 rounded-md font-semibold flex"
                                                onClick={() =>
                                                    handleClick(purchase.id)
                                                }
                                                title="Borrar"
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
                        Aún no hay compras
                    </p>
                )}
            </section>
            <section>
                <Paginate links={purchases.links} />
            </section>
        </Authenticated>
    );
};

export default Index;
