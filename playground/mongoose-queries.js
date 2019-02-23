const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

// var id = "5c71852cbcc6da144b21aa37"

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         console.log('Id not found');
//     }
//     console.log('Todos By Id', todo);
// }).catch((e) => {console.log(e);});

userID = "5c6d310d250f7d2f8d7b24ff";

User.findById(userID).then((user) => {
    if(!user){
        return console.log('No user found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {console.log(e);})