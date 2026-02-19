/*
console.log("El programa inició");
let value = 10;
if(value == 10){
    console.log(value);
}
console.log("El programa terminó");
*/

/**
 * REFACTORED CODE - PROMISES
 * Flow: User -> Orders -> Calculation
 */

// 1. Get User
function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("✅ User obtained");
            resolve({ id: 1, name: "Memo" });
        }, 1000);
    });
}

// 2. Get Orders (Dependent on User)
function getOrders(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("✅ User Orders obtained");
            resolve([
                { name: "Laptop", price: 1000 },
                { name: "Mouse", price: 50 }
            ]);
        }, 1000);
    });
}

// 3. Calculate Total
function calculateTotal(orders) {
    let total = 0;
    return new Promise(resolve => {
        orders.forEach(product => {
            total += product.price;
        });
        console.log("✅ Total calculated");
        resolve(total);
    });
}

// --- EXECUTION (Promise Chain) ---
console.log("--- START APP ---");

getUser()
    .then(user => getOrders(user))
    .then(orders => calculateTotal(orders))
    .then(total => console.log(`💰 Total: ${total}`)) // Fixed: Added backticks (`)
    .catch(error => console.error(error));