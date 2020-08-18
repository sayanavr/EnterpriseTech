//Code by Sayana Veliyil Renny - C0753753
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
var myObj=[{o_id:"O007",menu_id:"M008", quantity:2},
            {o_id:"O008",name:"M007", quantity:6},
            {o_id:"O009",name:"M008", quantity:9}];
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("orders");

    collection.insertMany(myObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }

        console.log("Inserted rows!");
    });
    client.close();
});
