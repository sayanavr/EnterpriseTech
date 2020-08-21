//Name:Sakshi Jain, Student ID:C0753352

var mongoclient= require('mongodb').MongoClient;
const uri ="mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true });

var myObj=[{loc_id:"L020",loc_name:"Scarborough", loc_address:"888 Birchmount Rd"},
            {loc_id:"L021",loc_name:"Toronto", loc_address:"2000 Meadowvale Rd"},
            {loc_id:"L022",loc_name:"Mississauga", loc_address:"1275 Mississauga Valley Blvd"}];
client.connect((err, db) => {
    if (err) {
        console.log("It cannot be connected to db" + err);
        return;
    }
    console.log("DataBase connection made successfully");
    const collection = db.db().collection("Location");

    collection.insertMany(myObj, function (err, r) {
        if (err) {
            console.log("cannot add obj");
            return;
        }

        console.log("Inserted three documents!");
    });
    client.close();
});