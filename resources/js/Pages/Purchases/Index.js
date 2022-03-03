import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import HeaderSection from "@/Components/HeaderSection";

const Index = ({ auth, errors }) => {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Index" />
            <HeaderSection href={"purchases.create"} btntext="Agregar Compra">
                Listado de compras
            </HeaderSection>
        </Authenticated>
    );
};

export default Index;
