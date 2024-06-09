import React from "react";
import Breadcrumb from "./component/Breadcrumb/Breadcrumb";
import { breadcrumbItems } from "./data/BreadcrumbData";
import CourseOverview from "./component/CourseOverview";
import ImageAnimation from "./component/ImageAnimation/Index";
import RAE from "./assets/RAE.svg";
import share from "./assets/share.png";

function App() {
  return (
    <div className="p-0 h-screen  ml-32 mr-32 box-border bg-lightBeige">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-row mt-12">
        <div className="flex items-start justify-start md:w-6/12 xl:w-7/12 2xl:w-8/12 ">
          <CourseOverview />
        </div>
        <div className="flex flex-row items-center justify-center md:w-6/12 xl:w-3/6 2xl:w-1/2">
          <div className="flex  justify-center   items-end flex-col">
            <div className="flex flex-col justify-center items-center gap-10">
              <div className="w-30 relative h-96 flex flex-col items-start overflow-hidden">
                <div className="flex flex-none self-center h-80 w-80 bg-customBeige rounded-2xl absolute bottom-0 animate-circle"></div>
                <img
                  src="https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FCSPO%20Webp%20Banner-ceb22427a1ad483cbc62f8feaa568d29.webp&w=1920&q=75"
                  alt="image1"
                  className=" absolute h-full w-full object-cover left-0 right-0 top-0 bottom-0 text-transparent"
                />
                <ImageAnimation />
              </div>
              <div className="flex items-center gap-2 h-12">
                <div className="border-2 rounded-full w-72 flex items-center justify-end p-3 relative shadow-md">
                  <img src={RAE} alt="" className="w-20 absolute left-0" />
                  <p>Registered Education Ally</p>
                </div>
                <div className="w-10 border border-borderGreen rounded-full bg-bgGreen">
                  <img src={share} alt="" className="p-1"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
