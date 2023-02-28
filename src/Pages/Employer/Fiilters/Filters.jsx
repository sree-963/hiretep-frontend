import React, { useState, useContext } from "react";
import "./Filters.scss";
import image from "../../../Assets/icon-1.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import { AllRecords } from "../../../Contex/AllRecords";
const Filters = () => {


  let dummydata = "XXXXXXXXXXX";
  // const { setSimilar, setSimilarlocation } = useContext()
const {data, setData} = useContext(AllRecords)


// const [data, setData] = useState("");
// console.log(data,"filter")

// const fetchcontext_data = async(r)=>{
//   console.log(r)
//   await setData(r)
// }




  // const filterdata_backend = async () => {

  //   const user = JSON.parse(localStorage.getItem("user"))

  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${user.token}`,
  //     },
  //   };

  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/employer/totalemployees`, config
  //     );
  
  //     setData(response.data.data);
  
  //   } catch (error) {
  //     console.log(error.response.data.message);
  //   }
  // }

  // useEffect(() => {
  //   //   filterdata_backend()
  //   fetchcontext_data(record)
  //    }, [])



  // console.log(data.length)
  // var datalength=data.length;
  // console.log(datalength)
  // let userData = user.data
  // console.log( userData);

  
  const [token, setToken] = useState(null);



  
  const [locations, setLocations] = useState(null);
  const [value, setValue] = React.useState([0, 15]);
  const [searchCtc, setsearchCtc] = useState("");
  const [searchSkill, setsearchSkill] = useState("");

  const [workmode, setWorkmode] = useState("");

  // searching by domain

  const onDomainChange = async(event) => {
    const doaminSelected = event.target.value;
    const filterList = await data.filter((item) => {
      return item.domain === doaminSelected;
    });
    console.log(filterList)

    setLocations(filterList);


  }
  // searching by location

  const onFilterChange = (event) => {
    const selectedLocation = event.target.value;
    const filterList = data.filter((item) => {
      return item.location === selectedLocation;
    });
    console.log(filterList)

    setLocations(filterList);
    // setData(filterList);


  };

  const onRoleFilterChange = (event) => {
    const roleDetails = event.target.value;
    const locationDetails = locations;
    const roledata = locationDetails.filter((item) => {
      return item.role === roleDetails;
    });
    // // setData( roledata );
    // setSimilar( roledata );
  };

  const onCategoryChange = (event) => {
    const categoryvalues = event.target.value;
    const locationDetails = locations;
    const roledata = locationDetails.filter((item) => {
      // return item.role === roleDetails;
    });
    // // setData( roledata );
    // setSimilar( roledata );
  };
  const handleCtc = (event) => {
    const searchedCtc = event.target.value;
    const locationDetails = locations;
    setsearchCtc(searchedCtc);
    const searchCtc = locationDetails.filter((item) => {
      return item.ctc === searchedCtc;
    });
    setData(searchCtc);
  };

  const handleSkill = (event) => {
    const query = event.target.value;
    setsearchSkill(query);
    const locationDetails = locations;
    const searchList = locationDetails.filter((item) => {
      return item.skills.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setData(searchList);
  };

  const handleChange = (event, newValue) => {
    const minExp = value[0];
    const maxExp = value[1];
    const locationDetails = locations;

    const rangeData = locationDetails.filter(
      (item) => item.experience >= minExp && item.experience <= maxExp
    );
    setData(rangeData);
    setValue(newValue);
  };

  //seraching by workmode
  const workmodefilter = (category) => {
    const locationDetails = locations;

    const workmodeData = locationDetails.filter((item) => {
      return item.workmode === category;
    });
    setData(workmodeData);
  };
  // searching by job-type
  const jobtypefilter = (jobtype) => {
    const locationDetails = locations;
    const jobtypedata = locationDetails.filter((item) => {
      return item.jobtype === jobtype
    });
    setData(jobtypedata);
  };
  // seraching for verified  and not verified profiles
  const statusfilter = (status) => {
    const locationDetails = locations;
    // console.log(locationDetails);
    const statusdata = locationDetails.filter((item) => {
      return item.status === status;
    });
    setData(statusdata);
    //  console.log(statusdata);
  };
  const noticeperiodfilter = (period) => {
    const locationDetails = locations;
    const timeperioddata = locationDetails.filter((item) => {
      return item.noticeperiod === period;
    });
    setData(timeperioddata);
  };
  // sreachinng by using Onrole filters
  // const DataFound=data.length
  // console.log(DataFound)
  return (
    <>
      <div className="mainfilter-container">
        <div className="filters-container">
          <div className="filters-nav">
            <div>
              <h2>Filters</h2>
            </div>
            <div>
              <a href="refresh"> Clear all</a>
            </div>
          </div>
          <div className="allfilters-containers">
            <div className="location-filter">
              <h2>Category/Domain</h2>
              <select name="experience" onChange={onDomainChange}>
                <option value="">Category/Domain</option>
                <option value="UI/Ux">UI/UX</option>
                <option value="WEB DEVOLOPMENT">WEB DEVOLOPMENT</option>
                <option value="APPLICATION DEVOLOPMENT">APPLICATION DEVOLOPMENT</option>
                <option value="DIGITAL MARKETING">DIGITAL MARKETING</option>
                {/* <option value=""></option>
                <option value=""></option>
                 */}
              </select>

            </div>
            <div className="location-filter">
              <h2>Location</h2>
              <select name="experience" onChange={onFilterChange}>
                <option value="">Select Location</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Banglore">Banglore</option>
                <option value="Delhi">Delhi</option>
                <option value="Surat">Surat</option>
                <option value="Mysore">Mysore</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Pune">Pune</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Kochin">Kochin</option>
              </select>

            </div>
            <div className="role_filter">
              <h2>Role</h2>
              <select name="role" onChange={onRoleFilterChange}>
                <option value="">Select Role</option>
                <option value="Executive">Executive</option>
                <option value="Associate">Associate</option>
                <option value="Lead">Lead</option>
                <option value="Sr.Lead">Sr.Lead</option>
                <option value="Sr.Engineer">Sr.Engineer</option>
                <option value="Asst.Manager">Asst.Manager</option>
                <option value="Manager">Manager</option>
                <option value="Sr.Manager">Sr.Manager</option>
                <option value="Head">Head</option>
              </select>
            </div>
            <div>
              <h2>Experience </h2>
              <Box sx={{ width: 150 }}>
                <Slider
                  getAriaLabel={() => "Experience range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
            {/* ctc filter */}
            <div className="search-container">
              <h2>CTC</h2>
              <input
                type="text"
                name="search"
                placeholder="Search by ctc"
                value={searchCtc}
                onChange={handleCtc}
              />
            </div>

            <div className="search-container">
              <h2>Skills</h2>
              <input
                type="text"
                name="search"
                placeholder="Search by skill"
                value={searchSkill}
                onChange={handleSkill}
              />
            </div>

            {/* workMode filters */}
            <div className="workmode-buttons-container">
              <h2>Work Mode</h2>
              <div>
                <button onClick={() => workmodefilter("onsite")}>
                  On site
                </button>
              </div>
              <div>
                <button onClick={() => workmodefilter("remote")}>Remote</button>
              </div>
              <div>
                <button onClick={() => workmodefilter("hybrid")}>Hybrid</button>
              </div>
            </div>
            {/* notice period */}
            <div className="notice-period-buttons-container">
              <h2>Notice Period</h2>
              <div>
                <button onClick={() => noticeperiodfilter("immediately")}>
                  Immediately
                </button>
              </div>
              <div>
                <button onClick={() => noticeperiodfilter("15days")}>
                  15 Days{" "}
                </button>
              </div>
              <div>
                <button onClick={() => noticeperiodfilter("1month")}>
                  1 Months{" "}
                </button>
              </div>
              <div>
                <button onClick={() => noticeperiodfilter("2month")}>
                  2 Months
                </button>
              </div>
              <div>
                <button onClick={() => noticeperiodfilter("3month")}>
                  More than 2 Months
                </button>
              </div>
            </div>
            {/* Job type */}
            <div className="job-type-contianers">
              <h2>Job type</h2>
              <div>
                <button onClick={() => jobtypefilter("fulltime")}>
                  Full Time
                </button>
              </div>
              <div>
                <button onClick={() => jobtypefilter("parttime")}>
                  Part time
                </button>
              </div>
              <div>
                <button onClick={() => jobtypefilter("contract")}>
                  Contract
                </button>
              </div>
            </div>
            {/* status */}
            <div className="job-type-contianers">
              <h2>Status</h2>
              <div>
                {" "}
                <button onClick={() => statusfilter("verified")}>
                  Verified
                </button>
              </div>
              <div>
                {" "}
                <button onClick={() => statusfilter("notverified")}>
                  Not Verified
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="profiles-container">
          {/* <h2>{DataFound} Profiles Found</h2> <br /> */}
          <div className="cardmain_container">

            {(locations &&
              locations.map((item, id) => {

                return (
                  <div className="card" key={id}>
                    <div className="internal-container">
                      <div className="image-name-container">
                        <div className="user-profile-image">
                          <img src={image} alt="nouserimage" />
                        </div>
                        <div>
                          <pre>{data.name}</pre>
                          <pre>{dummydata}</pre>
                          <pre>{item.status}</pre>
                        </div>
                      </div>
                      <div>
                        <h4>Location :{item.location}</h4>
                        <pre>Email:{dummydata}</pre>
                        <pre>PhoneNo:{dummydata}</pre>
                        <pre>LinkedinId:{dummydata}</pre>
                        <pre>Role:{item.role}</pre>
                      </div>
                      <div className="view-button-container">
                        <Link to={`/employer/profile/${item._id}`} onClick={() => {
                          localStorage.setItem('viewmore', JSON.stringify(item._id))
                        }}>
                          {" "}
                          <button>View</button>
                        </Link>
                      </div>
                    </div>
                  </div>

                );
              })
            )}


            {/* {
              data && data.map( ( item ) => {
                return (
                  // <pre>{item.email}</pre>

                )
              } )
            } */}
          </div>
        </div>

      </div>
    </>
  );
};

export default Filters;
