import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          alt=""
          width={776}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex-1 flex flex-col items-start  gap-8 xl:max-w-xl ">
        <h2 className="font-bold text-4xl font-palanquin  ">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="text-montserrat text-slate-gray ">
          Embark on a shopping journey that redefines you experience with
          unbeatable deals. from premier selection to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-montserrat text-slate-gray">
          Navigate a realm of possiblities designed to fulfill you unique
          desires, surrounding the loftiest expectations. Your journey with us
          is nothing short of exceptional.
        </p>
        <div className="flex gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <button className="text-slate-gray bg-bg-white  px-8 py-4 border-2 borer-border-slate-gray rounded-full">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
