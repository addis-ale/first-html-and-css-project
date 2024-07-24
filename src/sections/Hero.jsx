import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
function Hero() {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  function handleShoeChange(shoeURL) {
    console.log(shoeURL);
    console.log(bigShoeImage);
    setBigShoeImage(shoeURL);
  }

  return (
    <section
      id="home"
      className="w-full min-h-screen flex xl:flex-row flex-col justify-center  gap-10 max-container"
    >
      <div className="relative flex flex-col items-start justify-center xl:w-2/5 w-full   max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="text-8xl font-palanquin mt-10 max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap pr-10 z-10 relative">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3"> Nike</span>
          <span> Shoes</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-starts items-start flex-wrap mt-20 w-full gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative  flex-1 flex
       justify-center items-center xl:min-h-screen max-xl: py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoeImage}
          alt=""
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                bigShoeImage={bigShoeImage}
                onHandleChangeShoe={handleShoeChange}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
