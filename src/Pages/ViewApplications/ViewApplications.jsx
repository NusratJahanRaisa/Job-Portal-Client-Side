import React from "react";
import { useParams, useLoaderData } from "react-router";
import ViewApplication from "./ViewApplication";

const ViewApplications = () => {
  const { job_id } = useParams();

  const data = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Applications for Job ID: <span className="text-blue-600">{job_id}</span>
      </h1>

      <div className="space-y-4">
        {data.map(singleData => 
        <ViewApplication singleData={singleData} job_id={job_id} key={data._id}>
        </ViewApplication>
        )}
      </div>
    </div>
  );
};

export default ViewApplications;
