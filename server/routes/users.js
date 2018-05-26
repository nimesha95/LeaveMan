var express = require('express');
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

var router = express.Router();

function validateInput(data){
    let errors = {};

    if(validator.isEmpty(data.username)){
        errors.username = 'This field is required'
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'This field is required'
    }
    if(validator.isEmpty(data.passwordConfirmation)){
        errors.passwordConfirmation = 'This field is required'
    }
    if(!validator.equals(data.password , data.passwordConfirmation)){
        errors.passwordConfirmation = "Passowrds don't match" 
    }

    return{
       errors,
       isValid: isEmpty(errors) 
    }
}


router.post('/',function (req, res) {
    const {errors,isValid} = validateInput(req.body);

    if(isValid){
        res.json({sucess: true});
    }
    else{
        res.status(400).json(errors);
    }
	});

module.exports = router;