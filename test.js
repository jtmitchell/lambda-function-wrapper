// Our Lambda function fle is required
var importify = require('./lambda-function-wrapper.js');

// The Lambda context "done" function is called when complete with/without error
var context = {
    done: function (err, result) {
        console.log('------------');
        console.log('Context done');
        console.log('   error:', err);
        console.log('   result:', result);
    },
    succeed: function (result) {
        console.log('------------');
        console.log('Context succeed');
        console.log('   result:', result);
    },
    fail: function (err) {
        console.log('------------');
        console.log('Context fail');
        console.log('   error:', err);
    }

};

// Simulated S3 bucket event
var event = {
    name: 'World'
};

// Call the Lambda function
importify.handler(event, context);
