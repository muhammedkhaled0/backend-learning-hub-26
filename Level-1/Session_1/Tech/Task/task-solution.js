/*
احلى
multiple
line
comment
مش اعرف اديسكريب اقول ايه 🥲
 */

// 1) declaring variable
let studentName="Muhammed Khaled";
const pizzaFlavor="pepperoni";

// 2) Data Types
let hungerLevel = 10
let isPizzaHot = true
let deliveryAddress = "Cairo, Egypt"
console.log(typeof hungerLevel);//number
console.log(typeof isPizzaHot);//boolean
console.log(typeof deliveryAddress);//string

// 3) Type Conversion & Coercion
let orderTotal= "85";
let convertedTotal=Number(orderTotal);
let tip= 15;
let bonus=true;
let finalRes=convertedTotal+tip+Number(bonus);
console.log(finalRes);

// 4) Basic Operators
let totalBill = convertedTotal + tip ;
let minutesWaiting = 45 + 15;
console.log(minutesWaiting % 2)//even;

// 5) Operator Precedence
console.log(2 + 3 * 4 - 1) //13;
(2 + 3) * (4 - 1) //15
 
//6) if / Else Statements
if(isPizzaHot &&  hungerLevel > 7) console.log("OPEN THE DOOR AND SPRINT");
else if(hungerLevel>=5 && hungerLevel<=7) console.log("Walk, you have dignity");
else console.log("Order sushi next time");

// 7) Statements & Expressions
console.log(hungerLevel > 5);
//this an expression, it means that it return value 

// 8) Strings
console.log(pizzaFlavor.toUpperCase());//"PEPPERONI"
console.log(pizzaFlavor.length);//9
console.log(pizzaFlavor.includes("pepper"));//true
//9) template literals
console.log(
`${studentName} ordered a $
{pizzaFlavor} pizza. The total bill is $
{totalBill} pounds and the waiting time is
${minutesWaiting} minutes.`);

//10) Intro to Arrays & Objects
let toppings = ["sausage" , "kiri" , "mozzarella"];
let order={
    customer:"Muhammed",
    flavor:"kiri",
    isDelivered:false
}
order.isDelivered=true;

//11) Functions & Arrow Functions
function calculateTotal(price, tip){
    return price + tip;
}
let calculateTotalArrow=(price, tip)=>price + tip;
//we can also write it 
// let calculateTotal=(price, tip)=>{return price + tip};

console.log(calculateTotal(20,30));//50
console.log(calculateTotalArrow(20,30));//50

// 12) Loops
let stops=["Ahmed", "Sara", "Mona", "Tarek"];
for (let i = 0; i < stops.length; i++) {
    console.log(`Delivering to ${stops[i]}...`);
            if (stops[i] === "Mona") break;
}


