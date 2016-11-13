import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data) {
    let errors = {};

    //set validation rules here
    /*if(Validator.isEmail(data.user)){
        errors.user = "Field is required"
    }
    if(isEmpty(data.password)){
        errors.password = "Field is required"
    }*/

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

router.post('/', (req, res)=>{
    const {errors, isValid} = validateInput(req.body)

    if(isValid) {
        res.status(200).json({success: "yeaaaah"})
    } else {
        res.status(400).json(errors)
    }
})

export default router;