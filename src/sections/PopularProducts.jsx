import React from "react";
import { products } from "../constants";
import { star } from "../assets/icons";

function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin ">
          <span>Our</span> <span className="text-coral-red">Popular</span>
          <span>Products</span>
        </h2>
        <p className="font-montserrat text-slate-gray leading-none lg:max-w-lg mt-2 ">
          Experience top-notch quality and style with our sought after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 mt-16 justify-center items-center sm:gap-4  gap-14">
        {products.map((pro) => (
          <div
            key={pro.name}
            className="flex-1 flex-col gap-4 w-full max-sm:w-full"
          >
            <img src={pro.imgURL} alt="" className="w-[280px] h-[280px]" />

            <div className="mt-8 flex flex-col justify-start gap-2.5">
              <div className="flex">
                <img src={star} alt="" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">
                  (4.5)
                </p>
              </div>
              <h3 className="font-bold mt-2 text-2xl leading-normal font-semibold font-palanquin">
                {pro.name}
              </h3>
              <p className="text-coral-red mt-2 font-semibold font-montserrat text-2xl leading-normal">
                {pro.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
