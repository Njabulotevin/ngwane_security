"use client"

import React, {useState} from 'react'
import {BsXCircleFill} from "react-icons/bs";

function ImageGallery() {
    const images = Array.from({ length: 20 }, (_, i) => `image_${i + 1}.jpeg`);


    const [isImageViewerOn, setIsImageViewOn] = useState(false);
    const [currentImage, setCurrentImage] = useState("https://picsum.photos/id/1018/1000/600/");


    return <div>
        {isImageViewerOn && <div onClick={() => setIsImageViewOn(false)}
                                 className="fixed w-full h-screen bg-black/75 top-0 left-0 z-[5000] lg:p-20 p-10">
            <div className="w-full flex justify-end">
                <BsXCircleFill className="text-white cursor-pointer" size={30}
                               onClick={() => setIsImageViewOn(!isImageViewerOn)}/>
            </div>
            <div className="flex justify-center  items-center h-full">
                <img className=" h-[80%] lg:max-h-screen object-contain" src={currentImage}/>
            </div>
        </div>}
        <div className="flex justify-center items-center h-full flex-wrap p-30  gap-10">
            {images.map((image, index) => (
                <img src={image} key={index} className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] object-cover" onClick={() => {
                    setCurrentImage(image)
                    setIsImageViewOn(true)
                }}/>
            ))}
        </div>
    </div>

}

export default ImageGallery