import React, { useEffect, useState } from "react";
import Button from "../component/button";
import "./index.css"
import Modal from "../component/modal";
import { deletePub, getPub } from "../api/fetchAPI";


const Home = () =>{
  const [tbopen,setTbopen] = useState(false)
  const [publish, setPublish] = useState([])
  const addId = (data) =>{
    let temp = []
    data.map((item,index) =>((temp[index] = item),(temp[index].id = index+1)))
    return temp;
  }
  useEffect(() =>{
    getPub().then((data) => {
      const temp = addId(data)
      setPublish(temp);
    })
  },[])
  console.log(publish)
  const deleting = (index) =>{
    deletePub(index).then((data)=>{
      const temp = addId(data)
      console.log("del",temp)
      setPublish(temp)
    })
  }
  return(
    <div className="container" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1 style={{textAlign:'center'}}>Welcome to Admin Page!</h1>
      <h2 style={{textAlign:'center'}}>Publication Data</h2>
      <button style={{border:'none', backgroundColor:'#123432', padding:'10px', color:'white',borderRadius:'5px'}} onClick={()=>setTbopen(true)}>New Publication</button>
      <div>
        <table>
          <thead>
            <tr>
            <th>ID</th>
            <th>title</th>
            <th>date</th>
            <th>image</th>
            <th>action</th>
            </tr>
          </thead>
          <tbody>
           
            
              {
                publish?.map((item,index) =>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.date}</td>
                    <td>{item.description}</td>
                    <td><Button bg='red' title='Delete' onClick={()=>deleting(item._id)}/></td>
                  </tr>
                ))
              }
            
          </tbody>
        </table>
      </div>
      <div>
        {
          tbopen?<Modal setTbopen = {setTbopen} tbopen={tbopen} setPublish={setPublish} publish = {publish}/>:""
        }
      </div>
    </div>
  )
}

export default Home