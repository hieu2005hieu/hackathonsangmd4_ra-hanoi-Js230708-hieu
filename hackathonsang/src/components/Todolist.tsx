import { FiEdit2 } from "react-icons/fi"; 
import { GiConfirmed } from "react-icons/gi"; 
import { AiFillDelete } from "react-icons/ai"; 
import { RxSwitch } from "react-icons/rx"; 
import React, { useEffect, useState } from 'react'
import "../components/Todolist.scss"
import axios from "axios";
interface todolist{
  id: number,
  username: string,
  status:boolean
}
export default function Todolist() {
  const [name, setName] = useState("")
  const [flag,setFlag]=useState(false)
  const [tasck, setTasck] = useState<todolist[]>([])
  const [status,setStatus]=useState(0)
  const data = async () => {
    const response = await axios.get("http://localhost:8000/api/v1/todolist")
    setTasck(response.data.todolist)
  }
  
  const handleOnclick = async () => {
    if (name=="") {
      alert("khong duoc de trong")
    } else {
       await axios.post("http://localhost:8000/api/v1/todolistadd", {
      id: Math.floor(Math.random() * 99999),
      name: name,
      status:false
   })
  setFlag(!flag)
   setName("")
    }
   
  }
  const handleDelete = async (id: number) => {
    if (confirm("ban co mon xoa khong")) {
       await axios.delete(`http://localhost:8000/api/v1/todolistdelete/${id}`)
  setFlag(!flag)
    }
    
  }
  const handleStatus = async (item: any) => {
    setStatus(1)
      await axios.put(`http://localhost:8000/api/v1/todolistupdate/${item.id}`,status)
  setFlag(!flag)
  }
  useEffect(() => {
    data()
  },[flag])
  return (
      <>
          <div className="container">
                <div className="header">
              <h2>Todo List</h2>
              <p>Get Things done,one item at a time</p>

              </div>
              <hr />
        <div className="main">
          {tasck.map((item, index) => {
            return  <><div className="main-conten">
            
              <span>{ item.username}</span>
                      <span><GiConfirmed style={{ fontSize: 20 }} onClick={()=>handleStatus(item)}/></span>
              
                      
              <span><AiFillDelete style={{fontSize:20}} onClick={()=>handleDelete(item.id)}/></span>
                  </div><br />
            </>
          })}
         
             
              <p>Move done items at the end? <RxSwitch style={{fontSize:30,position:"relative",top:10,color:"white"}}/></p>
          </div>
          <div className="food">
              <h3>Add to the todolis</h3>
              <input type="text"  placeholder="Add to the todoli" onChange={(e)=>setName(e.target.value)} value={name} />
              <button onClick={handleOnclick}>Add items</button>
          </div>
          </div>
        
    </>
  )
}
