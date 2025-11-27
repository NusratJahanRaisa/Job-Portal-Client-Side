import React from "react";

const PostedmyJobDataList = ({ myJobData }) => {
    return (
        <div className="overflow-x-auto mt-6">
            <table className="table-auto w-full border border-blue-900">
                <thead>
                    <tr className="bg-[#f8faff] text-left">
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Company</th>
                        <th className="border px-4 py-2">Location</th>
                        <th className="border px-4 py-2">Deadline</th>
                        <th className="border px-4 py-2">Salary</th>
                    </tr>
                </thead>

                <tbody>
                    {myJobData.map((job) => (
                        <tr key={job._id} className="hover:bg-gray-50">
                            <td className="border px-4 py-2">{job.title}</td>
                            <td className="border px-4 py-2">{job.company}</td>
                            <td className="border px-4 py-2">{job.location}</td>
                            <td className="border px-4 py-2">{job.applicationDeadline}</td>
                            <td className="border px-4 py-2">
                                {job.salaryRange?.min} - {job.salaryRange?.max} {job.salaryRange?.currency}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostedmyJobDataList;
