export const formatCurrency = ({ number }) => {
    return Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
    }).format(number);
};
