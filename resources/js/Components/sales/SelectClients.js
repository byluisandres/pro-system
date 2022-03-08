import React, { useContext, useEffect, useState } from "react";
import Content from "@/Container/Content";
import Select from "react-select";
import SaleContext from "@/modules/context/sales/SaleContext";

const SelectClient = ({ clients }) => {
    const [client, setClient] = useState([]);
    // Utilizar context
    const saleContext = useContext(SaleContext);
    const { addclient } = saleContext;

    useEffect(() => {
        addclient(client);
    }, [client]);

    const handleChange = (client) => {
        setClient(client);
    };

    return (
        <>
            <Content>2.- Selecciona o busca un cliente</Content>
            <Select
                options={clients}
                className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                placeholder="Selecciona o busca un cliente"
                onChange={(client) => handleChange(client)}
                getOptionValue={(clients) => clients.id}
                getOptionLabel={(clients) => clients.name}
                noOptionsMessage={() => "No hay resultados"}
            />
        </>
    );
};

export default SelectClient;
