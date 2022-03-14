import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { ChartPie, ArrowRight, Cart, ChevronDown, ChevronUp } from "@/icons";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatMonth } from "@/utils/formatMonth";
import BarChart from "@/Components/BarChart";
import BarChartHorizontal from "@/Components/BarChartHorizontal";

export default function Dashboard({
    auth,
    errors,
    purchasesMonth,
    salesMonth,
}) {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };
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
            <section className="mt-4 flex justify-end items-center">
                <button
                    className="underline flex gap-1"
                    onClick={handleClick}
                >
                    Ver gráficas {show ? <ChevronDown /> : <ChevronUp />}
                </button>
            </section>
            {show && (
                <section className="mt-4">
                    <article className="border shadow-md p-2">
                        <BarChart />
                    </article>
                    <article className="border shadow-md mt-4 p-2">
                        <BarChartHorizontal />
                    </article>
                </section>
            )}
        </Authenticated>
    );
}
