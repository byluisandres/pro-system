// Types
import { OPEN_CLOSE_SIDEBAR_SUCCESS } from "./types";

export default (state, action) => {
    switch (action.type) {
        case OPEN_CLOSE_SIDEBAR_SUCCESS:
            return {
                ...state,
                isOpen: action.payload,
            };

        default:
            return state;
    }
};
