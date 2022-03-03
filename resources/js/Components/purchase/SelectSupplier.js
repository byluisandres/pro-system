import React, { useContext, useEffect, useState } from "react";
import Content from "@/Container/Content";
import Select from "react-select";
import PurchaseContext from "@/modules/context/purchases/PurchaseContext";

const SelectSupplier = ({ suppliers }) => {
    const [supplier, setSupplier] = useState([]);
    // Utilizar context
    const purchaseContext = useContext(PurchaseContext);
    const { addSupplier } = purchaseContext;

    useEffect(() => {
        addSupplier(supplier);
    }, [supplier]);

    //console.log(purchaseContext);
    const handleChange = (supplier) => {
        setSupplier(supplier);
    };

    return (
        <>
            <Content>2.- Selecciona o busca un proveedor</Content>
            <Select
                options={suppliers}
                className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                placeholder="Selecciona o busca un proveedor"
                onChange={(supplier) => handleChange(supplier)}
                getOptionValue={(suppliers) => suppliers.id}
                getOptionLabel={(suppliers) => suppliers.name}
                noOptionsMessage={() => "No hay resultados"}
            />
        </>
    );
};

export default SelectSupplier;
