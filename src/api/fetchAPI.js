import axios from "axios";
import endpoint from '../config/config'

const getPub = async () => {
  try{
    let response = await axios.get(`${endpoint}/publication`)
    return await response.data
  } catch (err) {
    console.log(err)
  }
}
const insertPub = async (formdata) =>{
  try{
    let response = await axios.post(`${endpoint}/publication`,formdata)
    return await response.data
  } catch (err){
    console.log(err)
  }
}

const deletePub = async (_id) => {
  console.log("myid:",_id)
  try{
    let response = await axios.delete(`${endpoint}/publication/${_id}`)
    return await response.data
  } catch(err) {
    console.log(err)
  }
}

export {getPub,insertPub,deletePub}