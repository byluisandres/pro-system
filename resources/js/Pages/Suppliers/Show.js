import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Breadcrumb from "@/Components/Breadcrumb";
import CardInfo from "@/Components/CardInfo";
import PurchaseHistory from "@/Components/PurchaseHistory";
import Paginate from "@/Components/Paginate";

const Show = ({ auth, errors, supplier, purchases, purchaseDetails }) => {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Show" />
            <section>
                <Breadcrumb />
            </section>
            <CardInfo data={supplier} />
            {purchases.length > 0 && purchaseDetails.length > 0 ? (
                <>
                    <section className="mt-3 p-2 border-b-2 border-b-neutral-100">
                        <h2 className="text-xl text-neutral-900">
                            Historial de compras
                        </h2>
                    </section>
                    <section className="mt-2 p-2">
                        <>
                            {purchases.map((purchase, index) => (
                                <PurchaseHistory
                                    key={index}
                                    purchase={purchase}
                                    purchaseDetails={purchaseDetails}
                                />
                            ))}
                        </>
                    </section>
                </>
            ) : null}
            {/* <section>
                <Paginate links={purchases.links} />
            </section> */}
        </Authenticated>
    );
};

export default Show;
