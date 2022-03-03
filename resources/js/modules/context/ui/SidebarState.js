import React, { useReducer } from "react";
import SibebarContext from "./SidebarContext";
import SidebarReducer from "./SidebarReducer";

// Types
import { OPEN_CLOSE_SIDEBAR_SUCCESS } from "./types";

const SidebarState = ({ children }) => {
    const initialState = {
        isOpen: false,
    };
    const [state, dispatch] = useReducer(SidebarReducer, initialState);

    const openSidebarSuccess = (open) => {
        dispatch({
            type: OPEN_CLOSE_SIDEBAR_SUCCESS,
            payload: open,
        });
    };

    return (
        <SibebarContext.Provider
            value={{
                openSidebarSuccess,
                isOpen: state.isOpen,
            }}
        >
            {children}
        </SibebarContext.Provider>
    );
};

export default SidebarState;
