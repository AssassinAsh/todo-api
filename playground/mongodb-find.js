const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ TodoApp', {useNewUrlParser:true}, (err, client) => {
    if(err){
        return console.log("Unable to connect to database.");
    }
    console.log('Connected to MongoDB database.');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({_id: new ObjectID('5c604ea5d5f7ac19fbb4ba5d')}).toArray().then((docs) => {
    //     console.log('Todos.');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos.', err);
    // });
    
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos.', err);
    })

    db.collection('Users').find({name: 'Ashvin'}).toArray().then((docs) => {
        console.log(`Todos`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos.', err);
    })

   // client.close();
});