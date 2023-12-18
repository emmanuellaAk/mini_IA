const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const Hospital = require('./models/work');

app.use(express.json())


app.post('/hospital',async(req,res) =>{
  try{
    const hospital = await Hospital.create(req.body);
    res.status(200).json (hospital);
  } catch(error) {
    console.log(error.message);
    res.status(500).json ({message:error.message})
  }
})




app.get('/hospital/:id',async(req,res)=>{
  try{
    const {id} = req.params
    const hospital = await Hospital.findId(id);
    res.status(200).json (hospital);
  } catch (error){
    res.status(200).json({message:error.message})
  }
})

app.put('/hospital/:id',async(req,res) => {
  try{
    const {id} = req.params;
    const hospital = await Hospital.findByIdAndUpdate(id, req.body);
      if(!hospital){
        return res.status(404).json({message: `cannot find any patient with ID:${id}`})
      }
      
      res.status(200).json(hospital);
    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

app.delete('/hospital/:id',async(req,res) => {
  try{
     const {id} = req.params
     const hospital = await Hospital.findByIdAndDelete(id);
     if(!hospital){
      return res.status(404).json({message:`cannot find patient with ID:${id}`})
     } 
     res.status(200).json(product)
  } catch (error) {
     res.status(500).json({message:error.message})
  }
})

app.listen(7000, () =>{
  console.log('IT IS WORKING')
} )

mongoose.connect('mongodb://localhost/wins')