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
    const collection = db.db().collection("specials");
    var criteria={s_id:"S006"};
    var newObj={$set:{s_id:"S006",s_name:"Fundae Sundae",item_id:"M006",quantity:2,special_price:3}};
    collection.updateMany(criteria, newObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }
        console.log("Updated collection document");
    });
    client.close();
});
