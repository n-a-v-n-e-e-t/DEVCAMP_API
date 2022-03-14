// contains methods for each routes to make the API cleaner


// @desc  : get all bootcamps 
// @route  : /api/v1/bootcamps
// access : PUBLIC
exports.getBootcamps = (req,res,next)=>{
    res.status(200).json({sucess:"true" , data:"get all bootcamps -mid"})
}

// @desc  : get bootcamp with ID 
// @route : GET /api/v1/bootcamps/:id
// access : PUBLIC
exports.getBootcamp = (req,res,next)=>{
    res.status(200).json({sucess:"true" , data:`get bootcamp with id: ${req.params.id}`})
}


// @desc  : add new bootcamp 
// @route : POST /api/v1/bootcamps/:id
// access : PUBLIC
exports.createBootcamp = (req,res,next)=>{
    res.status(200).json({sucess:"true" , data:"add a new bootcamp"})
}


// @desc  : Update a bootcamp 
// @route : PUT /api/v1/bootcamps/:id
// access : PUBLIC
exports.updateBootcamp = (req,res,next)=>{
    res.status(200).json({sucess:"true" , data:`update bootcamp with id:${req.params.id}`})
}


// @desc  : Delete a bootcamp 
// @route : DEL /api/v1/bootcamps/:id
// access : PUBLIC
exports.deleteBootcamp = (req,res,next)=>{
    res.status(200).json({sucess:"true" , data:`delete bootcamp with id:${req.params.id}`})
}
