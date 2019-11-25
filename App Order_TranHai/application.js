let Drinking = function (id, name, price) {
    this.id = id;
    this.name = name;
    this.amount = 0;
    this.price = price;
    this.addAmount = function () {
        this.amount++;
    }
    this.subAmount = function () {
        this.amount--;
    }
}

let Bill = function (id) {
    this.idTable = 't01';
    this.id = id;
    this.setIdTable = function (idTable) {
        this.idTable = idTable;
    }
    this.addBill = function (idTable1, idTable2) {
        this.Bill = this.Bill(idTable1) + this.Bill(idTable2);
    }
    this.Bill = function () {
        let bill = '<p><br>MilkTea while(alive){sleep(); code(); eat();} </p>';
        let price = 0;
        let date = new Date();
        bill += "<p>Date: " + date.toDateString() + "</p>";
        bill += "<p>CodeBill: " + this.id + "</p>";
        bill += '<hr><br>';
        bill += "<table><tr><th>Name Of Drink</th><th>Amount</th><th>Prices</th></tr>";
        for (let i = 0; i < ListDrinking.length; i++)
            if (ListDrinking[i].amount != 0) {
                bill += "<tr><td>" + ListDrinking[i].name + "</td><td>" + ListDrinking[i].amount + "</td>" +
                    "<td>" + ListDrinking[i].amount * ListDrinking[i].price + ".000 VND</td></tr>"
                price += ListDrinking[i].amount * ListDrinking[i].price;
            }
        bill += "<tr><td>Total:</td><td></td><td>" + price + ".000 VND</td></tr>" +
            "<tr><td><input type='button' value='BackToOrder' onclick=''>" +
            "</td></tr></table>";
        display.innerHTML = bill;

    }
    this.printBill = function (idTable) {

    }
}

function bill() {
    bill1.Bill();
}

function clickAdd(index) {
    let idAmount = 'amountDrinking' + index;
    ListDrinking[index].amount++;
    document.getElementById(idAmount).value = ListDrinking[index].amount;
}

function clickSub(index) {
    let idAmount = 'amountDrinking' + index;
    if (ListDrinking[index].amount > 0) {
        ListDrinking[index].amount--;
        document.getElementById(idAmount).value = ListDrinking[index].amount;
    }
}

function displayDrinking(idtable) {
    let drawListDrinking = "<table width='1300' height='600'>";
    let k = 0;
    for (let i = 0; i < 2; i++) {
        drawListDrinking += "<tr>"
        for (let j = 0; j < 4; j++) {
            drawListDrinking += "<td>" +
                "<img src=" + "'images/" + ListDrinking[k].name + ".jpg" + "' width='300' height='300'" +
                "onclick='clickAdd(" + k + ")'><br>" +
                "<p id='nameDrinking'>" + ListDrinking[k].name + "</p>" +
                "<p>Price: " + ListDrinking[k].price + ".000 VND</p>" +
                "<span id='amount'>Amount: </span>"
                + "<button id='subDrinking' onclick='clickSub(" + k + ")'>-</button><input type='text' value='' id='amountDrinking" +
                k + "' onchange=''>" +
                "<button id='addDrinking' onclick='clickAdd(" + k + ")'>+</button><br>" + "</td>";
            k++;
        }
        drawListDrinking += "</tr>";
    }
    drawListDrinking += "<tr><td colspan='4'><br><input onclick='bill()' value='Order' " +
        "type='button' id='order'><br></td></tr></table>";
    display.innerHTML = drawListDrinking;
}

function displayMainApp() {
    let drawTable = "<table width='1300' height='600'>";
    let k = 0;
    for (let i = 0; i < 3; i++) {
        drawTable += "<tr>";
        for (let j = 0; j < 3; j++) {
            k++;
            drawTable += "<td style='border:1px solid #000000; text-align: center' " +
                "onclick= 'displayDrinking(" + k + ")'>Table " + k + "</td>"
        }
        drawTable += "</tr>";
    }
    drawTable += "</table>";
    display.innerHTML = drawTable;
}

function displayLogo() {
    let logo = "<img src='images/logo.jpg' width='1340' height='630' onclick='displayMainApp()'>";
    display.innerHTML = logo;
}

function init() {
    this.displayLogo();
}

let display = document.getElementById('displayApp');

let MilkCoffee = new Drinking('d001', 'MilkCoffee', 20);
let BlackCoffee = new Drinking('d002', 'BlackCoffee', 15);
let Cacao = new Drinking('d003', 'Cacao', 25);
let LemonTea = new Drinking('d004', 'LemonTea', 15);
let MilkTeaMatcha = new Drinking('d005', 'MilkTeaMatcha', 30);
let MilkTeaPearlBlackSugar = new Drinking('d006', 'MilkTeaPearlBlackSugar', 40);
let MilkTeaTaro = new Drinking('d007', 'MilkTeaTaro', 25);
let GoldLotusTea = new Drinking('d008', 'GoldLotusTea', 45);

let ListDrinking = [MilkCoffee, BlackCoffee, Cacao, LemonTea,
    MilkTeaMatcha, MilkTeaPearlBlackSugar, MilkTeaTaro, GoldLotusTea];

let bill1 = new Bill('b01');

init();
