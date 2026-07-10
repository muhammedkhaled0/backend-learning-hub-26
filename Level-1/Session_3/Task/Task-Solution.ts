// ======================================
// Task 1
// ======================================
function cookRice() {
    console.log("Rice starting...");
    for (let i = 0; i < 10e9; i++) { }
    console.log("Rice Done!");

}
function cookRiceAsync() {
    console.log("Rice starting...");
    setTimeout(() => {
        console.log("Rice Done!");
    }, 0);
}
cookRice();
console.log("Am Farouk yells at the next customer");
cookRiceAsync();
console.log("Am Farouk yells at the next customer");
// Output:
// Rice starting...
// Rice done!
// Am Farouk yells at the next customer
// Rice starting...
// Am Farouk yells at the next customer
// Rice done!

// Explanation:
// cookRice() blocks the JavaScript thread because the for loop is synchronous.
// cookRiceAsync() schedules the work with setTimeout, allowing the next code
// to execute immediately without blocking.

// ======================================
// Task 2
// ======================================
function orderRice(callback: (message: string) => void) {
    console.log("Calling the rice supplier...");
    setTimeout(() => {
        callback("Rice delivered!")
    }
        , 1000);
}
orderRice((message) => {
    console.log(message);
});
console.log("Am Farouk keeps serving customers while waiting");
// Expected:
// Calling the rice supplier...
// Am Farouk keeps serving customers while waiting
// (1 second later)
// Rice delivered!

// ======================================
// Task 3
// ======================================
const promise: Promise<string> = new Promise((resolved, rejected) => {
    setTimeout(() => {
        resolved("Order ready!");
    }, 2000)
})
promise.then((res) => { console.log(res) }).catch((error) => { console.log(error) });


const sauceOrder = new Promise((resolved, rejected) => {
    setTimeout(() => {
        rejected("We're out of da2a!");
    }, 1500);
});
sauceOrder.then((result) => { console.log(result); }).catch((error) => { console.log(error); });

// ======================================
// Task 4
// ======================================
function getRice():Promise<string>{
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            resolved("Rice ready");
        }, 1000);
    })
}
function getChickpeas(rice:string):Promise<string> {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved("Chickpeas ready, rice was: " + rice);
    }, 1000);
  });
}
function getSauce(chickpeas:string):Promise<string> {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved("Sauce added, previous: " + chickpeas);
    }, 1000);
  });
}
getRice()
    .then((rice) => getChickpeas(rice))
    .then((chickpeas) => getSauce(chickpeas ))
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
// ======================================
// Task 5
// ======================================

async function makeKoshari() {
  try {
    const rice  = await getRice() ;
    const chickpeas = await getChickpeas(rice);
    const sauce = await getSauce(chickpeas);

    console.log(sauce);
  } catch (error) {
    console.log(error);
  }
}

makeKoshari();