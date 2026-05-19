// function computeArea(width, height) {
//     const area = width * height
//     return(`The area of a rectangle with a width of ${width} and a height of ${height} is ${area}`  )
// }

// console.log(computeArea(5, 20))


// const planetHasWater = function(planet) {
//     if (planet == 'Earth' || planet == 'Mars') {
//         return 'True'; }
//     else return 'False'
// }

// Grocery Challenge

const groceries = [
  { name: "Milk", expires: "2026-05-10" },
  { name: "Eggs", expires: "2026-05-20" },
  { name: "Tofu", expires: "2026-05-01" },
  { name: "Spinach", expires: "2026-05-13" },
  { name: "Apples", expires: "2026-06-15" }
];

const today = new Date();

console.log(today)

let expiredItems = [];

for (let item of groceries){
    let expirationDate = new Date(item.expires) 
    console.log(expirationDate)
    if (expirationDate < today){
    expiredItems.push(item)
} 
}

console.log(expiredItems)

console.log(typeof(expiredItems))

for (let item of expiredItems){
    console.log(`The ${item.name} expired`)
}






















