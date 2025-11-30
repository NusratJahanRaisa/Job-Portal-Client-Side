import React from 'react';

const MyApplication = ({app}) => {

    const {
            _id,
            applicant,
            fullName,
            email,
            phone,
            location,
            position,
            experience,
            skills,
            coverLetter,
            company,
            title,
            company_logo,
          } = app;
          
    return (
            <div
              key={_id}
              className="flex flex-col md:flex-row justify-between bg-blue-50 border border-blue-200 rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              {/* Company Info */}
              <div className="flex flex-col items-center md:items-start md:w-1/3 bg-blue-100 p-3 rounded-lg">
                {company_logo && (
                  <img
                    src={company_logo}
                    alt={company}
                    className="w-16 h-16 rounded-full mb-2"
                  />
                )}
                <h3 className="font-bold text-blue-800">{company}</h3>
                <p className="text-sm text-blue-700">{title}</p>
              </div>

              {/* Applicant Info */}
              <div className="flex flex-col md:w-2/3 mt-4 md:mt-0 md:pl-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p><span className="font-semibold text-blue-700">Applicant:</span> {applicant}</p>
                  <p><span className="font-semibold text-blue-700">Full Name:</span> {fullName}</p>
                  <p><span className="font-semibold text-blue-700">Email:</span> {email}</p>
                  <p><span className="font-semibold text-blue-700">Phone:</span> {phone}</p>
                  <p><span className="font-semibold text-blue-700">Location:</span> {location}</p>
                  <p><span className="font-semibold text-blue-700">Position:</span> {position}</p>
                  <p><span className="font-semibold text-blue-700">Experience:</span> {experience}</p>
                  <p><span className="font-semibold text-blue-700">Skills:</span> {skills}</p>
                </div>

                {/* Cover Letter */}
                {coverLetter && (
                  <div className="mt-3 p-2 bg-white border border-blue-200 rounded">
                    <p className="font-semibold text-blue-700 mb-1">Cover Letter:</p>
                    <p className="text-sm text-blue-800">{coverLetter}</p>
                  </div>
                )}
              </div>
            </div>
          );
};

export default MyApplication;