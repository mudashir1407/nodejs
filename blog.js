const mongoose = require('mongoose');
const schema = mongoose.schema;

const blogschema = new schema({
    title: {

        type: String,
        require: true
    },
    snippet:{
        type: String,
        require: true
    }
})