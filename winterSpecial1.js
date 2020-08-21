//Code by Shagun Sharma
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
var myObj=[{sum_id:"wint_1" , name:"Choclate Donuts", item_id:"w001", quantity:"3", specialPrice:6},
            {sum_id:"wint_2" , name:"Choclate Latte", item_id:"w002", quantity:"4", specialPrice:7},
            {sum_id:"wint_3" , name:"Tea Latte", item_id:"w003", quantity:"1", specialPrice:1},
            {sum_id:"wint_4" , name:"Hot Choclate Shake", item_id:"w004", quantity:"5", specialPrice:14},
            {sum_id:"wint_5" , name:"Cookies", item_id:"w005", quantity:"3", specialPrice:4}
        ];
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("winterSpecial");

    collection.insertMany(myObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }

        console.log("Inserted rows!");
    });
    client.close();
});