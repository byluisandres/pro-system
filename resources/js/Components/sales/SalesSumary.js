import React, { useContext } from "react";
import Content from "@/Container/Content";
import SaleContext from "@/modules/context/sales/SaleContext";
import ProductSummary from "./ProductSummary";
const SalesSumary = () => {
    // Utilizar context
    const saleContext = useContext(SaleContext);
    const { products } = saleContext;

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

export default SalesSumary;
