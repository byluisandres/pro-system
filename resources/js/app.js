require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import PurchaseState from "./modules/context/purchases/PurchaseState";
import SidebarState from "./modules/context/ui/SidebarState";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(
            <PurchaseState>
                <SidebarState>
                    <App {...props} />
                </SidebarState>
            </PurchaseState>,
            el
        );
    },
});

InertiaProgress.init({ color: "#4B5563" });
