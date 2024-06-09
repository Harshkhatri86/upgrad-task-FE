import React from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaFacebook,
  FaGoogle,
  FaFire,
} from "react-icons/fa";

const courseDetails = [
  "Guaranteed-to-run, live, fun and interactive sessions",
  "Tackle real-world Agile and Scrum challenges head-on",
  "Comprehensive job support with access to stellar hiring partners",
  "Complimentary access to Agile and Scrum E-Learning worth US$ 300",
];

const ratings = [
  { icon: <FaGoogle className="text-red-500" />, score: "4.8/5" },
  { icon: <FaFacebook className="text-blue-600" />, score: "4.7/5" },
  { icon: <FaFire className="text-red-500" />, score: "4.9/5" },
  { icon: <FaUsers className="text-gray-600" />, score: "1,20,000+ Enrolled" },
];

const CourseOverview: React.FC = () => {
  return (
    <div className="p-0  bg-lightBeige rounded-lg ">
      <Header />
      <Description />
      <Ratings />
      <DetailsList />
      <Actions />
    </div>
  );
};

const Header: React.FC = () => (
  <>
    <h2 className="text-sm font-semibold text-gray-500 uppercase">
      Certified Scrum Product Owner Certification Training
    </h2>
    <h1 className="mt-2 text-5xl font-bold text-gray-900">
      CSPO® Certification Training
    </h1>
  </>
);

const Description: React.FC = () => (
  <p className="mt-4 text-lg text-gray-700 mb-5">
    Maximize Product Value, Manage Backlog Effectively and Excel as a Product Owner
  </p>
);

const Ratings: React.FC = () => (
  <>
    <hr />
    <div className="flex items-center mt-3 mb-3 space-x-4">
      <span className="px-2 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-md">
        Live Training
      </span>
      {ratings.map((rating, index) => (
        <div key={index} className="flex items-center space-x-1">
          {rating.icon}
          <span>{rating.score}</span>
        </div>
      ))}
    </div>
    <hr />
  </>
);

const DetailsList: React.FC = () => (
  <ul className="mt-6 space-y-2 text-lg text-gray-700">
    {courseDetails.map((detail, index) => (
      <li key={index} className="flex items-center space-x-2">
        <FaCheckCircle className="text-green-500" />
        <span>{detail}</span>
      </li>
    ))}
  </ul>
);

const Actions: React.FC = () => (
  <div className="mt-10 flex gap-6">
    <button
      type="button"
      className="text-sm bg-black rounded text-white p-4 font-semibold hover:bg-customGreen"
    >
      Contact Learning Advisor
    </button>
    <button
      type="button"
      className="text-sm bg-white border border-black rounded p-4 font-semibold hover:bg-gray-200"
    >
      View Schedules
    </button>
  </div>
);

export default CourseOverview;
