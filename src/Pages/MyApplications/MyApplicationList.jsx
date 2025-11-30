import React from "react";
import MyApplication from "./MyApplication";

const MyApplicationList = ({ applicationData }) => {

  console.log(applicationData)
  
  return (
    <div className="mt-10 px-6">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
        My Applications
      </h2>

      <div className="space-y-4">
        {applicationData?.map((app) =>
        <MyApplication app={app} key={app._id}></MyApplication>
        )}
      </div>
    </div>
  );
};

export default MyApplicationList;
