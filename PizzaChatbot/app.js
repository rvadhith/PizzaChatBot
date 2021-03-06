let vegPizzas = [
    {   id: 1,
        name: "Just margerita",
        sp: 100,
        mp: 150,
        lp: 200,
    },
    {   
        id: 2,
        name: "Veg supreme",
        sp: 150,
        mp: 200,
        lp: 250,
    },
    {
        id: 3,
        name: "Veg classic",
        sp: 200,
        mp: 250,
        lp: 300,
    }
];

let nonvegPizzas = [
    {   id: 4,
        name: "Chicken Pizza",
        sp: 150,
        mp: 200,
        lp: 250,
    },
    {   
        id: 5,
        name: "Chicken supreme",
        sp: 200,
        mp: 300,
        lp: 350,
    },
    {
        id: 6,
        name: "Chicken classic",
        sp: 300,
        mp: 350,
        lp: 400,
    }
];

let orderDetails = [
    {
        id: 1,
        customerName: "Sam",
        customerPhoneNumber: 9842163298,
        customerAddress: "16D - ABT Residency, Kodambakkam, Chennai - 600028",
        pizza: "Veg Classic",
        size: "Medium",
        quantity: 2,
        OrderStatus: "Being Cooked"
    }
]

let vegPizzaIds = [];
let vegPizzaNames = [];
let vegPizzaSmallPrices = [];
let vegPizzaMediumPrices = [];
let vegPizzaLargePrices = [];


for(let i = 0; i < vegPizzas.length; i++){
    vegPizzaIds.push(vegPizzas[i].id);
    vegPizzaNames.push(vegPizzas[i].name);
    vegPizzaSmallPrices.push(vegPizzas[i].sp);
    vegPizzaMediumPrices.push(vegPizzas[i].mp);
    vegPizzaLargePrices.push(vegPizzas[i].lp);
}

let nonvegPizzaIds = [];
let nonvegPizzaNames = [];
let nonvegPizzaSmallPrices = [];
let nonvegPizzaMediumPrices = [];
let nonvegPizzaLargePrices = [];

for(let j = 0; j < nonvegPizzas.length; j++){
    nonvegPizzaIds.push(nonvegPizzas[j].id);
    nonvegPizzaNames.push(nonvegPizzas[j].name);
    nonvegPizzaSmallPrices.push(nonvegPizzas[j].sp);
    nonvegPizzaMediumPrices.push(nonvegPizzas[j].mp);
    nonvegPizzaLargePrices.push(nonvegPizzas[j].lp);
}


let isVegPizza = [];
let pizzaChosen = [];
let sizeChosen = [];
let quantityChosen = [];

let customerName = [];
let customerPhoneNumber = [];
let customerAddress = [];


let newId = 0;

let orderIds = [];
let orderStatuses = [];
let orderIdsSorted = [];

for(let l = 0; l < orderDetails.length; l++){    
    orderIds.push(orderDetails[l].id);
    orderStatuses.push(orderDetails[l].OrderStatus);
}

console.log(orderIds);

if(orderDetails.length == 0){
    newId = 1;
}
else{
    for(let k = 0; k < orderDetails.length; k++){ 
        orderIdsSorted.push(orderDetails[k].id);
        orderIdsSorted.sort(function(a,b){return a -b});
        newId = orderIdsSorted[orderIdsSorted.length - 1] + 1;
    }
}

let makeOrderButton = document.getElementById("make-order"); 
makeOrderButton.addEventListener("click", makeOrder);

let trackOrderButton = document.getElementById("track-order"); 
trackOrderButton.addEventListener("click", trackOrder);


function trackOrder(){
    trackOrderButton.removeEventListener("click", trackOrder);
    trackOrderButton.removeEventListener("click", makeOrder);
    let myDiv = document.getElementById("chat-area");
    let inputButton =  document.getElementById("input-button");

    let orderIdRequest = document.createElement('p');
    orderIdRequest.className = "bot-text";
    let orderIdRequestText = document.createTextNode(`Kindly enter your order id to be tracked`);
    orderIdRequest.appendChild(orderIdRequestText);
    myDiv.appendChild(orderIdRequest);

    inputButton.addEventListener("click", displayOrderStatus);
}

function displayOrderStatus(){
    makeOrderButton.removeEventListener("click", makeOrder);
    document.getElementById("input-button").removeEventListener("click", displayOrderStatus);
    let myDiv = document.getElementById("chat-area");

    let inputField = document.getElementById("input-data");
    inputField.setAttribute("type","number");
    let idInput = inputField.value;
    inputField.value = "";

    let displayOrderId = document.createElement('p');
    displayOrderId.className = "user-text";
    let displayOrderIdText = document.createTextNode(`${idInput}`);
    displayOrderId.appendChild(displayOrderIdText);
    myDiv.appendChild(displayOrderId);

    if(!(isNaN(idInput))){
        idInput = parseInt(idInput);
    }
    
    
    if(orderIds.indexOf(idInput) >= 0){
        let index = orderIds.indexOf(idInput);
        let getOrderStatus = document.createElement('p');
        getOrderStatus.className = "bot-text";
        let getOrderStatusText = document.createTextNode(`Your order is ${orderDetails[index].OrderStatus}`);
        getOrderStatus.appendChild(getOrderStatusText);
        myDiv.appendChild(getOrderStatus);
    }
    else{
        let getOrderStatus = document.createElement('p');
        getOrderStatus.className = "bot-text";
        let getOrderStatusText = document.createTextNode(`Sorry the entered id doesn't exist`);
        getOrderStatus.appendChild(getOrderStatusText);
        myDiv.appendChild(getOrderStatus);
    }

    

}

function makeOrder(){
    makeOrderButton.removeEventListener("click", makeOrder);
    let myDiv = document.getElementById("chat-area");
    
    let pizzaTypePreference = document.createElement('p');
    pizzaTypePreference.className = "bot-text";
    let pizzaTypePreferenceText = document.createTextNode(`Please let us know whether you prefer veg pizza or nonveg pizza`);
    pizzaTypePreference.appendChild(pizzaTypePreferenceText);
    
    let btn1 = document.createElement('button');
    btn1.id = 'veg';
    let btn2 = document.createElement('button');
    btn2.id = 'nonveg';
    let btntext1 = document.createTextNode(`Veg Pizza`);
    let btntext2 = document.createTextNode(`Non Veg Pizza`);
    btn1.appendChild(btntext1);
    btn2.appendChild(btntext2);

    myDiv.appendChild(pizzaTypePreference);
    myDiv.appendChild(btn1);
    myDiv.appendChild(btn2);

    btn1.addEventListener("click", selectPizza);
    btn2.addEventListener("click", selectPizza);
}


// function process(){
//     // document.getElementById("chat-area").innerHTML = `<p> ${pizzaOrderQuestions[0]} </p>`
//     // var btn1 = document.createElement("button").innerText = `${yesOrNo[0]}`;
//     // var btn2 = document.createElement("button").innerText = `${yesOrNo[1]}`;
//     // document.getElementById("chat-area").appendChild(btn1);
// }


function selectPizza(){
    let vegButton = document.getElementById("veg");
    vegButton.removeEventListener("click", selectPizza);
    let nonvegButton = document.getElementById("nonveg");
    nonvegButton.removeEventListener("click", selectPizza);

    let myDiv = document.getElementById("chat-area");
    let pizzaType = this.id;
    
    if(pizzaType === "veg"){
        let vegPizzaContainer = document.createElement('div');
        vegPizzaContainer.id = 'vegpizza-container' 
        myDiv.appendChild(vegPizzaContainer);


        for(let j = 0; j < vegPizzas.length; j++){
            let vegPizza = document.createElement('div');
            vegPizza.className = 'pizzas';

            let vegPizzaName = document.createElement('p');
            let vegPizzaNameText = document.createTextNode(`${vegPizzaNames[j]}`);
            vegPizzaName.appendChild(vegPizzaNameText);

            let vegPizzaPriceList = document.createElement('ul');
            let vegPizzaSmallPrice = document.createElement('li');
            let vegPizzaMediumPrice = document.createElement('li');
            let vegPizzaLargePrice = document.createElement('li');

            vegPizzaSmallPriceData = document.createTextNode(`S-${vegPizzaSmallPrices[j]}`); 
            vegPizzaMediumPriceData = document.createTextNode(`M-${vegPizzaMediumPrices[j]}`);
            vegPizzaLargePriceData = document.createTextNode(`L-${vegPizzaLargePrices[j]}`);

            vegPizzaSmallPrice.appendChild(vegPizzaSmallPriceData);
            vegPizzaMediumPrice.appendChild(vegPizzaMediumPriceData);
            vegPizzaLargePrice.appendChild(vegPizzaLargePriceData);

            vegPizzaPriceList.appendChild(vegPizzaSmallPrice);
            vegPizzaPriceList.appendChild(vegPizzaMediumPrice);
            vegPizzaPriceList.appendChild(vegPizzaLargePrice);

            let vegPizzaChoice = document.createElement('button');
            vegPizzaChoice.id = `${j}`;
            vegPizzaChoice.addEventListener("click", selectSize);

            var vegPizzaChoiceData = document.createTextNode(`Choose`);
            vegPizzaChoice.appendChild(vegPizzaChoiceData);

            vegPizza.appendChild(vegPizzaName);
            vegPizza.appendChild(vegPizzaPriceList);
            vegPizza.appendChild(vegPizzaChoice);
            vegPizzaContainer.appendChild(vegPizza);
        }
    
        isVegPizza.push(true);
    }
    else{
        let nonvegPizzaContainer = document.createElement('div');
        nonvegPizzaContainer.id = 'nonvegpizza-container' 
        myDiv.appendChild(nonvegPizzaContainer);


        for(let j = 0; j < nonvegPizzas.length; j++){
            let nonvegPizza = document.createElement('div');
            nonvegPizza.className = 'pizzas';

            let nonvegPizzaName = document.createElement('p');
            let nonvegPizzaNameText = document.createTextNode(`${nonvegPizzaNames[j]}`);
            nonvegPizzaName.appendChild(nonvegPizzaNameText);
            
            let nonvegPizzaPriceList = document.createElement('ul');
            let nonvegPizzaSmallPrice = document.createElement('li');
            let nonvegPizzaMediumPrice = document.createElement('li');
            let nonvegPizzaLargePrice = document.createElement('li');

            nonvegPizzaSmallPriceData = document.createTextNode(`S-${nonvegPizzaSmallPrices[j]}`); 
            nonvegPizzaMediumPriceData = document.createTextNode(`M-${nonvegPizzaMediumPrices[j]}`);
            nonvegPizzaLargePriceData = document.createTextNode(`L-${nonvegPizzaLargePrices[j]}`);

            nonvegPizzaSmallPrice.appendChild(nonvegPizzaSmallPriceData);
            nonvegPizzaMediumPrice.appendChild(nonvegPizzaMediumPriceData);
            nonvegPizzaLargePrice.appendChild(nonvegPizzaLargePriceData);

            nonvegPizzaPriceList.appendChild(nonvegPizzaSmallPrice);
            nonvegPizzaPriceList.appendChild(nonvegPizzaMediumPrice);
            nonvegPizzaPriceList.appendChild(nonvegPizzaLargePrice);

            let nonvegPizzaChoice = document.createElement('button');
            nonvegPizzaChoice.id = `${j}`;
            nonvegPizzaChoice.addEventListener("click", selectSize);

            let nonvegPizzaChoiceData = document.createTextNode(`Choose`);
            nonvegPizzaChoice.appendChild(nonvegPizzaChoiceData);

            nonvegPizza.appendChild(nonvegPizzaName);
            nonvegPizza.appendChild(nonvegPizzaPriceList);
            nonvegPizza.appendChild(nonvegPizzaChoice);
            nonvegPizzaContainer.appendChild(nonvegPizza);
        }

        isVegPizza.push(false);
    }

}


function selectSize(){
    
    let chosenPizza = "";
    if(isVegPizza[isVegPizza.length - 1]){
        for(let a = 0; a < vegPizzas.length; a++){
            document.getElementById(`${a}`).removeEventListener("click", selectSize);
        }
        chosenPizza = vegPizzaNames[this.id];
    } 
    else{
        for(let a = 0; a < nonvegPizzas.length; a++){
            document.getElementById(`${a}`).removeEventListener("click", selectSize);
        }
        chosenPizza = nonvegPizzaNames[this.id];
    }


    let myDiv = document.getElementById("chat-area");
    let pizzaSelected = document.createElement('p');
    pizzaSelected.className = "user-text";
    let pizzaSelectedText = document.createTextNode(`${chosenPizza}`);
    pizzaChosen.push(chosenPizza);
    pizzaSelected.appendChild(pizzaSelectedText);
    myDiv.appendChild(pizzaSelected);


    let sizeRequest = document.createElement('p');
    sizeRequest.className = "bot-text";
    let sizeRequestText = document.createTextNode(`Please specify the size of Pizza`);
    sizeRequest.appendChild(sizeRequestText);
    myDiv.appendChild(sizeRequest);

    let smallPizza = document.createElement('button');
    smallPizza.id = 'Small';
    let mediumPizza = document.createElement('button');
    mediumPizza.id = 'Medium';
    let largePizza = document.createElement('button');
    largePizza.id = 'Large';
    
    let smallPizzaText = document.createTextNode(`Small`);
    let mediumPizzaText = document.createTextNode(`Medium`);
    let largePizzaText = document.createTextNode(`Large`);

    smallPizza.appendChild(smallPizzaText);
    mediumPizza.appendChild(mediumPizzaText);
    largePizza.appendChild(largePizzaText);

    myDiv.appendChild(smallPizza);
    myDiv.appendChild(mediumPizza);
    myDiv.appendChild(largePizza);

    smallPizza.addEventListener("click", quantitySelector);
    mediumPizza.addEventListener("click", quantitySelector);
    largePizza.addEventListener("click", quantitySelector);
}

function quantitySelector(){
    document.getElementById("Small").removeEventListener("click", quantitySelector);
    document.getElementById("Medium").removeEventListener("click", quantitySelector);
    document.getElementById("Large").removeEventListener("click", quantitySelector);
    
    let chosenSize = this.id;
    sizeChosen.push(chosenSize);

    let myDiv = document.getElementById("chat-area");
    let sizeSelected = document.createElement('p');
    sizeSelected.className = "user-text"; 
    let sizeSelectedText = document.createTextNode(`${sizeChosen[sizeChosen.length-1]}`);
    sizeSelected.appendChild(sizeSelectedText);
    myDiv.appendChild(sizeSelected);


    let quantityRequest = document.createElement('p');
    quantityRequest.className = "bot-text";
    let quantityRequestText = document.createTextNode(`Kindly specify the quantity of the aformentioned Pizza in the text box and press enter`);
    quantityRequest.appendChild(quantityRequestText);
    myDiv.appendChild(quantityRequest);

    let inputField = document.getElementById("input-data");
    inputField.setAttribute("type","number");
    inputField.setAttribute("min","1");
    inputField.setAttribute("max","10");
    inputField.required = true;

    let inputButton =  document.getElementById("input-button");  
    inputButton.addEventListener("click", requestMoreOrders);  
}

function requestMoreOrders(){
    let inputButton =  document.getElementById("input-button");
    inputButton.removeEventListener("click", requestMoreOrders);
    let myDiv = document.getElementById("chat-area");

    let inputField = document.getElementById("input-data");
    let quantityInput = inputField.value;
    quantityChosen.push(quantityInput);
    inputField.value = "";

    inputButton.removeEventListener("click", requestMoreOrders);
    let quantitySelected = document.createElement('p');
    quantitySelected.className = "user-text";
    let quantitySelectedText = document.createTextNode(`${quantityChosen[quantityChosen.length - 1]}`);
    quantitySelected.appendChild(quantitySelectedText);
    myDiv.appendChild(quantitySelected);

    let moreOrderRequest = document.createElement('p');
    moreOrderRequest.className = "bot-text";    
    let moreOrderRequestText = document.createTextNode(`Would you like to order more`);
    moreOrderRequest.appendChild(moreOrderRequestText);
    myDiv.appendChild(moreOrderRequest);

    let yesButton = document.createElement('button');
    yesButton.id = 'yes';
    let noButton = document.createElement('button');
    noButton.id = 'no';
    
    let yesButtonText = document.createTextNode(`Yes`);
    let noButtonText = document.createTextNode(`No`);

    yesButton.appendChild(yesButtonText);
    noButton.appendChild(noButtonText);

    myDiv.appendChild(yesButton);
    myDiv.appendChild(noButton);

    yesButton.addEventListener("click", makeOrder);
    noButton.addEventListener("click", requestCustomerName);
}


function requestCustomerName(){
    document.getElementById("no").removeEventListener("click", requestCustomerName);
    let myDiv = document.getElementById("chat-area");
    let customerNameRequest = document.createElement('p');
    customerNameRequest.className = "bot-text";
    let customerNameText = document.createTextNode(`Kindly enter your name`);
    customerNameRequest.appendChild(customerNameText);
    myDiv.appendChild(customerNameRequest);

    let inputField = document.getElementById("input-data");
    inputField.setAttribute("type","text");

    let inputButton =  document.getElementById("input-button");
    inputButton.addEventListener("click", getCustomerNameAndRequestPhoneNumber);       
}

function getCustomerNameAndRequestPhoneNumber(){
    document.getElementById("input-button").removeEventListener("click", getCustomerNameAndRequestPhoneNumber);
    let myDiv = document.getElementById("chat-area");
    
    let inputButton =  document.getElementById("input-button");
    let inputField = document.getElementById("input-data");


    let nameInput = inputField.value; 
    customerName.push(nameInput);
    inputField.value = "";
    console.log(customerName[customerName.length - 1]);

    let displayCustomerName = document.createElement('p');
    displayCustomerName.className = "user-text";
    let displayCustomerNameText = document.createTextNode(`${customerName[customerName.length - 1]}`);
    displayCustomerName.appendChild(displayCustomerNameText);
    myDiv.appendChild(displayCustomerName);

    let customerPhoneNumberRequest = document.createElement('p');
    customerPhoneNumberRequest.className = "bot-text";
    let customerPhoneNumberText = document.createTextNode(`Kindly enter your phone number`);
    customerPhoneNumberRequest.appendChild(customerPhoneNumberText);
    myDiv.appendChild(customerPhoneNumberRequest);

    inputField.setAttribute("type","number");
    //inputField.setAttribute("type","tel");
    //inputField.setAttribute("pattern","[0-9]{10}");

    inputButton.addEventListener("click", getCustomerPhoneNumberAndRequestAddress);
}

function getCustomerPhoneNumberAndRequestAddress(){
    document.getElementById("input-button").removeEventListener("click", getCustomerPhoneNumberAndRequestAddress);
    let myDiv = document.getElementById("chat-area");
    let inputButton =  document.getElementById("input-button"); 
    let inputField = document.getElementById("input-data");

    let phoneNumberInput = inputField.value; 
    customerPhoneNumber.push(phoneNumberInput);
    inputField.value = "";
    console.log(customerPhoneNumber[customerPhoneNumber.length - 1]);

    let displayCustomerPhoneNumber = document.createElement('p');
    displayCustomerPhoneNumber.className = "user-text";
    let displayCustomerPhoneNumberText = document.createTextNode(`${customerPhoneNumber[customerPhoneNumber.length - 1]}`);
    displayCustomerPhoneNumber.appendChild(displayCustomerPhoneNumberText);
    myDiv.appendChild(displayCustomerPhoneNumber);
    
    let customerAddressRequest = document.createElement('p');
    customerAddressRequest.className = "bot-text";
    let customerAddressText = document.createTextNode(`Kindly enter your address`);
    customerAddressRequest.appendChild(customerAddressText);
    myDiv.appendChild(customerAddressRequest);

    inputField.setAttribute("type","text");

    inputButton.addEventListener("click", displayThankYouText);
}

function displayThankYouText(){
    document.getElementById("input-button").removeEventListener("click", displayThankYouText);
    let myDiv = document.getElementById("chat-area");

    let inputField = document.getElementById("input-data");
    let customerAddressInput = inputField.value; 
    customerAddress.push(customerAddressInput);
    inputField.value = "";
    console.log(customerAddress[customerAddress.length - 1]);

    let displayCustomerAddress = document.createElement('p');
    displayCustomerAddress.className = "user-text";
    let displayCustomerAddressText = document.createTextNode(`${customerAddress[customerAddress.length - 1]}`);
    displayCustomerAddress.appendChild(displayCustomerAddressText);
    myDiv.appendChild(displayCustomerAddress);

    let totalCost = 0;

    for(let i = 0; i < pizzaChosen.length; i++){
        if(isVegPizza[i] == true){
            if(sizeChosen[i] == "Small"){
                let pizza = pizzaChosen[i];
                let cost = vegPizzaSmallPrices[(vegPizzaNames.indexOf(pizza))] * quantityChosen[i];
                totalCost = totalCost + cost;
            }
            else if(sizeChosen[i] == "Medium"){
                let pizza = pizzaChosen[i];
                let cost = vegPizzaMediumPrices[(vegPizzaNames.indexOf(pizza))] * quantityChosen[i];
                totalCost = totalCost + cost;
            }
            else{
                let pizza = pizzaChosen[i];
                let cost = vegPizzaLargePrices[(vegPizzaNames.indexOf(pizza))] * quantityChosen[i];
                totalCost = totalCost + cost;
            }
        }
        else{
            if(sizeChosen[i] == "Small"){
                let pizza = pizzaChosen[i];
                let cost = nonvegPizzaSmallPrices[(nonvegPizzaNames.indexOf(pizza))] * quantityChosen[i];
                totalCost = totalCost + cost;
            }
            else if(sizeChosen[i] == "Medium"){
                let pizza = pizzaChosen[i];
                let cost = nonvegPizzaMediumPrices[(nonvegPizzaNames.indexOf(pizza))] * quantityChosen[i];
                totalCost = totalCost + cost;
            }
            else{
                let pizza = pizzaChosen[i];
                let cost = nonvegPizzaLargePrices[(nonvegPizzaNames.indexOf(pizza))] * quantityChosen[i];
                totalCost = totalCost + cost;
            }
        }
    }

    
    let customerOrderDetails = [];

    for(let j = 0; j < pizzaChosen.length; j++){
        let order = {};
        order.id = newId;
        order.customerName = customerName[0];
        order.customerPhoneNumber = customerPhoneNumber[0];
        order.customerAddress = customerAddress[0];
        order.pizza = pizzaChosen[j];
        order.size = sizeChosen[j];
        order.quantity = quantityChosen[j];
        order.status = 'just booked';
        console.log(order);
        customerOrderDetails.push(order);
    }

    console.log(customerOrderDetails);

    let displayThankYou = document.createElement('p');
    displayThankYou.className = "bot-text";
    let thankYouText = document.createTextNode(`Your total order cost is ${totalCost}. Thank you ${customerName[customerName.length - 1]}. Have a nice day.`);
    displayThankYou.appendChild(thankYouText);
    myDiv.appendChild(displayThankYou);
}
