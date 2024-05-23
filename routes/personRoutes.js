const express = require('express');
const router = express.Router();
const Person = require('./../models/Person'); //models do file piche h


router.post('/', async (req, res) => {
    try {
        // assuming the request body contains the person data
        const data = req.body
        //create a new person document using the moongoose mode//blank person
        const newPerson = new Person(data);
        //save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }


})


router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType; //extract the worktyoe from url parameter
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log('reponse fetched');
            res.status(200).json(response);
        }
        else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

//update method
///:id is variable
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // extract the id from the url parameter
        const updatedPersonData = req.body; // updated data for the person // json 

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, //return the updated document
            runValidators: true, // run mongoose validation // it will chk the required field in person
        })
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data updated');
        res.status(200).json(response);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
//for deletion
router.delete('/:id', async(req, res)=>{
    try{
        const personId = req.params.id; // extract the id from the url parameter

        //assuming you have a person model
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data deleted');
        res.status(200).json({message : 'person deleted successfully'});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;