import Swal from "sweetalert2";

export const toastMessage = (position, icon, title) => {
    const Toast = Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: 1100,
        timerProgressBar: true,
    });

    Toast.fire({
        icon: icon,
        title: title,
    });
};
