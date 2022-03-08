import React, { useReducer } from "react";
import SaleContext from "./SaleContext";
import SaleReducer from "./SaleReducer";

// Types
import {
    SELECT_PRODUCT,
    SELECT_CLIENT,
    AMOUNT_PRODUCT,
    UPDATE_TOTAL,
} from "./types";

const SaleState = ({ children }) => {
    const initialState = {
        client: [],
        products: [],
        total: 0,
    };
    const [state, dispatch] = useReducer(SaleReducer, initialState);

    // Modificar el cliente
    const addclient = (client) => {
        dispatch({
            type: SELECT_CLIENT,
            payload: client,
        });
    };

    // Modificar los productos
    const addProducts = (productSelect) => {
        let newState;
        if (state.products.length > 0) {
            newState = productSelect.map((product) => {
                const newProduct = state.products.find(
                    (productState) => productState.id === product.id
                );
                return { ...product, ...newProduct };
            });
        } else {
            newState = productSelect;
        }
        dispatch({
            type: SELECT_PRODUCT,
            payload: newState,
        });
    };

    // Modifica la cantidad de productos
    const addAmountProduct = (newProduct) => {
        dispatch({
            type: AMOUNT_PRODUCT,
            payload: newProduct,
        });
    };

    // actualizar total
    const updateTotal = () => {
        dispatch({
            type: UPDATE_TOTAL,
        });
    };
    return (
        <SaleContext.Provider
            value={{
                client: state.client,
                products: state.products,
                total: state.total,
                addclient,
                addProducts,
                addAmountProduct,
                updateTotal,
            }}
        >
            {children}
        </SaleContext.Provider>
    );
};

export default SaleState;
