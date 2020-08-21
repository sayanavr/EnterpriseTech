//Code by //Shagun Sharma C0752970
var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });
var myObj=[{cust_id:"c001",name:"Shagun Sharma", point:250},
            {cust_id:"c002",name:"Sakshi Jain", point:150},
            {cust_id:"c003",name:"Anugreh Maccune", point:205},
            {cust_id:"c004",name:"Durgesh Sharma", point:2750},
            {cust_id:"c005",name:"Komal Aggarwal", point:325}
        ];
client.connect((err, db) => {
    if (err) {
        console.log("cannot connect db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("customers");

    collection.insertMany(myObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }

        console.log("Inserted rows!");
    });
    client.close();
});