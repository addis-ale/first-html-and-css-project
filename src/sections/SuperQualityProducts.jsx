import React from "react";
import { shoe8 } from "../assets/images";

function SuperQualityProducts() {
  return (
    <section
      className="flex justify-between itmes-center max-lg:flex-col  max-container w-full gap-10"
      id="about-us"
    >
      <div className="flex-1 flex flex-col items-start  gap-8 xl:max-w-xl ">
        <h2 className="font-bold text-4xl font-palanquin  ">
          We Provide You <span className="text-coral-red">Super Quality</span>
          Shoes
        </h2>
        <p className="text-montserrat text-slate-gray ">
          Ensuring premium comfort and style.our mericulously crafted footwear
          is desighned to elevate your experience. providing you with unmatched
          quality,innovation,and a touch of elegance.
        </p>
        <p className="text-montserrat text-slate-gray">
          Our dedication to detail and execellence ensures you satisfaction
        </p>
        <button className="text-primary bg-coral-red px-8 py-4 rounded-full">
          view details
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt=""
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default SuperQualityProducts;
