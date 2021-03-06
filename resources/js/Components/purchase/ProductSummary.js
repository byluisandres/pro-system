import React, { useContext, useEffect, useState } from "react";
import { formatCurrency } from "@/utils/formatCurrency";
import PurchaseContext from "@/modules/context/purchases/PurchaseContext";
import ImagePreview from "../ImagePreview";

const ProductSummary = ({ product }) => {
    const [amount, setAmount] = useState(1);
    const { name, sales_price, image, stock } = product;
    const purchaseContext = useContext(PurchaseContext);
    const { addAmountProduct, updateTotal } = purchaseContext;
    useEffect(() => {
        updateAmount();
        updateTotal();
    }, [amount]);

    const updateAmount = () => {
        // crear un nuevo objeto con la cantidad
        const newProduct = { ...product, amount: Number(amount) };

        addAmountProduct(newProduct);
    };
    return (
        <div className="md:flex md:justify-between md:items-center mb-3 border-b-2 border-b-neutral-100 py-2">
            <div className="md:w-2/4 mb-2 md:mb-0 mr-3">
                <div className="flex items-center gap-3">
                    <ImagePreview src={image} className="h-12" />
                    <div>
                        <p className="text-sm">{name}</p>
                        <p className="text-sm">{formatCurrency(sales_price)}</p>
                    </div>
                </div>
            </div>
            <input
                type="number"
                placeholder="Cantidad"
                className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
            />
        </div>
    );
};

export default ProductSummary;
