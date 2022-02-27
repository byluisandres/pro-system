import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";
import { Image } from "@/icons";
import Breadcrumb from "@/Components/Breadcrumb";
import ActionsButtons from "@/Components/ActionsButtons";
import ImagePreview from "@/Components/ImagePreview";
import { Inertia } from "@inertiajs/inertia";

const Create = ({ auth, errors, categories }) => {
    const [product, setProduct] = useState({
        name: "",
        category_id: "",
        description: "",
        code: "",
        stock: "",
        sales_price: "",
    });
    const [featuredImage, setFeaturedImage] = useState("");

    // desestructuración
    const { name, description, code, stock, sales_price } = product;

    //onChange
    const handleChange = (e) => {
        setProduct({
            ...product,
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
            product.image = uploadFile;

            // Leemos el archivo subido y se lo pasamos a nuestro fileReader
            reader.readAsDataURL(uploadFile);

            // Le decimos que cuando este listo ejecute el código interno
            reader.onload = function () {
                setFeaturedImage(reader.result);
            };
        }
    };
    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/products", product);
    };
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Create" />
            <section>
                <Breadcrumb />
            </section>
            <section className="mt-3">
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 gap-0">
                        <div className="mb-3">
                            <label htmlFor="name">Nombre</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={handleChange}
                                value={name}
                            />
                            {errors.name ? (
                                <p className="text-red-500">{errors.name}</p>
                            ) : null}
                        </div>
                        {categories.length > 0 ? (
                            <>
                                <div className="mb-3">
                                    <label htmlFor="category_id">
                                        Categoría
                                    </label>
                                    <select
                                        id="category_id"
                                        name="category_id"
                                        className="w-full border-neutral-300 focus:border-neutral-300 focus:ring
                            focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                        onChange={handleChange}
                                    >
                                        <option value={null} disabled>
                                            -- Selecciona una categoría --
                                        </option>
                                        {categories.map((category, index) => (
                                            <option
                                                key={index}
                                                value={category.id}
                                            >
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category_id ? (
                                        <p className="text-red-500">
                                            {errors.category_id}
                                        </p>
                                    ) : null}
                                </div>
                            </>
                        ) : (
                            <div className="flex justify-center items-center">
                                <p className="text-neutral-700">
                                    Agrega categorías
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description">Descripción</label>
                        <textarea
                            id="description"
                            name="description"
                            className="w-full border-neutral-300 focus:border-neutral-300
                            focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={handleChange}
                            value={description}
                        ></textarea>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 gap-0">
                        <div className="mb-3">
                            <label htmlFor="code">Código</label>
                            <input
                                id="code"
                                name="code"
                                type="text"
                                className="w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={handleChange}
                                value={code}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stock">Stock</label>
                            <input
                                id="stock"
                                name="stock"
                                type="number"
                                className="w-full border-neutral-300 focus:border-neutral-300 focus:ring
                            focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={handleChange}
                                value={stock}
                            />
                            {errors.stock ? (
                                <p className="text-red-500">{errors.stock}</p>
                            ) : null}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 gap-0">
                        <div className="mb-3">
                            <label htmlFor="sales_price">Precio de venta</label>
                            <input
                                id="sales_price"
                                name="sales_price"
                                type="text"
                                className="w-full border-neutral-300 focus:border-neutral-300 focus:ring
                            focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={handleChange}
                                value={sales_price}
                            />
                            {errors.sales_price ? (
                                <p className="text-red-500">
                                    {errors.sales_price}
                                </p>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image">Imágen Producto</label>
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
                            <ImagePreview src={featuredImage} />
                        </div>
                    </div>
                    <ActionsButtons>Guardar</ActionsButtons>
                </form>
            </section>
        </Authenticated>
    );
};

export default Create;
