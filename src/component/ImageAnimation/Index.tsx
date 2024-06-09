import React from "react";
import diamond from "../../assets/diamond.png";
import { Tv, luggage, group, book, beaker } from "../../assets/index";

function ImageAnimation() {
  return (
    <>
      <div className="flex p-2 h-12 z-10 bg-white rounded-full  border-borderGreen items-center border-2 absolute   animate-fadeInOutLeft top-4 left-2">
        <div className="rounded-128 p-1 flex items-center justify-center bg-borderGreen rounded-full">
          <img src={Tv} alt="" className="w-5" />
        </div>
        <div className="flex p-3 flex-col flex-1">
          <div className="text-xs leading-4.5 text-neutral-800 font-semibold">
            Guaranteed-to-Run Sessions
          </div>
        </div>
      </div>

      <div className="flex p-2 h-12 z-10 rounded-full bg-white  border-borderGreen items-center border-2 absolute animate-fadeInOutRight2 top-12 right-9">
        <div className="rounded-128 p-1 rounded-full flex items-center justify-center bg-borderGreen">
          <img src={diamond} alt="" className="w-5" />
        </div>
        <div className="flex flex-col flex-1 pl-3">
          <div className="text-xs leading-4.5 text-neutral-800 font-semibold">
            2-Year Scrum Alliance Membership
          </div>
          <div className="text-sm leading-5.5 text-neutral-700 font-bold"></div>
        </div>
      </div>

      <div className="flex p-2 h-12 z-10 rounded-full bg-white  border-borderGreen items-center rounded-128 border-2 absolute animate-fadeInOutLeft2 top-36 left-4">
        <div className="rounded-128 p-1 flex items-center justify-center bg-borderGreen rounded-full">
          <img src={luggage} alt="" className="w-5" />
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-xs leading-4.5 text-neutral-800 font-semibold">
            16 SEUs and 16 PDUs
          </div>
          <div className="text-sm leading-5.5 text-neutral-700 font-bold"></div>
        </div>
      </div>

      <div className="flex p-2 h-12 rounded-full bg-white border-borderGreen items-center border-2 absolute animate-fadeInOutRight top-53 right-4">
        <div className="rounded-128 p-1 flex items-center justify-center bg-borderGreen rounded-full">
          <img src={group} alt="" className="w-5" />
        </div>
        <div className="flex flex-col p-3 flex-1">
          <div className="text-xs  leading-4.5 text-neutral-800 font-semibold">
            Elite Panel of CSTs
          </div>
          <div className="text-sm leading-5.5 text-neutral-700 font-bold"></div>
        </div>
      </div>

      <div className="flex p-2 h-12 rounded-full bg-white border-borderGreen items-center border-2 absolute animate-fadeInOutRight2 bottom-15 left-30">
        <div className="rounded-128 p-1 flex items-center justify-center bg-borderGreen rounded-full">
          <img src={book} alt="" className="w-5" />
        </div>
        <div className="flex p-3 flex-col flex-1">
          <div className="text-xs leading-4.5 text-neutral-800 font-semibold">
            Complimentary Courses Worth $300
          </div>
          <div className="text-sm leading-5.5 text-neutral-700 font-bold"></div>
        </div>
      </div>

      <div className="flex p-2 h-12 rounded-full border-borderGreen bg-white  z-10 items-center border-2 absolute animate-fadeInOutLeft bottom-6 left-7">
        <div className="rounded-128 p-1 flex items-center justify-center bg-borderGreen rounded-full">
          <img src={beaker} alt="" className="w-5" />
        </div>
        <div className="flex p-3 flex-col flex-1">
          <div className="text-xs leading-4.5 text-neutral-800 font-semibold">
            Experiential Learning
          </div>
          <div className="text-sm leading-5.5 text-neutral-700 font-bold"></div>
        </div>
      </div>
    </>
  );
}

export default ImageAnimation;
