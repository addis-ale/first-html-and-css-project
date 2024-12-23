import React from "react";
import { reviews } from "../constants";
import Review from "../components/Review";

function CustomerReview() {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customer</span> Say?
      </h3>
      <p className="text-center info-text m-auto mt-4 max-w-lg ">
        Hear geinuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex-1 flex   max-lg:flex-col gap-14 justify-center items-center">
        {reviews.map((review) => (
          <Review key={review.customerName} review={review} />
        ))}
      </div>
    </section>
  );
}

export default CustomerReview;
