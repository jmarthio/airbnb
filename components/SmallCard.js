import Image from "next/image";
import React from "react";

function SmallCard({ img, title, abstract }) {
  return (
    <div>
      {/* Left */}
      <div className="relative h-16">
        <Image src={img} layout="fill" className="rounded-lg" />
        <p>{title}</p>
      </div>
    </div>
  );
}

export default SmallCard;
