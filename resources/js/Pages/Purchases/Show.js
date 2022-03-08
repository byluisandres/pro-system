import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Breadcrumb from "@/Components/Breadcrumb";
import CardInfo from "@/Components/CardInfo";
import PurchaseHistory from "@/Components/purchase/PurchaseHistory";

const Show = ({ auth, errors, purchase, purchaseDetails }) => {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Show" />
            <section>
                <Breadcrumb />
            </section>
            <CardInfo data={purchase.supplier} />
            <section className="mt-2">
                <PurchaseHistory
                    purchase={purchase}
                    purchaseDetails={purchaseDetails}
                />
            </section>
        </Authenticated>
    );
};

export default Show;
