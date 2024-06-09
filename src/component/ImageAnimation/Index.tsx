import React from "react";

function ImageAnimation() {
  return (
    <>
      <div className="flex p-2 h-12 z-10 bg-white rounded-full  border-borderGreen items-center border-2 absolute   animate-fadeInOutLeft top-4 left-2">
        <div className="rounded-128 flex items-center justify-center ">
          <i className="icon-stand text-xl text-mono-white"></i>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-xs leading-4.5 text-neutral-800 font-semibold">
            Guaranteed-to-Run Sessions
          </div>
        </div>
      </div>

      <div className="flex p-2 h-12 z-10 rounded-full bg-white  border-borderGreen items-center border-2 absolute animate-fadeInOutRight2 top-12 right-9">
        <div className="rounded-128 flex items-center justify-center ">
          <i className="icon-diamond-underline text-xl text-mono-white"></i>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-xs leading-4.5 text-neutral-800 font-semibold">
            2-Year Scrum Alliance Membership
          </div>
          <div className="text-sm leading-5.5 text-neutral-700 font-bold"></div>
        </div>
      </div>

      <div className="flex p-2 h-12 z-10 rounded-full bg-white  border-borderGreen items-center rounded-128 border-2 absolute animate-fadeInOutLeft2 top-36 left-4">
        <div className="rounded-128 flex items-center justify-center ">
          <i className="icon-luggage text-xl text-mono-white"></i>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-xs leading-4.5 text-neutral-800 font-semibold">
            16 SEUs and 16 PDUs
          </div>
          <div className="text-sm leading-5.5 text-neutral-700 font-bold"></div>
        </div>
      </div>

      <div className="flex p-2 h-12 rounded-full bg-white border-borderGreen items-center border-2 absolute animate-fadeInOutRight top-53 right-4">
        <div className="flex items-center justify-center ">
          <i className="icon-users text-xl text-mono-white "></i>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-xs leading-4.5 text-neutral-800 font-semibold">
            Elite Panel of CSTs
          </div>
          <div className="text-sm leading-5.5 text-neutral-700 font-bold"></div>
        </div>
      </div>

      <div className="flex p-2 h-12 rounded-full bg-white border-borderGreen items-center border-2 absolute animate-fadeInOutRight2 bottom-15 left-30">
        <div className="rounded-128 flex items-center justify-center ">
          <i className="icon-book-closed text-xl text-mono-white"></i>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-xs leading-4.5 text-neutral-800 font-semibold">
            Complimentary Courses Worth $300
          </div>
          <div className="text-sm leading-5.5 text-neutral-700 font-bold"></div>
        </div>
      </div>

      <div className="flex p-2 h-12 rounded-full border-borderGreen bg-white  z-10 items-center border-2 absolute animate-fadeInOutLeft bottom-6 left-7">
        <div className="rounded-128 flex items-center justify-center ">
          <i className="icon-beaker text-xl text-mono-white"></i>
        </div>
        <div className="flex flex-col flex-1">
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
