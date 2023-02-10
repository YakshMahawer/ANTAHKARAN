import {React, useEffect, useState} from "react"

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
    </div>
  );
}

export default App;
