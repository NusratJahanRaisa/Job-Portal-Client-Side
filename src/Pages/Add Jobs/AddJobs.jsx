import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/Hooks";
import { useNavigate } from "react-router";

const AddJobs = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;

    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job Has been added.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJobs");
        }
      });
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 md:px-20">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-10 border border-blue-200">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
          Post a New Job!
        </h2>

        <form onSubmit={handleAddJob} className="space-y-6">
          {/* Job title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Job Title
              </span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="input input-bordered border-blue-300 focus:border-blue-500 w-full"
              required
            />
          </div>

          {/* Job location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Job Location
              </span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              className="input input-bordered border-blue-300 focus:border-blue-500 w-full"
              required
            />
          </div>

          {/* Job Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Job Type
              </span>
            </label>

            <form className="filter my-3">
              <input className="btn btn-square" type="reset" value="×" />
              <input
                className="btn"
                type="radio"
                name="jobtype"
                aria-label="Full-Time"
              />
              <input
                className="btn"
                type="radio"
                name="jobtype"
                aria-label="Remote"
              />
              <input
                className="btn"
                type="radio"
                name="jobtype"
                aria-label="Hybrid"
              />
            </form>
          </div>

          {/* Job Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Job Field
              </span>
            </label>
            <select
              defaultValue="Pick a Job Field"
              name="jobField"
              className="select select-bordered border-blue-300 focus:border-blue-500 w-full"
            >
              <option disabled>Pick a Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>

          {/* Salary Range */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-blue-700 font-medium">
                  Salary Range
                </span>
              </label>
              <input
                type="text"
                name="min"
                placeholder="Min"
                className="input input-bordered border-blue-300 focus:border-blue-500 w-full"
                required
              />
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                name="max"
                placeholder="Max"
                className="input input-bordered border-blue-300 focus:border-blue-500 w-full"
                required
              />
            </div>

            <div className="form-control w-full">
              <select
                defaultValue="Currency"
                name="currency"
                className="select select-bordered border-blue-300 focus:border-blue-500 w-full"
              >
                <option disabled>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="form-control gap-3">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Job Description
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered border-blue-300 focus:border-blue-500 w-full"
              placeholder="Job Description"
              name="description"
              required
            ></textarea>
          </div>

          {/* Company Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Company Name
              </span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered border-blue-300 focus:border-blue-500 w-full"
              required
            />
          </div>

          {/* Requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Job Requirements
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered border-blue-300 focus:border-blue-500 w-full"
              placeholder="Put each requirement on a new line"
              name="requirements"
              required
            ></textarea>
          </div>

          {/* Responsibilities */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Job Responsibilities
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered border-blue-300 focus:border-blue-500 w-full"
              placeholder="Write each responsibility on a new line"
              name="responsibilities"
              required
            ></textarea>
          </div>

          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                HR Name
              </span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered border-blue-300 focus:border-blue-500 w-full"
              required
            />
          </div>

          {/* HR Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                HR Email
              </span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              name="hr_email"
              placeholder="HR Email"
              className="input input-bordered border-blue-300 focus:border-blue-500 w-full"
              required
            />
          </div>

          {/* Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Deadline
              </span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered border-blue-300 focus:border-blue-500 w-full"
              required
            />
          </div>

          {/* Company Logo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Company Logo URL
              </span>
            </label>
            <input
              type="text"
              name="company_logo"
              placeholder="Company Logo URL"
              className="input input-bordered border-blue-300 focus:border-blue-500 w-full"
              required
            />
          </div>

          {/* Submit */}
          <div className="form-control mt-6">
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
