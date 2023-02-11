import {React, useEffect, useState} from "react"
import StepForm from "./components/stepform";
import Adminlogin from "./components/AdminLogin";
import AfterAdminLogin from "./components/AfterAdminlogin";

function App() {
  const [testData, setData] = useState([{}]);
  useEffect(()=>{
    const get = async () => fetch("/test").then((res) =>
      console.log(res.json())
    )
    get();

  }, []);
  return (
    <div>
      <Adminlogin/>
    </div>
  );
}

export default App;
