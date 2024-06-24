const express = require('express');
const router = express.Router();

const emp_model = require('./../models/empSchema');

router.post('/',async(req, res)=>{
  try{
    const empData = req.body;
    const newEmp = new emp_model(empData);
    const response = await newEmp.save();
    console.log('data saved');
    res.status(200).json(response);
  } catch(err){
    console.log(err)
    res.status(500).json({error:'Internal Server Error'});

  }
});

router.get('/', async(req, res)=>{
  try{
  const empData = await emp_model.find();
  console.log('data fetched');
  res.status(200).json(empData);
  } catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
});

router.get('/:workType',async(req, res)=>{
  try{
    const workType = req.params.workType;
    if(workType=='owner'||workType=='manager'||workType=='chef'||workType=='cleaner'){
      const response = await emp_model.find({work:workType});
      console.log('response fetched');
      res.status(200).json(response);
    } else{
      res.status(404).json({error:'Invalid work type'});
    }
  } catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
});

router.get('/:id',async(req, res)=>{
  try{
    const empId = req.params.id;
    const updatedEmpData = req.body;
    const response = await emp_model.findByIdAndDelete(empId, updatedEmpData,{
      new:true,
      runValidators:true,
    });
    if(!response){
      res.status(404).json({error:'Employee not found'});
    } else {
      console.log('data updated successfully');
      res.status(200).json(response);
    }

  } catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
});


router.delete('/:id',async(req, res)=>{
  try{ 
    const empId = req.params.id;
    const response = await emp_model.findByIdAndDelete(empId);
    if(!response){
      console.log(err);
      res.status(404).json({error:'Invalid employee id'});
    } else{
    console.log('data deleted');
    res.status(200).json({message:"employee deleted successfully"});
    }

  } catch{
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
});

module.exports = router;

