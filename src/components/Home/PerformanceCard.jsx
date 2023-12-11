import React from "react";

const SupportCard = (props) => {
  return (
    <div className="rounded-lg p-6 bg-[#eeeeeeee] max-w-xs md:max-w-md shadow-2xl mt-10  mb-8  flex gap-y-5 flex-col items-center hover:scale-110 transition-all flex-shrink-0">
      <img
        className="rounded-lg inline-block"
        src={props.img} alt=""
      />

      <div className={`py-5 `}>
        <p className="mb-3 font-normal text-sm text-[#1d1a1a] dark:text-gray-400">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default SupportCard;
