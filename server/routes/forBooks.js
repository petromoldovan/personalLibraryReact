import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import bcrypt from 'bcrypt';

import User from '../models/user';


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
        const {user, password} = req.body;
        const password_digest = bcrypt.hashSync(password, 10);

        User.forge({
            user, password_digest
        }).save()
        .then(user => res.status(200).json({success: true}))
        .catch(err => res.status(500).json({error: err}))

    } else {
        res.status(400).json(errors)
    }
})

export default router;