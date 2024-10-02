import React, { useState } from "react";
import { Input } from "@mui/material";
import { insertPub } from "../api/fetchAPI";
import { Box, ButtonGroup, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css'
import Button from "./button";


const Modal = ({tbopen, setTbopen,publish,setPublish}) =>{
  const [selectedDate, setSelectedDate] = useState(null) 
 const [formdata, setFormdata] = useState({
  title:'',
  description:'',
  date:'',
  link:''
 })

 const handleChange = (e) =>{
  const {name, value} = e.target
  setFormdata({
    ...formdata, [name] :value
  })
 }
 
 const onChangedate = (date) =>{
  setSelectedDate(date)
  setFormdata({
    ...formdata, 'date':date.toLocaleDateString()
  })
 }
  
 const handleSubmit = (e) => {
  e.preventDefault()

  insertPub(formdata).then((data) =>{
    if(data && data.error){
    } else {
      publish.push(data)
      // setPublish(publish)
      setTbopen(false)
    }
  })
 }
  return(
    <form onSubmit={handleSubmit} style={{width:'500px'}}>
      <TextField fullWidth name="title" value={formdata.title} label='Title' style={{marginTop:'20px'}} onChange={handleChange}/>
      <TextField fullWidth name="description" value={formdata.description} label='Description' onChange={handleChange} style={{marginTop:'20px'}}/>
      <Box>
        <label>Date:</label>
        <DatePicker className="datePicker" name='date'  dateFormat="yyyy/MM/dd" selected={selectedDate} onChange={onChangedate} required/>
      </Box>
      <TextField fullWidth label='Link Publication' value={formdata.link} name="link" onChange={handleChange} style={{marginTop:'20px'}}/>
      
      <button type="submit" >submit</button>
      <Button bg="#652" title="cancel" onClick={()=>setTbopen(false)} />
    </form>
  )
}

export default Modal