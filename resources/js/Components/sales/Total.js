import React, { useContext, useEffect } from "react";
import { formatCurrency } from "@/utils/formatCurrency";
import SaleContext from "@/modules/context/sales/SaleContext";

const Total = () => {
    const saleContext = useContext(SaleContext);
    const { total, updateTotal } = saleContext;
    useEffect(() => {
        updateTotal();
    }, [total]);
    return (
        <div className="flex justify-between items-center bg-neutral-50 p-2">
            <span className="font-bold text-lg">Total</span>
            <p className="font-bold text-lg">{formatCurrency(total)}</p>
        </div>
    );
};

export default Total;
