const express = require('express');
const router = express.Router(); // Corrected this line
const Person = require('./../models/person');

// POST route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: 'Failed to save data'});
    }
});

// GET route to fetch persons
router.get('/', async (req, res) => {
    try {
        const persons = await Person.find(); // Correct variable
        console.log('data fetched');
        res.status(200).json(persons); // Correct variable
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
});

// GET route to fetch persons by occupation
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
            const response = await Person.find({occupation: workType});
            console.log(response);
            res.status(200).json(response);
        } else {
            res.status(404).send({message: 'Invalid work type'});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        
        // Using async/await without the callback
        const updatedPerson = await Person.findByIdAndUpdate(id, data, { new: true });
        
        if (!updatedPerson) {
            return res.status(404).send({ message: 'Person not found' });
        }

        console.log('data updated');
        res.status(200).json(updatedPerson);
        
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Failed to update data' });
    }
});
router.delete('/:id', async(req, res)=>{
    try{
        const id = req.params.id;
        const deletedPerson = await Person.findByIdAndDelete(id);
        if(!deletedPerson){
            return res.status(404).send({message: 'Person not found'});
            }
            console.log('Person deleted');
            res.status(200).json({message: 'Person deleted'});
            }catch(err){
                console.log(err);
                res.status(500).send({message: 'Failed to delete data'});
                }
                });
module.exports = router;
