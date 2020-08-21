//Code by Shagun Sharma
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("customers");
    var criteria={cust_id:"c004"};
    collection.deleteOne(criteria, function (err, r) {
        if (err) {
            console.log("cannot delete");
            return;
        }
        console.log("Deleted collection document");
    });
    client.close();
});