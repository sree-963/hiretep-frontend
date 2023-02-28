//scss
import "./index.css";

// importing dependecis
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// importing different components
import App from "./App";
import AuthContext from './Contex/AuthContext'
import AllRecordsProvider from "./Contex/AllRecords";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
  <BrowserRouter>
  <AllRecordsProvider>
      <App />
      </AllRecordsProvider>
  </BrowserRouter>
  </AuthContext>

);
