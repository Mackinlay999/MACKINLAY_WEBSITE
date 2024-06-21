const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    companyOverview: { type: String, required: true },
    positionOverview: { type: String, required: true },
    keyResponsibilities: { type: [String], required: true },
    qualifications: { type: [String], required: true },
    whatWeOffer: { type: [String], required: true },
    imageUrl: { type: String }
});

const jobData = mongoose.model('Job', JobSchema);
module.exports = jobData