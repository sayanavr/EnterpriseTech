//Name:Sakshi Jain, Student ID:C0753352

var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
client.connect((err, db) => {
    if (err) {
        console.log("It cannot be connected to db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("SpringSpecials");
    var criteria={s_id:"S983"};
    var newObj={$set:{s_id:"S983",s_name:"Cappuccino",item_id:"I465",quantity:3,special_price:2}};
    collection.updateMany(criteria, newObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }
        console.log("Updated 1 document successfully..!!!");
    });
    client.close();
});