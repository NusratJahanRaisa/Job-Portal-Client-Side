import React, { useEffect, useState } from 'react';
import Hooks from '../../Hooks/Hooks';
import axios from 'axios';
import MyApplicationList from './MyApplicationList';

const MyApplications = () => {

    const {user} = Hooks()
    const [applicationData,setApplicationData] = useState([])

    useEffect(()=>{
    axios.get(`http://localhost:5000/applications?email=${user?.email}`)
    .then(response=>
    setApplicationData(response.data)
    )
    .catch(error=>
    console.log(error)
    )
    },[user])

    return (
        <div className='my-12 '>
           <MyApplicationList applicationData={applicationData}></MyApplicationList> 
        </div>
    );
};

export default MyApplications;