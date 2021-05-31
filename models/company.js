const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    }
})

const company = mongoose.model('company', companySchema);
module.exports = company;