import React from "react";

import {
  Hero,
  PopularProducts,
  Services,
  SuperQualityProducts,
  Subscribe,
  SpecialOffer,
  CustomerReview,
  Footer,
} from "./sections/index";
import Nav from "./components/Nav";
export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section>
        {/* className="xl: padding-l wide: padding-r padding-b" */}
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQualityProducts />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        {" "}
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        {" "}
        <Footer />
      </section>
    </main>
  );
}
