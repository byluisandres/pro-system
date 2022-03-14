import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { ChartPie, ArrowRight, Cart } from "@/icons";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatMonth } from "@/utils/formatMonth";

export default function Dashboard({
    auth,
    errors,
    purchasesMonth,
    salesMonth,
}) {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Dashboard" />
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <article className="border-2 border-green-500 rounded-md  font-bold shadow-md shadow-green-500/50">
                    <div className="flex justify-between items-center p-3">
                        <div>
                            {salesMonth.length > 0 ? (
                                <p className="text-xl">
                                    {formatCurrency(salesMonth[0].total)}
                                    <span className="ml-3">
                                        ({formatMonth(salesMonth[0].MONTH)})
                                    </span>
                                </p>
                            ) : (
                                <p className="text-xl">
                                    Sin ventas completadas
                                </p>
                            )}
                            <p className="text-neutral-500">Ventas</p>
                        </div>
                        <div>
                            <ChartPie className="text-green-900 h-10 w-10" />
                        </div>
                    </div>
                    <div className="bg-green-500 p-3">
                        <Link
                            href={route("sales.index")}
                            className="hover:underline text-neutral-50 flex justify-between items-center"
                        >
                            Ver todas
                            <ArrowRight />
                        </Link>
                    </div>
                </article>
                <article className="border-2 border-red-500 rounded-md font-bold shadow-md shadow-red-500/50">
                    <div className="flex justify-between items-center p-3">
                        <div>
                            {purchasesMonth.length > 0 ? (
                                <p className="text-xl">
                                    {formatCurrency(purchasesMonth[0].total)}
                                    <span className="ml-3">
                                        ({formatMonth(purchasesMonth[0].MONTH)})
                                    </span>
                                </p>
                            ) : (
                                <p className="text-xl">
                                    Sin compras completadas
                                </p>
                            )}
                            <p className="text-neutral-500">Compras</p>
                        </div>
                        <div>
                            <Cart className="text-red-900 h-10 w-10" />
                        </div>
                    </div>
                    <div className="bg-red-500 p-3">
                        <Link
                            href={route("purchases.index")}
                            className="hover:underline text-neutral-50 flex justify-between items-center"
                        >
                            Ver todas
                            <ArrowRight />
                        </Link>
                    </div>
                </article>
            </section>
        </Authenticated>
    );
}
