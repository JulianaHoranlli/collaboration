import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://course-api.com/react-tours-project'
function App (){
const [loading, setLoading] =useState(false);
const [tours, setTours]=useState ([]);
const [error, setError]= useState(null);
const removeTour=(id) => {
  const newTours= tours.filter((tour)=> tour.id!== id)
  setTours(newTours)
}

const fetchTours =async()=>{
setLoading(true)
setError(null)
try{
  const data= await fetch(url)
  const tours= data.json()
  setLoading(false)
  setTours(tours)
}
catch (error){
  setLoading(false)
setError("Ndodhi nje gabim gjate ngarkimit te te dhenave!")
}
}

useEffect (()=>{
fetchTours()
},[])

if(loading){
 return (
  <main>
    <Loading />
  </main>
 )
}
if( tours.length===0){
 return(
  <main>
    <div className="title">
      <h2>No tours left!</h2>
       <button className= 'btn' onClick={()=>fetchTours()}>
    Refresh
  </button>
    </div>
  </main>
 )
}
return (
 <main>
  <Tours tours={tours} removeTour={removeTour}/>
 </main>
)
}
 export default App