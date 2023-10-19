import Image from "next/image";
import React from "react";

const Gallery = ({ images }: { images: string[] | [] }) => {
  return (
    <ul className="flex flex-col gap-4">
      {images.map((image) => (
        <li
          key={image}
          className="flex max-h-[620px] w-full justify-center bg-[#F5F5F5]"
        >
          <Image
            src={`/assets/images/${image}`}
            width={1184}
            height={620}
            alt="gallery"
          />
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
