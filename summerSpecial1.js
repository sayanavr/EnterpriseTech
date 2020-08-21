//Code by Shagun Sharma
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
var myObj=[{sum_id:"sum_1" , name:"Mango Creamy Chill", item_id:"i001", quantity:"3", specialPrice:6},
            {sum_id:"sum_2" , name:"Vanilla Creamy Chill", item_id:"i002", quantity:"4", specialPrice:4},
            {sum_id:"sum_3" , name:"Soft Serve", item_id:"i003", quantity:"1", specialPrice:1},
            {sum_id:"sum_4" , name:"Coke", item_id:"i004", quantity:"2", specialPrice:3},
            {sum_id:"sum_5" , name:"Chilled Maza", item_id:"i005", quantity:"3", specialPrice:9}
        ];
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("summerSpecial");

    collection.insertMany(myObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }

        console.log("Inserted rows!");
    });
    client.close();
});