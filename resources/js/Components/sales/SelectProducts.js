import React, { useContext, useEffect, useState } from "react";
import Content from "@/Container/Content";
import Select from "react-select";
import SaleContext from "@/modules/context/sales/SaleContext";

const SelectProducts = ({ products }) => {
    const [selectProducts, setSelectProducts] = useState([]);

    // Utilizar context
    const saleContext = useContext(SaleContext);
    const { addProducts, updateTotal } = saleContext;

    useEffect(() => {
        addProducts(selectProducts);
        updateTotal();
    }, [selectProducts]);

    const handleChange = (product) => {
        setSelectProducts(product);
    };
    return (
        <>
            <Content>3.- Selecciona o busca los productos</Content>
            <Select
                isMulti
                options={products}
                className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                placeholder="Selecciona o busca los productos"
                onChange={(product) => handleChange(product)}
                getOptionValue={(products) => products.id}
                getOptionLabel={(products) =>
                    `${products.name} - ${products.stock} Disponibles`
                }
                noOptionsMessage={() => "No hay resultados"}
            />
        </>
    );
};

export default SelectProducts;
