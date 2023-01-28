import Image from "next/image";
import React from "react";

interface TechItemType {
  imageUrl: string;
  width?: number;
  height?: number;
}

const TechItem = (props: TechItemType) => {
  const { imageUrl, width = 70, height = 60 } = props;

  const url = `/assets/images/${imageUrl}.png`;

  return (
    <div className="flex h-20 w-20 items-center justify-center grayscale transition-all lg:hover:grayscale-0">
      <Image src={url} width={width} height={height} alt="" />
    </div>
  );
};

export default TechItem;
