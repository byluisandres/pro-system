import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";

const Show = ({ auth, errors, profile }) => {
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Show" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4 text-lg">
                {/* //TODO: mirar perfil udemy */}
                <section className="border-2 p-2 rounded">
                    <article>
                        {/* <div>
                            <p>Imágen</p>
                        </div> */}
                        <p>
                            Nombre:
                            <span className="ml-3">{profile.user.name}</span>
                        </p>
                        <p>
                            Email:
                            <a
                                href={`mailto:${profile.user.email}`}
                                className="ml-3"
                            >
                                {profile.user.email}
                            </a>
                        </p>
                    </article>
                </section>
                <section className="border-2 p-2 rounded">
                    <article>
                        <p>
                            Dirección:
                            <span className="ml-3">{profile.address}</span>
                        </p>
                        <p>
                            Teléfono:
                            <span className="ml-3">{profile.phone}</span>
                        </p>
                    </article>
                </section>
            </div>
            <div className="mt-5 flex justify-end items-center">
                <Link
                    href={route("profile.edit", {
                        profile: profile.user.id,
                    })}
                    className="underline"
                >
                    Editar perfil
                </Link>
            </div>
        </Authenticated>
    );
};

export default Show;
