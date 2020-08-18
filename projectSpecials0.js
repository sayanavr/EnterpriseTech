//Code by Sayana Veliyil Renny - C0753753
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().createCollection("specials",function(err, res){
        if(err) throw err;
        console.log("Created collection");
    });
    client.close();
});
