import React from 'react';

const ViewApplication = ({singleData}) => {
    const {
            _id,
            fullName,
            email,
            phone,
            location,
            position,
            experience,
            skills,
            coverLetter,
          } = singleData;
    return (
        <div className="border rounded-lg p-4 shadow-sm bg-white">
              <h2 className="text-xl font-semibold">{fullName}</h2>
              <div className="mt-2 text-gray-700 space-y-1">
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Position:</strong> {position}</p>
                <p><strong>Experience:</strong> {experience} years</p>
                <p><strong>Skills:</strong> {skills}</p>
                <p><strong>Cover Letter:</strong> {coverLetter}</p>
              </div>
            </div>
    );
};

export default ViewApplication;