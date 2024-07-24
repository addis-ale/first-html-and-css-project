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

        <div className="flex gap-4 justify-center items-center">
          {products.map((pro) => (
            <div key={pro.name} className="flex-col gap-4">
              <div>
                <img src={pro.imgURL} alt="" />
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <img src={star} alt="" />
                  <span> (4.5)</span>
                </div>
                <h2 className="font-bold">{pro.name}</h2>
                <h3 className="text-coral-red">{pro.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
