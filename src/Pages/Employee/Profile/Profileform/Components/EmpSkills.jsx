import React from "react";
import { useState, useEffect } from "react";

//scss
import "./Empstyle.scss";

// mui icons
// import CheckIcon from "@mui/icons-material/Check";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";

// importing 
import axios from "axios";

const EmpSkills = () => {
  const [skillsdata, setskillsdata] = useState("");
  const userToken = JSON.parse(localStorage.getItem("user"));
  const { token } = userToken;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getskilldata = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/employee/getprofile`,
      config
    );
    setskillsdata(response.data.data);
  };

  useEffect(() => {
    getskilldata();
  }, []);
  // console.log(skillsdata.skill)

  const [skill, setskill] = useState({
    skill: "",
  });
  const updatehandlerskill = (e) => {
    const { name, value } = e.target;
    setskill({
      ...skill,
      [name]: value,
    });
  };

  const createskilldata = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/employee/updateSkills`,
        skill,
        config
      );
      setskillsdata([...skillsdata, response.data]);
      setskill({
        skill: " ",
      });
      getskilldata();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteskilldata = async (item) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/employee/deleteSkills/${item}`,
        config
      );
      getskilldata();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="field">
      <h2>Skill</h2>
      <div className="input-field">
        {" "}
        {/* <input
          type="text"
          name="skill"
          placeholder="Skills"
          value={skill.skill}
          onChange={updatehandlerskill}
        /> */}
        <select name="skill" id="skill"
                   value={skill.skill}
                    onChange={updatehandlerskill}>
                    <option value="">select Skills</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="SASS">SASS</option>
                    <option value="JAVASCRIPT"> JAVASCRIPT</option>
                    <option value="BOOTSTRAP">BOOTSTRAP</option>
                    <option value="REACTJS">REACTJS</option>
                    <option value="REACTNATIVE">REACTNATIVE</option>
                    <option value="ANGULARJS">ANGULARJS</option>
                    <option value="MATERIALUI">MATERIALUI</option>
                    <option value="NODEJS">NODEJS</option>
                    <option value="EXPRESSJS">EXPRESSJS</option>
                    <option value="MONGODB">MONGODB</option>
                    <option value="SQL">SQL</option>
                    <option value="MYSQL">MYSQL</option>
                    <option value="PYTHON">PYTHON</option>
                    <option value="AI/ML">AI/ML</option>
                    <option value="PHP">PHP</option>
                    <option value="DOTNET">DOTNET</option>
                    <option value="C#">C#</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="ORACLE">ORACLE</option>
                    <option value="FLUTTER">FLUTTER</option>
                    <option value="SWIFT">SWIFT</option>
                    <option value="EMAILMARKETING">EMAILMARKETING</option>
                    <option value="SOCIALMEDIAMARKETING">SOCIALMEDIAMARKETING</option>
                    <option value="MANUALTESTING">MANUALTESTING</option>
                    <option value="AUTOMATIONTESTING">AUTOMATIONTESTING</option>
                    <option value="DATASCIENCE">DATASCIENCE</option>
                    <option value="SELENIUMTESTING">SELENIUMTESTING</option>
                    <option value="BLOCKCHAIN">BLOCKCHAIN</option>
                    <option value="IOT">IOT</option>
                    <option value="RUBY">RUBY</option>
                    <option value="ADOBEXD">ADOBEXD</option>
                    <option value="PRISMA">PRISMA</option>
                  </select>
        <button className="removebg" onClick={createskilldata}>
        <AddIcon
            sx={{ color: "green", marginLeft: "25px", marginTop: "20px",fontSize: "40px" }}
          />
        </button>
      </div>

      {skillsdata &&
        skillsdata.skills.map((item) => {
          return (
            <div className="skill-container-styling">
               <div className="container-size-skill">
                <div>
                  <h1>{item}</h1>
                </div>
              </div>
              <button
                className="removebg"
                onClick={() => {
                  deleteskilldata(item);
                }}
              >
                
                <CloseIcon
                   sx={{ color: "red", marginLeft: "25px",marginTop: "30px", fontSize: "40px" }}
                />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default EmpSkills;
