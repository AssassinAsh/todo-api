const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ TodoApp', {useNewUrlParser:true},(err, client)=> {
    if(err){
        return console.log("Unable to connect to Server.");
    }
    console.log('Connected to MongoDB Server.');
    const db = client.db('TodoApp');

//    db.collection('Todos').findOneAndUpdate({
//        _id : new ObjectID("5c6ada6ac0c2dc26f675f614")
//    }, {
//        $set:{
//            completed: true
//        }
//    },{
//        returnOriginal:false
//    }).then((result) => {
//        console.log(result);
//    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c5dcb36f5d8685bed17ff05')
    },{
        $inc:{
            age: -1
        }
    },
    {
        returnOriginal:false
    }).then((res) => {console.log(res);})

    //client.close();
});