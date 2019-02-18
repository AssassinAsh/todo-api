const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ TodoApp', {useNewUrlParser:true}, (err, client) => {
    if(err){
        return console.log("Unable to connect to database.");
    }
    console.log('Connected to MongoDB database.');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return log('Something went wrong', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name: 'Ashvin',
        age: 19,
        location: 'India'
    }, (err, result) => {
        if(err){
            console.log('Something went wrong', err);
        }
        console.log(result.ops);
    })
    client.close();
});