import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import HeaderSection from "@/Components/HeaderSection";
import { CheckCircle, XCircle, Pencil, Trash } from "@/icons";
import { formatCurrency } from "@/utils/formatCurrency";
import Paginate from "@/Components/Paginate";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ auth, errors, products }) => {
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
                Inertia.delete(`/products/${id}`);
            }
        });
    };

    const handleClickState = (id, state) => {
        let currentState = {
            state: state,
        };
        Inertia.put(`/products/${id}/updatestate`, currentState);
    };
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Index" />
            <HeaderSection href={"products.create"} btntext="Agregar Producto">
                Listado de Productos
            </HeaderSection>
            <section className="mt-5 overflow-hidden">
                {products.data.length > 0 ? (
                    <table className="min-w-full table-fixed ">
                        <thead className="">
                            <tr className="border-b border-gray-700">
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                                >
                                    Imágen
                                </th>
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
                                    Categoría
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                                >
                                    Stock
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                                >
                                    Precio de Venta
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
                            {products.data.map((product, index) => (
                                <tr
                                    className="border-b border-gray-200"
                                    key={index}
                                >
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        <div className="relative">
                                            <img
                                                src={product.image}
                                                alt="imágen producto"
                                                className="w-16 h-16 rounded-md"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {product.name}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {product.category.name}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium  text-gray-900 whitespace-nowrap ">
                                        {product.stock <= 5 ? (
                                            <span className="bg-red-800 p-2 rounded-md text-white">
                                                {product.stock}
                                            </span>
                                        ) : product.stock <= 10 ? (
                                            <span className="bg-orange-700 p-2 rounded-md text-white ">
                                                {product.stock}
                                            </span>
                                        ) : (
                                            <span className="bg-green-800 p-2 rounded-md text-white">
                                                {product.stock}
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {formatCurrency(product.sales_price)}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        {product.status === 1 ? (
                                            <button
                                                className="p-2 shadow-md no-underline rounded-full bg-green-900 text-white font-sans"
                                                title="Activo"
                                                onClick={() =>
                                                    handleClickState(
                                                        product.id,
                                                        product.status
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
                                                        product.id,
                                                        product.status
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
                                                href={route("products.edit", {
                                                    product: product.id,
                                                })}
                                                className="bg-cyan-900 hover:bg-cyan-800 p-2 rounded-md font-semibold flex"
                                            >
                                                <Pencil className="text-white" />
                                            </Link>

                                            <button
                                                className="bg-red-900 hover:bg-red-800 p-2 rounded-md font-semibold flex"
                                                onClick={() =>
                                                    handleClick(product.id)
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
                        Aún no hay productos
                    </p>
                )}
            </section>
            <section>
                <Paginate links={products.links} />
            </section>
        </Authenticated>
    );
};

export default Index;
