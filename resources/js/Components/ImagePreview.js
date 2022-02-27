import React from "react";

const ImagePreview = ({ src }) => {
    return src ? (
        <>
            <div className=" mt-2 h-72 w-full bg-gray-100">
                <img
                    src={src}
                    className="h-72 w-full border rounded-md"
                    alt="imágen destacada"
                />
            </div>
        </>
    ) : null;
};

export default ImagePreview;
