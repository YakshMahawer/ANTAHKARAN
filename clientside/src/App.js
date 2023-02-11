import {React, useEffect, useState} from "react"
import StepForm from "./components/stepform";

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
      <StepForm/>
    </div>
  );
}

export default App;
