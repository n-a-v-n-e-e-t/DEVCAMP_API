// contains methods for each routes to make the API cleaner

const Bootcamp = require('../models/Bootcamp')

// @desc  : get all bootcamps 
// @route  : /api/v1/bootcamps
// access : PUBLIC
exports.getBootcamps = async (req,res,next)=>{
   try {

    const bootcamps = await Bootcamp.find();
    res.status(200).json({
        sucess:true,
        count:bootcamps.length,
        data:bootcamps
    })

   } catch (error) {
       res.status(500).json({
           success:false,
           data:error
       })
   }
}

// @desc  : get bootcamp with ID 
// @route : GET /api/v1/bootcamps/:id
// access : PUBLIC
exports.getBootcamp = async (req,res,next)=>{
    try {
        console.log(req.params.id);
        const bootcampById = await Bootcamp.findById(req.params.id);
        if(!bootcampById)
            return res.status(404).json({success:false});
        res.status(200).json({
            success:true,
            data:bootcampById
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data:error
        })
    }
}


// @desc  : add new bootcamp 
// @route : POST /api/v1/bootcamps/:id
// access : PUBLIC
exports.createBootcamp = async (req,res,next)=>{
    try{
        const createdBootcamp = await Bootcamp.create(req.body);
        //console.log(createdBootcamp);
        res.status(201).json({
            sucess:true,
            data:createdBootcamp
        })
    }catch(err){
        res.status(400).json({
            sucess:false,
            data:err
        })
    }

}


// @desc  : Update a bootcamp 
// @route : PUT /api/v1/bootcamps/:id
// access : PUBLIC
exports.updateBootcamp = async (req,res,next)=>{
    
    try {
        const updatedBootcamp = await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        if(!updatedBootcamp)
            return res.status(404).json({success:false});
        res.status(200).json({
            success:true,
            data:updatedBootcamp
        })        
    } catch (error) {
        res.status(500).json({
            success:false,
            data:error
        })
    }

}


// @desc  : Delete a bootcamp 
// @route : DEL /api/v1/bootcamps/:id
// access : PUBLIC
exports.deleteBootcamp = async (req,res,next)=>{
    try {
        const bootCamptoDelete = await Bootcamp.findByIdAndDelete(req.params.id);
        
        if(!bootCamptoDelete)
            return res.status(404).json({success:false});
        
        res.status(200).json({success:true});

    } catch (error) {
        res.status(500).json({
            success:false,
            data:error
        })
    }
}
