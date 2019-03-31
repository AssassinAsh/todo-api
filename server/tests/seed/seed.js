const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const jwt = require('jsonwebtoken');
const {User} = require('./../../models/users');


const userOneId = new ObjectID;
const userTwoId = new ObjectID;
const users = [{
    _id: userOneId,
    email: 'ashvin@eg.com',
    password: 'user1pass',
    tokens: [{
        access:'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email:'rocky@eg.com',
    password: 'user2pass',
    
}];

const todos = [{
    _id: new ObjectID,
    text: 'First test todo'
},{
    _id: new ObjectID,
    text: 'Second test todo',
    completed:  true,
    completedAt: 786
}]


const populateTodos = (done) => {
    Todo.deleteMany({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
}

const populateUsers = (done) => {
    User.deleteMany({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
        return users;
        // return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};