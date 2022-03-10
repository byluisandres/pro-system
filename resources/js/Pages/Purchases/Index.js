import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import HeaderSection from "@/Components/HeaderSection";
import { Pencil, Trash, Eye, Pdf } from "@/icons";
import Paginate from "@/Components/Paginate";
import { formatCurrency } from "@/utils/formatCurrency";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ auth, errors, purchases }) => {
    console.log(purchases);
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
                Inertia.delete(`/purchases/${id}`);
            }
        });
    };

    const handleChange = (state, id) => {
        let currentState = {
            state: state,
        };
        Inertia.put(`/purchases/${id}/updatestate`, currentState);
    };

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
                            <tr className="border-b border-neutral-700">
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-neutral-900 uppercase"
                                >
                                    Ver detalle
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-neutral-900 uppercase"
                                >
                                    Número de compra
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-neutral-900 uppercase"
                                >
                                    Fecha de compra
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-neutral-900 uppercase"
                                >
                                    Total
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-neutral-900 uppercase"
                                >
                                    Proveedor
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-neutral-900 uppercase"
                                >
                                    ESTADO
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchases.data.map((purchase, index) => (
                                <tr
                                    className="border-b border-neutral-200"
                                    key={index}
                                >
                                    <td className="py-4 px-6 text-sm font-medium text-neutral-900 whitespace-nowrap ">
                                        <div className="flex items-center gap-4">
                                            <Link
                                                href={route("purchases.show", {
                                                    purchase: purchase.id,
                                                })}
                                                className="bg-yellow-900
                                            hover:bg-yellow-800 p-2 rounded-md font-semibold flex"
                                                title="Ver"
                                            >
                                                <Eye className="text-white" />
                                            </Link>
                                            <a
                                                href={route("purchase.pdf", [
                                                    purchase.id,
                                                ])}
                                                target="_blank"
                                                className="hover:shadow-md border-2 border-red-900 p-2 rounded-md font-semibold flex"
                                                title="Obtener pdf"
                                            >
                                                <Pdf className="text-white" />
                                            </a>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-neutral-900 whitespace-nowrap ">
                                        <Link
                                            href={route("purchases.show", {
                                                purchase: purchase.id,
                                            })}
                                            className="hover:underline"
                                            title="Ver"
                                        >
                                            <span
                                                className={`p-1
                                            ${
                                                purchase.status === "PENDIENTE"
                                                    ? "bg-yellow-500"
                                                    : purchase.status ===
                                                      "COMPLETADO"
                                                    ? "bg-green-500"
                                                    : "bg-red-500"
                                            }`}
                                            >
                                                <span className="relative text-white">
                                                    {purchase.num_purchase}
                                                </span>
                                            </span>
                                        </Link>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-neutral-900 whitespace-nowrap ">
                                        {purchase.date_purchase}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-neutral-900 whitespace-nowrap ">
                                        {formatCurrency(purchase.total)}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-neutral-900 whitespace-nowrap ">
                                        {purchase.supplier.name}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-neutral-900 whitespace-nowrap ">
                                        <select
                                            defaultValue={purchase.status}
                                            className="appearance-none block w-full px-3 py-1.5 font-normal text-neutral-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-neutral-300 rounded transition
      ease-in-out m-0 focus:text-neutral-700 focus:bg-white focus:border-neutral-600 focus:outline-none"
                                            onChange={(e) =>
                                                handleChange(
                                                    e.target.value,
                                                    purchase.id
                                                )
                                            }
                                        >
                                            <option value="COMPLETADO">
                                                COMPLETADO
                                            </option>
                                            <option value="PENDIENTE">
                                                PENDIENTE
                                            </option>
                                            <option value="CANCELADO">
                                                CANCELADO
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <div className="flex gap-2">
                                            {/* <Link
                                                href={route("purchases.edit", {
                                                    purchase: purchase.id,
                                                })}
                                                className="bg-cyan-900 hover:bg-cyan-800 p-2 rounded-md font-semibold flex"
                                                title="Editar"
                                            >
                                                <Pencil className="text-white" />
                                            </Link> */}

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
