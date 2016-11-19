import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

import User from '../models/user';


let router = express.Router();

router.post('/', (req, res)=>{
    const {user, password} = req.body;

    User.query({
        where: {user: user}
    }).fetch().then(user => {
        if(user){
            if(bcrypt.compareSync(password, user.get('password_digest'))) {
                const token = jwt.sign({
                    id: user.get('id'),
                    username: user.get('user')
                }, config.jwtSecret);
                res.status(200).json({ token })
            } else {
                res.status(401).json({error: 'user was not found'})
            }
        } else {
            res.status(401).json({error: 'user was not found'})
        }
    })
})

export default router;