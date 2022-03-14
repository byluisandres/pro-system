export const formatMonth = (m) => {
    let month;
    switch (m) {
        case 1:
            month = "ENERO";
            break;
        case 2:
            month = "FEBRERO";
            break;
        case 3:
            month = "MARZO";
            break;
        case 4:
            month = "ABRIL";
            break;
        case 5:
            month = "MAYO";
            break;
        case 6:
            month = "JUNIO";
            break;
        case 7:
            month = "JULIO";
            break;
        case 8:
            month = "AGOSTO";
            break;
        case 9:
            month = "SEPTIEMBRE";
            break;
        case 10:
            month = "OCTUBRE";
            break;
        case 11:
            month = "NOVIEMBRE";
            break;
        case 12:
            month = "DICIEMBRE";
            break;
        default:
            break;
    }
    return month;
};
