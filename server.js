// Required packages
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const _ = require("lodash");

// Initiate app
const app = express();

// Set package paramters
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Connect to Mongoose database
mongoose.connect("mongodb+srv://admin-mike:Test123@cluster0.fx98o.mongodb.net/copybucketDB");

// Create list schemas
const itemSchema = {
    category: String,
    item: String,
    checked: Boolean
}

const Item = mongoose.model("Item", itemSchema);


// GET REQUESTS
app.get("/", function(req, res){

    Item.find({}, function(err, items){
        if (err) {
            console.log(err)
        } else {
            res.render("index", {
                tripItems: items,
            });
        }
    });

});

// POST REQUESTS
app.post("/trip", async function(req, res){
    const newItem =  await new Item ({
        category: "trip",
        item: req.body.newItem,
        checked: false
    })
    
    await newItem.save()
    res.redirect("/");
})

app.post("/rest", async function(req, res){
    const newItem = await new Item ({
        category: "rest",
        item: req.body.newItem,
        checked: false
    })
    
    await newItem.save()
    res.redirect("/");
});

app.post("/act", async function(req, res){
    const newItem = await new Item ({
        category: "act",
        item: req.body.newItem,
        checked: false
    })
    
    await newItem.save()
    res.redirect("/");
});

app.post("/movie", async function(req, res){
    const newItem = await new Item ({
        category: "movie",
        item: req.body.newItem,
        checked: false
    })
    
    await newItem.save()
    res.redirect("/");
});

app.post("/delete", function(req, res) {
 
    const deleteItemName = req.body.deleteItemName;

    Item.findOneAndDelete({item:deleteItemName}, function(err) {
        if (err) {
          res.redirect("/")
        } else {
            res.redirect("/");
        }
    })
})

app.post("/check", function(req, res) {
 
    const checkItemName = req.body.checkItemName;

    // Change status to false
    const filter = {item:checkItemName}

    Item.findOne(filter, function(err, item) {
        item.checked = !item.checked;
        item.save(function(err, results) {
            if (err){
                console.log(err);
            } else{
                res.redirect("/");
            }
        });
    });

    // Item.findOneAndUpdate(filter1,update1), function(err, res){
    //     if (err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log("success_first");
    //         console.log(res);
    //     }
    // };
    // Item.findOneAndUpdate(filter2,update2), function(err, res){
    //     if (err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log("success_second");
    //         console.log(res);
    //         res.redirect("/");
    //     }
    // };
    // Item.findOneAndUpdate(filter3,update3), function(err, res){
    //     if (err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log("success_third");
    //         res.redirect("/");
    //         console.log(res);
    //     }
    // };
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server is listening on port '+ PORT));