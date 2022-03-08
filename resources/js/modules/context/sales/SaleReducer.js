// Types
import {
    SELECT_PRODUCT,
    SELECT_CLIENT,
    AMOUNT_PRODUCT,
    UPDATE_TOTAL,
} from "./types";

export default (state, action) => {
    switch (action.type) {
        case SELECT_CLIENT:
            return {
                ...state,
                client: action.payload,
            };

        case SELECT_PRODUCT:
            return {
                ...state,
                products: action.payload,
            };
        case AMOUNT_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? (product = action.payload)
                        : product
                ),
            };

        case UPDATE_TOTAL:
            return {
                ...state,
                total: state.products.reduce(
                    (accumulator, item) =>
                        (accumulator +=
                            parseFloat(item.sales_price) * item.amount),
                    0
                ),
            };
        default:
            return state;
    }
};
