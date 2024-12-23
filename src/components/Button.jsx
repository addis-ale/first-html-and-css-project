import React from "react";

function Button({ label, iconURL, bg }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 font-montserrat leading-one bg-coral-red rounded-full border-coral-red text-white`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right"
          className="ml-2 roundeed-full w-5 h-5"
        />
      )}
    </button>
  );
}

export default Button;
