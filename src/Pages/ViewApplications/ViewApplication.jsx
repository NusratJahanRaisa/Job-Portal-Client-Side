import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const ViewApplication = ({ singleData}) => {
  const {
    // _id,
    // jobId,
    fullName,
    email,
    phone,
    location,
    position,
    experience,
    skills,
    coverLetter,
  } = singleData;

  
  const handleStatusChange = (e,_id) =>{
    // console.log(e.target.value," ",jobId)

    axios.patch(`http://localhost:5000/applications/${_id}`, {status : e.target.value})
    .then(res=>{
        if(res.data.modifiedCount){
           Swal.fire({
                       position: "top-center",
                       icon: "success",
                       title: "Status Updated",
                       showConfirmButton: false,
                       timer: 1500,
                     }); 
        }
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
        {/* <h1>{singleData._id}</h1> */}
      <h2 className="text-xl font-semibold">{fullName}</h2>
      <div className="mt-2 text-gray-700 space-y-1">
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Position:</strong> {position}
        </p>
        <p>
          <strong>Experience:</strong> {experience} years
        </p>
        <p>
          <strong>Skills:</strong> {skills}
        </p>
        <p>
          <strong>Cover Letter:</strong> {coverLetter}
        </p>

        <select onChange={e=>handleStatusChange(e,singleData._id)} defaultValue={singleData.status} className="select">
          <option disabled={true}>Hiring Status</option>
          <option>Pending</option>
          <option>Interview</option>
          <option>Hired</option>
          <option>Rejected</option>
        </select>

      </div>
    </div>
  );
};

export default ViewApplication;
