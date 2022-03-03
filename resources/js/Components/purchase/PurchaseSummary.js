import React, { useContext } from "react";
import Content from "@/Container/Content";
import PurchaseContext from "@/modules/context/purchases/PurchaseContext";
import ProductSummary from "./ProductSummary";

const PurchaseSummary = () => {
    // Utilizar context
    const purchaseContext = useContext(PurchaseContext);
    const { products } = purchaseContext;
    return (
        <>
            {products.length > 0 ? (
                <>
                    <Content>4.- Ajusta las cantidades del producto</Content>
                    {products.map((product) => (
                        <ProductSummary key={product.id} product={product} />
                    ))}
                </>
            ) : null}
        </>
    );
};

export default PurchaseSummary;
