import React from "react";

const ImagePreview = ({ src, className }) => {
    return src ? (
        <>
            <div className=" mt-2 bg-gray-100">
                <img
                    src={src}
                    className={`${className} w-full border rounded-md`}
                    alt="imágen destacada"
                />
            </div>
        </>
    ) : null;
};

export default ImagePreview;
