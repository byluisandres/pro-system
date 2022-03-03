import React, { useReducer } from "react";
import PurchaseContext from "./PurchaseContext";
import PurchaseReducer from "./PurchaseReducer";

// Types
import {
    SELECT_PRODUCT,
    SELECT_SUPPLIER,
    AMOUNT_PRODUCT,
    UPDATE_TOTAL,
} from "./types";

const PurchaseState = ({ children }) => {
    const initialState = {
        supplier: [],
        products: [],
        total: 0,
    };
    const [state, dispatch] = useReducer(PurchaseReducer, initialState);

    // Modificar el proveedor
    const addSupplier = (supplier) => {
        dispatch({
            type: SELECT_SUPPLIER,
            payload: supplier,
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
        <PurchaseContext.Provider
            value={{
                supplier: state.supplier,
                products: state.products,
                total: state.total,
                addSupplier,
                addProducts,
                addAmountProduct,
                updateTotal,
            }}
        >
            {children}
        </PurchaseContext.Provider>
    );
};

export default PurchaseState;
