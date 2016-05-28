var bill = {
    total: 0,

    add: function(itemCost) {
        this.total += itemCost;
    },
    items: function(menuitem, quantity) {
        switch (menuitem) {
        case "fish":this.add(6.99* quantity);
        break;
        case "chicken":this.add(7* quantity);
        break;
        case "veggie": this.add(4.99* quantity);
        break;
        case "wine": this.add(9.99* quantity);
        break;
        case "Beer": this.add(6* quantity);
        break;
        case "water": this.add(0* quantity);
        break;
        case "cake": this.add(8.99*quantity);
        break;
        case "brownie": this.add(8.99* quantity);
        break;
        case "ice-cream": this.add(2.99 * quantity);
        break;
    }
    return true;
}
};


bill.items("chicken", 1);
bill.items("wine", 3);
bill.items("ice-cream", 1);

var subtotal = bill.total;
console.log('subtotal '+ subtotal);

var tax = subtotal*.07;
console.log('tax ' +tax);

var tip = subtotal*.2;
console.log('tip ' +tip);

var grandtotal = tip + tax + subtotal;
console.log('grand total ' +grandtotal);
console.log('grandtotal ' +'$' +grandtotal.toPrecision(4));

bill.total= 0;
console.log('bill total' + bill.total);





