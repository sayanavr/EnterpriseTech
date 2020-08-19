//Code by jugdeep kaur - C0753604
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("branch");
    var criteria={b_id:"1004"};
    var newObj={$set:{b_id:"1005",name:"saggun sharma", salary:"7500"}};
    collection.updateMany(criteria, newObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }
        console.log("Updated collection document");
    });
    client.close();
});