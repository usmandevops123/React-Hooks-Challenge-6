import React, { useState } from "react";

const App=()=>{ 
  let newtime=new Date().toLocaleTimeString();
  const [Ctime,setCtime]=useState(newtime);
  const UpdatedTime=()=>{
   let newCtime=new Date().toLocaleTimeString();
    setCtime(newCtime);
  };
  return(
<>  
<h1>{Ctime} </h1> 
<button onClick={UpdatedTime}> New Time</button>
</>
  );
}; 
export default App;