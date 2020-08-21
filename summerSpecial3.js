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
    const collection = db.db().collection("summerSpecial");
    var criteria={item_id:"i005"};
    var newObj={$set:{sum_id:"sum_7" , name:"Vanilla Shake", item_id:"i007", quantity:"6", specialPrice:12}};
    collection.updateMany(criteria, newObj, function (err, r) {
        if (err) {
            console.log("cannot update obj");
            return;
        }
        console.log("document Updated");
    });
    client.close();
});