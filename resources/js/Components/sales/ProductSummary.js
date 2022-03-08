import React, { useContext, useEffect, useState } from "react";
import { formatCurrency } from "@/utils/formatCurrency";
import SaleContext from "@/modules/context/sales/SaleContext";
import ImagePreview from "../ImagePreview";
import { toastMessage } from "@/utils/ToastMessage";

const ProductSummary = ({ product }) => {
    const [amount, setAmount] = useState(1);
    const { name, sales_price, image, stock } = product;
    const saleContext = useContext(SaleContext);
    const { addAmountProduct, updateTotal } = saleContext;
    useEffect(() => {
        updateAmount();
        updateTotal();
    }, [amount]);

    const updateAmount = () => {
        if (amount <= 0) {
            setAmount(1);
            toastMessage(
                "top-end",
                "warning",
                "La cantidad tiene que ser mayor que cero"
            );
        } else if (amount > stock) {
            setAmount(1);
            toastMessage(
                "top-end",
                "warning",
                "El producto excede el stock disponible"
            );
        } else {
            // crear un nuevo objeto con la cantidad
            const newProduct = { ...product, amount: Number(amount) };

            addAmountProduct(newProduct);
        }
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
