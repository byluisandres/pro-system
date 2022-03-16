import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Breadcrumb from "@/Components/Breadcrumb";
import ActionsButtons from "@/Components/ActionsButtons";
import ImagePreview from "@/Components/ImagePreview";
import { Image } from "@/icons";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

const Edit = ({ auth, errors, profile }) => {
    const [profileEdit, setProfileEdit] = useState({
        name: profile.user.name,
        email: profile.user.email,
        address: profile.address,
        phone: profile.phone,
    });

    const { name, email, address, phone } = profileEdit;

    const [photo, setPhoto] = useState("");

    const handleChange = (e) => {
        setProfileEdit({
            ...profileEdit,
            [e.target.name]: e.target.value,
        });
    };
    const handleChangeFile = (e) => {
        var uploadFile = e.target.files[0];
        let reader = new FileReader();
        if (!/\.(jpg|png)$/i.test(uploadFile.name)) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Formato no válido",
                showConfirmButton: false,
                timer: 1200,
            });
        } else {
            // Asignar imágen destacada
            profileEdit.image = uploadFile;

            // Leemos el archivo subido y se lo pasamos a nuestro fileReader
            reader.readAsDataURL(uploadFile);

            // Le decimos que cuando este listo ejecute el código interno
            reader.onload = function () {
                setPhoto(reader.result);
            };
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(profileEdit);
        Inertia.put(`/profile/${profile.id}`, profileEdit);
    };

    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Edit" />
            <Breadcrumb />
            <section className="mt-3">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Nombre</label>
                        <input
                            id="name"
                            name="name"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            type="text"
                            defaultValue={name}
                            onChange={handleChange}
                        />
                        {errors.name ? (
                            <p className="text-red-500">{errors.name}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            type="email"
                            defaultValue={email}
                            onChange={handleChange}
                        />
                        {errors.email ? (
                            <p className="text-red-500">{errors.email}</p>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address">Dirección</label>
                        <input
                            id="address"
                            name="address"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            type="text"
                            defaultValue={address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            id="phone"
                            name="phone"
                            className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            type="text"
                            defaultValue={phone}
                            onChange={handleChange}
                        />
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="image">Imágen</label>
                        <div className="flex items-center justify-center w-full cursor-pointer">
                            <label
                                className="flex flex-col border-2 border-dashed w-full h-11 hover:bg-neutral-100
                            hover:border-neutral-300 group"
                            >
                                <div className="flex flex-col items-center justify-center mt-3">
                                    <Image className="text-neutral-200" />
                                </div>
                                <input
                                    type="file"
                                    className="hidden"
                                    name="image"
                                    id="image"
                                    onChange={handleChangeFile}
                                />
                            </label>
                        </div>
                        <ImagePreview src={photo} className="h-72" />
                    </div> */}

                    <ActionsButtons>Editar</ActionsButtons>
                </form>
            </section>
        </Authenticated>
    );
};

export default Edit;
