import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Breadcrumb from "@/Components/Breadcrumb";
import CardInfo from "@/Components/CardInfo";
import SaleHistory from "@/Components/sales/SaleHistory";

const Show = ({ auth, errors, sale, saleDetails }) => {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Show" />
            <section>
                <Breadcrumb />
            </section>
            <CardInfo data={sale.client} />
            <section className="mt-2">
                <SaleHistory sale={sale} saleDetails={saleDetails} />
            </section>
        </Authenticated>
    );
};

export default Show;
