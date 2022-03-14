const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    //TODO
    res.status(200).json({sucess:"true" , data:"get all bootcamps"})
})

router.get('/:id',(req,res)=>{
    //TODO
    res.status(200).json({sucess:"true" , data:`get bootcamp with id :${req.params.id}`})
})

router.post('/',(req,res)=>{
    //TODO
    res.status(200).json({sucess:"true" , data:"add a new bootcamp"})
})

router.put('/:id',(req,res)=>{
    //TODO
    res.status(200).json({sucess:"true" , data:`update bootcamp with id:${req.params.id}`})
})

router.delete('/:id',(req,res)=>{
    //TODO
    res.status(200).json({sucess:"true" , data:`delete bootcamp with id:${req.params.id}`})
})

module.exports = router;