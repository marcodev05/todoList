// jshint esversion6

const express = new require('express');
const bodyParser = new require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["vary", "lasopy", "misao"];
app.get('/', function (req, resp) {

    let today = new Date();
    let currentday = today.getDay();
    let day = "";

    switch (currentday) {
        case 1:
            day = "Alatsinainy"
            break;

        case 2:
            day = "Talata"
            break;

        case 3:
            day = "Alarobia"
            break;

        case 4:
            day = "Alakamisy"
            break;

        case 5:
            day = "zoma"
            break;

        case 6:
            day = "Sabotsy"
            break;

        case 7:
            day = "Alahady"
            break;

        default:
            break;
    }

    resp.render("list", { daty: day, newItem: items });

});


app.post("/", function (req, resp) {

    item = req.body.item;
    items.push(item);

    resp.redirect("/");

});

app.listen(3000, function () {
    console.log("l'application est demarrer sur le port 3000");
});

