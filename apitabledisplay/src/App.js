import React,{useEffect,useState} from "react";
import "./App.css";
import UserData from "./UserData";
const url="https://jsonplaceholder.typicode.com/users"

const App=()=>{

  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(false);

  const fetchUser = async() =>{
    try{
      const res= await fetch(url);
      const data=await res.json();
      if(data.length>0){
        setTimeout(()=>{
          setLoading(true);
          setUsers(data);
        },3000)
        
      }
      console.log(data)
        }catch(e){
      console.error(e)
    }
  }

  useEffect(()=>{
    fetchUser()

  },[])

  return(
    <div>
      <h1>Api call in React with tabular display</h1>
      <>
      <table>
        <thead>
          <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th> 
          <th>Address</th>
          </tr>
          
        </thead>
        {loading ?  
        <tbody>
          <UserData users={users} />
        </tbody>:<div className="loading_css">Loading</div> }
       
      </table>
      </>
    </div>
  )
}

export default App;