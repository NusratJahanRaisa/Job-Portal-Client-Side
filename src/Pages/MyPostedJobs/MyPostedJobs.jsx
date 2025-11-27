import React, { useEffect, useState } from 'react';
import Hooks from '../../Hooks/Hooks';
import axios from 'axios';
import PostedJobsList from './PostedJobsList';

const MyPostedJobs = () => {

    const {user} = Hooks()
    const [myJobData,setMyJobData] = useState([])

    useEffect(()=>{
       axios.get(`http://localhost:5000/jobs?email=${user?.email}`)
       .then(res=>setMyJobData(res.data))
       .catch(err=>console.log(err))
    },[user?.email])

    

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-blue-700 font-bold text-center text-4xl my-10'>Posted Jobs</h1>
            <PostedJobsList myJobData={myJobData}></PostedJobsList>
        </div>
    );
};

export default MyPostedJobs;