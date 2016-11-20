import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import bcrypt from 'bcrypt';

import Books from '../models/book';


let router = express.Router();

router.post('/', (req, res)=>{
    const {title, author, year, volumes} = req.body;

    Books.forge({
        title, author, year, volumes
    }, {hasTimestamps: true}).save()
        .then(book => res.status(200).json({success:'posted a book'}))
        .catch(err => res.status(500).json({error:err}))
})

router.get('/', (req, res)=>{
    Books.fetchAll().then(books=>{
        if(books) {
            res.status(200).json({books: books})
        } else {
            res.status(500).json({error: 'got no books for you'})
        }
    })
})

export default router;