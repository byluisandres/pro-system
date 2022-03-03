require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import PurchaseState from "./modules/context/purchases/PurchaseState";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(
            <PurchaseState>
                <App {...props} />
            </PurchaseState>,
            el
        );
    },
});

InertiaProgress.init({ color: "#4B5563" });
