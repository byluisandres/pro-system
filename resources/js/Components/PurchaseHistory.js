import React, { useState } from "react";
import { formatCurrency } from "@/utils/formatCurrency";
import { ChevronDown, ChevronUp } from "@/icons";

const PurchaseHistory = ({ purchase, purchaseDetails }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };
    return (
        <article className="border rounded-md mb-3">
            <div className="flex justify-between items-center bg-neutral-100 py-2">
                <h2>
                    Número de compra: <span>{purchase.num_purchase}</span>
                </h2>
                <button onClick={handleClick}>
                    {show ? <ChevronDown /> : <ChevronUp />}
                </button>
            </div>

            <div className={`${show ? "block" : "hidden"} `}>
                <div>
                    <p className="text-neutral-700">
                        Fecha de compra: <span>{purchase.date_purchase}</span>
                    </p>
                </div>
                <table className="min-w-full table-fixed ">
                    <thead>
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
                                Precio de Venta
                            </th>
                            <th
                                scope="col"
                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                            >
                                Cantidad
                            </th>
                            <th
                                scope="col"
                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                            >
                                Subtotal
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseDetails.map((detail, index) => (
                            <tr
                                className="border-b border-gray-200"
                                key={index}
                            >
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    <div className="relative">
                                        <img
                                            src={detail.image}
                                            alt="imágen producto"
                                            className="w-16 h-16 rounded-md"
                                        />
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    {detail.product}
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    {detail.category}
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    {formatCurrency(detail.sales_price)}
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    {detail.amount}
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    {formatCurrency(
                                        parseInt(detail.sales_price) *
                                            detail.amount
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td
                                className="text-right py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                                colSpan="6"
                            >
                                Total:
                                <span className="ml-3">
                                    {formatCurrency(purchase.total)}
                                </span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </article>
    );
};

export default PurchaseHistory;
