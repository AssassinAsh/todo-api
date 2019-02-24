const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndDelete("5c729c01492cd22fab896846").then((todo) => {
    console.log(todo);
});