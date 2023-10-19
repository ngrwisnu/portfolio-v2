import React from "react";
import Gallery from "./gallery";
import Image from "next/image";

const BlackHoneyGallery = ({ images }: { images: string[] | [] }) => {
  return (
    <div className="flex w-full flex-col gap-24">
      <div>
        <h5 className="mb-1">
          <strong>Sketch & Wireframe</strong>
        </h5>
        <ul className="grid auto-rows-[400px] grid-cols-1 gap-4 md:grid-cols-2">
          {images
            .filter((image) => image.includes("wr"))
            .map((item) => (
              <li
                key={item}
                className={`${item.includes("3") && "md:col-span-2"} ${
                  item.includes("4") && "md:row-span-4"
                } relative overflow-hidden bg-[#f7f7f7]`}
              >
                <Image
                  src={`/assets/images/${item}`}
                  fill={true}
                  alt="gallery"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h5 className="mb-1">
          <strong>Mockup</strong>
        </h5>
        <Gallery images={images.filter((image) => image.includes("mock"))} />
      </div>
    </div>
  );
};

export default BlackHoneyGallery;
