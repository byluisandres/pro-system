import React, { useState, useContext } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Breadcrumb from "@/Components/Breadcrumb";
import ActionsButtons from "@/Components/ActionsButtons";
import Content from "@/Container/Content";
import SelectClients from "@/Components/sales/SelectClients";
import SelectProducts from "@/Components/sales/SelectProducts";
import SaleContext from "@/modules/context/sales/SaleContext";
import { Inertia } from "@inertiajs/inertia";
import Total from "@/Components/sales/Total";
import SalesSumary from "@/Components/sales/SalesSumary";

const Create = ({ auth, errors, clients, products }) => {
    const [sale, setSale] = useState({
        num_sales: "",
    });
    const { num_sales } = sale;

    // Context
    const saleContext = useContext(SaleContext);
    const { client, products: productsContext, total } = saleContext;

    const handleChange = (e) => {
        setSale({
            ...sale,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sale.client_id = client.id;
        sale.products = productsContext;
        sale.total = total;
        Inertia.post("/sales", sale);
    };
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Create" />

            <section>
                <Breadcrumb />
            </section>

            <section className="mt-4">
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <Content>1.- Número de venta</Content>
                        <input
                            name="num_sales"
                            id="num_sales"
                            type="text"
                            placeholder="Ejemplo: 0001"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={handleChange}
                            value={num_sales}
                        />
                        {errors.num_sales ? (
                            <p className="text-red-500">{errors.num_sales}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <SelectClients clients={clients} />
                        {errors.client_id ? (
                            <p className="text-red-500">{errors.client_id}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <SelectProducts products={products} />
                        {errors.products ? (
                            <p className="text-red-500">{errors.products}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <SalesSumary />
                    </div>
                    <div className="mb-3">
                        <Total />
                    </div>
                    <ActionsButtons>Registrar Venta</ActionsButtons>
                </form>
            </section>
        </Authenticated>
    );
};

export default Create;
