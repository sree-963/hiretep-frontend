import { createContext ,useState,useEffect} from "react";
import axios from "axios"
export const AllRecords = createContext() ;

const AllRecordsProvider =({children})=>{
    
const [data, setData] = useState("");
const recorddata_backend = async()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const response = await axios.get( `${process.env.REACT_APP_API_URL}/employer/totalemployees`, config);
    const data_record = await response.data.data
    setData(data_record)

    }

 
    useEffect(() => {
recorddata_backend()
    }, [])
    return(
        <AllRecords.Provider value={{data, setData}}>
            {children}
        </AllRecords.Provider>
    )
}

export default AllRecordsProvider