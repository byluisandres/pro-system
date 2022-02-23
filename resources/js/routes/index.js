import {
    Home,
    Folder,
    Collection,
    Cart,
    ChartPie,
    Truck,
    Identification,
    Users,
} from "../icons";

export const menuItems = [
    {
        path: "dashboard",
        route_name: "/dashboard",
        menu_title: "Inicio",
        icon: <Home className="text-neutral-300" />,
    },
    {
        path: "categories.index",
        route_name: "/categories",
        menu_title: "Categorias",
        icon: <Folder className="text-neutral-300" />,
    },
    {
        path: "products.index",
        route_name: "/products",
        menu_title: "Productos",
        icon: <Collection className="text-neutral-300" />,
    },
    {
        path: "purchases.index",
        route_name: "/purchases",
        menu_title: "Compras",
        icon: <Cart className="text-neutral-300" />,
    },
    {
        path: "suppliers.index",
        route_name: "/suppliers",
        menu_title: "Proveedores",
        icon: <Truck className="text-neutral-300" />,
    },
    {
        path: "sales.index",
        route_name: "/sales",
        menu_title: "Ventas",
        icon: <ChartPie className="text-neutral-300" />,
    },
    {
        path: "clients.index",
        route_name: "/clients",
        menu_title: "Clientes",
        icon: <Users className="text-neutral-300" />,
    },
];
