//accessing element and tagsof html by idor className
let totalInput = document.getElementById("id_total");
let tipPer = document.getElementById("id_tip");
let disPerson = document.getElementsByClassName("dis-no-Person-count");
let disp = document.getElementsByClassName("dis-total-amt");
// declare default number of person
let numPer = 1;
//calling this to execute operation and put it on total
const calculateBill = () => {
    let costAmount = Number(totalInput.value);
    let tipAmount =costAmount * (Number(tipPer.value) / 100);
    let totalAmount = costAmount + tipAmount;
    disp[0].innerText = `$${(totalAmount/numPer).toFixed(2)}`

    //num.toFixed(2) is used to put value upto2 decimal
}

//This made to increase no of person
const increasePerson = () => {
        // if (numPer > 0 &&totalAmount > 0) {
            numPer++;
        // }
        disPerson[0].innerText= `${numPer}`
        calculateBill();
}
const decreasePerson = () => {
    if (numPer > 1) {
        numPer--;
    }
    disPerson[0].innerText= `${numPer}`
    calculateBill();
}