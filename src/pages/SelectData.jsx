import React from "react";
import { CiMail, CiShoppingBasket } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { MdPayment } from "react-icons/md";

const SelectData = ({ data }) => {
  const {
    id,
    name,
    title,
    price,
    features,
    flexible,
    payment,
    plus,
    listings,
    manageDetails,
    employee,
    design,
  } = data;

  return (
    <div>
      <div
        className={`shadow-sm border ${
          design ? "border-primary" : "border-[#E21B7033]"
        }  p-7 rounded-lg`}
      >
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="text-sm pt-1">{title}</p>
        <h2 className="pt-3">
          <span className="text-3xl "> ${price}</span>{" "}
          <span>/({employee} Employee)</span>
        </h2>
        <h3 className="text-sm py-2 w-[180px]">{manageDetails}</h3>
        <div>
          <button
            className={`px-5 py-2 w-full my-5   md:text-sm text-xs  font-medium rounded-lg hover:bg-pink-500 duration-100 delay-150 ${
              design ? "bg-primary text-white" : "text-primary border border-primary hover:text-white"
            }`}
          >
          Select
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <IoMdCheckmark className="border p-1 text-2xl rounded" />
            <div className="text-sm">{plus}</div>
          </div>
          <div className="flex items-center gap-2">
            <CiMail className="border p-1 text-2xl rounded" />
            <div className="text-sm">{listings}</div>
          </div>
          <div className="flex items-center gap-2">
            <MdPayment className="border p-1 text-2xl rounded" />
            <div className="text-sm">{payment}</div>
          </div>
          <div className="flex items-center gap-2">
            <CiShoppingBasket className="border p-1 text-2xl rounded" />
            <div className="text-sm">{flexible}</div>
          </div>
          <div className="flex items-center gap-2">
            <LuShoppingCart className="border p-1 text-2xl rounded" />
            <div className="text-sm">{features}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectData;
