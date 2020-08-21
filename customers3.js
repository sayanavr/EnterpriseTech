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
    var criteria={cust_id:"c003"};
    var newObj={$set:{cust_id:"c012",name:"Paramjit Kaur", point:105}};
    collection.updateMany(criteria, newObj, function (err, r) {
        if (err) {
            console.log("cannot update obj");
            return;
        }
        console.log("document Updated");
    });
    client.close();
});