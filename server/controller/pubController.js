const publicationData = require('../models/publication')

const getPublications = async (req, res) => {
  try{
    let data = await publicationData.find()
    res.json(data)
  } catch {
    res.status('400').json({error:'error fetching data'})
  }
}

const insertPublication = async (req,res) => {
  console.log("BODY:",req.body)
  try{
    const newPublication = new publicationData(req.body)
    const result=await newPublication.save()
    return res.status(200).json(result)
  } catch {
    res.status('400').json({error:'error saving data'})
  }
}

const deletePublication = async(req,res) =>{
  console.log('params:',req.params)
  try{
    let result = await publicationData.deleteOne({_id:req.params.pubid})
    console.log('req:',req.params.pubid)
    let data = await publicationData.find()
    res.json(data)
  } catch(err){
    return res.status(400).json({error:err})
  }
}
module.exports = {insertPublication,getPublications,deletePublication}