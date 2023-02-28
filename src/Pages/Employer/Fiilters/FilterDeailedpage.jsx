import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom"
import './Detailedpage.scss';
import user from '../../../Assets/icon-1.png';
import { Link } from "react-router-dom";
import { AllRecords } from '../../../Contex/AllRecords';


const FilterDeailedpage = () => {
    const {data} = useContext(AllRecords)

  
   
    const { id } = useParams();

      const recorddata = data.find( ( profile ) => profile._id===id)
      console.log(recorddata.full_name)
      console.log(recorddata.skills.toString())
       for( let item of recorddata.experience){
  console.log(item.company)
  console.log(item.role)
  console.log(item.joiningdate.split("T")[0])
  console.log(item.leavingdate.split("T")[0])
      }
        // recorddata.experience[0].toString())

    

    return (
        <>
            <div className="main-profile-background">
                <div className='main-profilepage'>
                    <div className='image-report-container'>
                        <div className='image-details-container'>
                            <div className='image-container'><img src={user} alt="noimahe" /></div>
                            <div className='image-profile-container'>
                                <h2>{recorddata.full_name}</h2>

                            </div>
                        </div>
                        <div>
                            <h2>Report</h2>
                        </div>
                    </div>
                     <div>
                        {/* <pre><h3>Location:{recorddata.location}</h3> </pre> */}
                        <pre><h3>Email:{recorddata.email}</h3> </pre>
                        <pre><h3>Phone.No:{recorddata.phone}</h3> </pre>
                        {/* <pre><h3>Linked In:{recorddata.linkedinId}</h3> </pre> */}
                    </div>
                    <div className='button-container'>
                        <button>View CV</button>
                    </div>
                    <div className='experience-conatiner'>
                        <h2>Experience:</h2>
                        {/* <p>{recorddata.experience} Year</p> */}
                        {/* console.log( {recorddata.experience.toString()}) */}
                    </div>
                    <div className='education-container'>
                        <h2>Education:</h2>
                        <p>Btech</p>
                    </div>
                    <div className='skills-container'>
                        <h2>Skills:</h2>
                        {/* <div className='skill-container-box'>{data.skills}</div> */}
                    </div>
                    <div className='notice-container'>
                        <h2>Notice Period:</h2>
                        <p>{recorddata.notice_period}</p>
                    </div>
                    <div className='Job-type'>
                        <h2>Job Type:</h2>
                        <p>{recorddata.job_type}</p>
                    </div>
                    <div className='workmode'>
                        <h2>Preferred Work Mode:</h2>
                        <p>{recorddata.work_mode}</p>
                    </div>
                    <div className='close-button'>
                        <Link to={`/profiles`}><button>close</button></Link>
                    </div>
                </div>

                <div>
                    {/* <Similarprofiles /> */}
                </div>
            </div>

{/* <h1>{recorddata.full_name}</h1> */}

        </>

    )
}

export default FilterDeailedpage