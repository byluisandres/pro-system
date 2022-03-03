import React, { useState, useContext } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Breadcrumb from "@/Components/Breadcrumb";
import ActionsButtons from "@/Components/ActionsButtons";
import Content from "@/Container/Content";
import SelectSupplier from "@/Components/purchase/SelectSupplier";
import SelectProducts from "@/Components/purchase/SelectProducts";
import PurchaseSummary from "@/Components/purchase/PurchaseSummary";
import Total from "@/Components/purchase/Total";
import PurchaseContext from "@/modules/context/purchases/PurchaseContext";
import { Inertia } from "@inertiajs/inertia";

const Create = ({ auth, errors, suppliers, products }) => {
    const [purchase, setPurchase] = useState({
        num_purchase: "",
    });
    const { num_purchase } = purchase;
    const purchaseContext = useContext(PurchaseContext);
    const { supplier, products: productsContext, total } = purchaseContext;

    const handleChange = (e) => {
        setPurchase({
            ...purchase,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        purchase.supplier_id = supplier.id;
        purchase.products = productsContext;
        purchase.total = total;
        Inertia.post("/purchases", purchase);
        ///console.log(purchase);
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
                        <Content>1.- Número de compra</Content>
                        <input
                            name="num_purchase"
                            id="num_purchase"
                            type="text"
                            placeholder="Ejemplo: 0001"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={handleChange}
                            value={num_purchase}
                        />
                        {errors.num_purchase ? (
                            <p className="text-red-500">
                                {errors.num_purchase}
                            </p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <SelectSupplier suppliers={suppliers} />
                        {errors.supplier_id ? (
                            <p className="text-red-500">{errors.supplier_id}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <SelectProducts products={products} />
                        {errors.products ? (
                            <p className="text-red-500">{errors.products}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <PurchaseSummary />
                    </div>
                    <div className="mb-3">
                        <Total />
                    </div>
                    <ActionsButtons>Registrar Compra</ActionsButtons>
                </form>
            </section>
        </Authenticated>
    );
};

export default Create;
