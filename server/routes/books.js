import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import bcrypt from 'bcrypt';

import Book from '../models/book';


let router = express.Router();


router.get('/', (req, res)=>{
    Book.fetchAll().then(books=>{
        if(books) {
            res.status(200).json({books: books})
        } else {
            res.status(500).json({error: 'got no books for you'})
        }
    })
})

export default router;