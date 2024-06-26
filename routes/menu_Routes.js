const express = require('express');
const router = express.Router();

const menu_Model = require('./../models/menuSchema');

router.post('/', async(req, res)=>{
  try{
    const menuData = req.body;
    const menuObj = new menu_Model(menuData);
    const response = await menuObj.save();
    console.log('data saved');
    res.status(200).json(response);
  } catch(err){
     console.log(err);
     res.status(500).json({error:'Internal Server Error'});
  }
});

router.get('/', async(req, res)=>{
  try{
  const menuData = await menu_Model.find();
  console.log('data fetched successfully');
  res.status(200).json(menuData);
  } catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
  
});

router.get('/:tasteType', async(req, res)=>{
  try{
  const tasteType = req.params.tasteType;
  if(tasteType=='sweet'||tasteType=='sour'||tasteType=='bitter'||tasteType=='spicy'){
    const response = await menu_Model.find({taste:tasteType});
    console.log('response fetched');
    res.status(200).json(response);
  } else{
  res.status(404).json({error:'Invalid taste type'});
} 
}catch(err){
  console.log(err);
  res.status(500).json({error:'Internal Server Error'});
}
});

module.exports = router;

//comment added for testing purpose