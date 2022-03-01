import React from "react";

const CardInfo = ({ data }) => {
    return (
        <section className="mt-3 bg-neutral-50 rounded-md p-2">
            <h1>
                <span className="text-neutral-700 mr-2"> Nombre:</span>
                {data.name}
            </h1>
            <div className="grid grid-cols-2 gap-4">
                <p>
                    <span className="text-neutral-700 mr-2">
                        Tipo de documento:
                    </span>
                    {data.type_document}
                </p>
                <p>
                    <span className="text-neutral-700 mr-2">
                        Número de documento:
                    </span>
                    {data.num_document}
                </p>
            </div>
            <p>
                <span className="text-neutral-700 mr-2">Dirección:</span>
                {data.adress}
            </p>
            <p>
                <span className="text-neutral-700 mr-2">Teléfono:</span>
                {data.phone}
            </p>
            <p>
                <span className="text-neutral-700 mr-2">
                    Correo eléctronico:
                </span>
                <a href={`mailto:${data.email}`} className="hover:underline">
                    {data.email}
                </a>
            </p>
        </section>
    );
};

export default CardInfo;
