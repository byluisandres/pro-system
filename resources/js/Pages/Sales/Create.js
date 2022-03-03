import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Breadcrumb from "@/Components/Breadcrumb";
import ActionsButtons from "@/Components/ActionsButtons";
import Content from "@/Container/Content";

const Create = ({ auth, errors, suppliers }) => {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Create" />

            <section>
                <Breadcrumb />
            </section>
            <section className="mt-4">
                <form className="" method="POST">
                    <div className="mb-3">
                        <Content>1.- Asigna un cliente al pedido</Content>
                        <select className="form-select">
                            <option>ss</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <Content>2.- Selecciona o busca los productos</Content>
                        <select className="form-select">
                            <option>ss</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <Content>
                            3.- Ajusta las cantidades del producto
                        </Content>
                        <div className="grid grid-col-2 gap-4">
                            <div>
                                <span>nombre producto</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="flex justify-between items-center bg-gray-50 p-2">
                            <span className="font-bold text-lg">Total</span>
                            <p className="font-bold text-lg">
                                2000<span>€</span>
                            </p>
                        </div>
                    </div>
                    <ActionsButtons>Registrar Compra</ActionsButtons>
                </form>
            </section>
        </Authenticated>
    );
};

export default Create;
