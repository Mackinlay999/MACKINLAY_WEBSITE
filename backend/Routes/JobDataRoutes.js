const express = require('express');
const JobDataRoutes = express.Router();
const {
    getJobData,
    addJobData,
    updateJobDataById,
    findJobDataById,
    deleteJobDataById
} = require('../Controller/JobDataController');

// GET all job data
JobDataRoutes.get('/get-jobs', getJobData);

// POST new job data
JobDataRoutes.post('/add-jobs', addJobData);

// GET job data by ID
JobDataRoutes.get('/get-jobs/:id', findJobDataById);

// PUT update job data by ID
JobDataRoutes.put('/update-jobs/:id', updateJobDataById);

// DELETE job data by ID
JobDataRoutes.delete('/delete-jobs/:id', deleteJobDataById);

module.exports = JobDataRoutes;
