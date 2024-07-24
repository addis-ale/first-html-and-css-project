import React from "react";
function ShoeCard({ imgURL, onHandleChangeShoe, bigShoeImage }) {
  return (
    <div
      className={`border-2 rounded-xl  cursor-pointer max-sm:flex-1 ${
        imgURL.bigShoe === bigShoeImage
          ? `border-coral-red`
          : `border-transparent`
      }`}
    >
      <div
        className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded:xl max-sm:p-4"
        onClick={() => onHandleChangeShoe(imgURL.bigShoe)}
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default ShoeCard;
