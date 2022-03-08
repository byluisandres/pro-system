import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import HeaderSection from "@/Components/HeaderSection";
import { Pencil, Trash, Eye, File } from "@/icons";
import { formatCurrency } from "@/utils/formatCurrency";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";
import { toastMessage } from "@/utils/ToastMessage";
import Paginate from "@/Components/Paginate";

const Index = ({ auth, errors, sales }) => {
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
                Inertia.delete(`/sales/${id}`);
                toastMessage("top-end", "success", "Venta borrada");
            }
        });
    };

    const handleChange = (state, id) => {
        let currentState = {
            state: state,
        };
        Inertia.put(`/sales/${id}/updatestate`, currentState);
    };
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Index" />
            <HeaderSection href={"sales.create"} btntext="Agregar Venta">
                Listado de ventas
            </HeaderSection>
            <section className="mt-5 overflow-hidden">
                {sales.data.length > 0 ? (
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
                                    Número de venta
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-neutral-900 uppercase"
                                >
                                    Fecha de venta
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
                                    Cliente
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
                            {sales.data.map((sale, index) => (
                                <tr
                                    className="border-b border-neutral-200"
                                    key={index}
                                >
                                    <td className="py-4 px-6 text-sm font-medium text-neutral-900 whitespace-nowrap ">
                                        <Link
                                            href={route("sales.show", {
                                                sale: sale.id,
                                            })}
                                            className="bg-yellow-900
                                            hover:bg-yellow-800 p-2 rounded-md font-semibold
                                            flex justify-between items-center w-10 h-10"
                                            title="Ver"
                                        >
                                            <Eye className="text-white" />
                                        </Link>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-neutral-900 whitespace-nowrap ">
                                        <Link
                                            href={route("sales.show", {
                                                sale: sale.id,
                                            })}
                                            className="hover:underline"
                                            title="Ver"
                                        >
                                            <span
                                                className={`before:block before:absolute before:-inset-1 before:-skew-y-2
                                            before:${
                                                sale.status === "PENDIENTE"
                                                    ? "bg-yellow-500"
                                                    : sale.status ===
                                                      "COMPLETADO"
                                                    ? "bg-green-500"
                                                    : "bg-red-500"
                                            } relative inline-block`}
                                            >
                                                <span className="relative text-white">
                                                    {sale.num_sales}
                                                </span>
                                            </span>
                                        </Link>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-neutral-900 whitespace-nowrap ">
                                        {sale.date_sales}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-neutral-900 whitespace-nowrap ">
                                        {formatCurrency(sale.total)}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-neutral-900 whitespace-nowrap ">
                                        {sale.client.name}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-neutral-900 whitespace-nowrap ">
                                        <select
                                            defaultValue={sale.status}
                                            className="appearance-none block w-full px-3 py-1.5 font-normal text-neutral-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-neutral-300 rounded transition
      ease-in-out m-0 focus:text-neutral-700 focus:bg-white focus:border-neutral-600 focus:outline-none"
                                            onChange={(e) =>
                                                handleChange(
                                                    e.target.value,
                                                    sale.id
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
                                                href={route("sales.edit", {
                                                    sale: sale.id,
                                                })}
                                                className="bg-cyan-900 hover:bg-cyan-800 p-2 rounded-md font-semibold flex"
                                                title="Editar"
                                            >
                                                <Pencil className="text-white" />
                                            </Link> */}

                                            <a
                                                href={route("sale.pdf", [
                                                    sale.id,
                                                ])}
                                                target="_blank"
                                                className="bg-red-900 hover:bg-red-800 p-2 rounded-md font-semibold flex"
                                                title="Obtener pdf"
                                            >
                                                <File className="text-white" />
                                            </a>
                                            <button
                                                className="bg-red-900 hover:bg-red-800 p-2 rounded-md font-semibold flex"
                                                onClick={() =>
                                                    handleClick(sale.id)
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
                        Aún no hay ventas
                    </p>
                )}
            </section>
            <section>
                <Paginate links={sales.links} />
            </section>
        </Authenticated>
    );
};

export default Index;
