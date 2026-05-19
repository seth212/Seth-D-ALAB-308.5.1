// Take an array of numbers and return the sum.

function sumOfArray (arr) {
    let total = 0;

    for (let number of arr) {
        total += number
    }
    return total
}

console.log(sumOfArray([130, 5, 5])) //140

// Take an array of numbers and return the average.

function averageOfArray (arr) {
    let total = 0;
    
    for (let number of arr){
        total += number;     
    }
    let average = total / arr.length;
    return average
    
}

console.log(averageOfArray([10, 10, 10])) //3

// Take an array of strings and return the longest string.

function returnLongestString (arr) {
    let longestString = ''
    for (let string of arr){
        if (string.length > longestString.length){
            longestString = string
        }
    }
    return longestString;
}

console.log(returnLongestString(['rat', 'train', 'beaver']));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.

function stringLongerthanGivenNumber (arr, number) {
    let stringsLongerthanNumber = [];
    for (let string of arr) {
        if(string.length > number) {
            stringsLongerthanNumber.push(string);
        }
    } return stringsLongerthanNumber
}

console.log(stringLongerthanGivenNumber(['rat', 'train', 'beaver'], 4));


// Part 2 - Thinking Methodically

const people = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

 // Sort the array by age.

 people.sort(function(a,b) {
    return parseInt(a.age) - parseInt(b.age);
 });

 console.log(people)

// Filter the array to remove entries with an age greater than 50.
 const peopleUnder50 = people.filter(function(people){
    return parseInt(people.age) <=50;
 })

console.log(peopleUnder50)

// Map the array to change the “occupation” key to “job” and increment every age by 1.

const updateArray = people.map(function(people) {
    return {
        id: people.id,
        name: people.name,
        job: people.occupation,
        age: parseInt(people.age) + 1
    };
});

console.log(updateArray);

// Use the reduce method to calculate the sum of the ages.
//  Then use the result to calculate the average age.

const sumofAges = people.reduce(function(total, people){
    return total + parseInt(people.age)
}, 0);

console.log(sumofAges)

const average = sumofAges / people.length;

console.log(average)

// Part 3- Thinking Critically

function incrementAge(obj) {
    if(!obj.age) {
        obj.age = 0;
        obj.updated_at = new Date()
    }
    obj.age++;
    console.log(obj);
    
    return obj;

}

const obj = {
    name: 'Seth'
}

incrementAge(obj)


function copyIncrementAge(copy) {
    if(!obj.age) {
        obj.age = 0;
    }
    obj.age++;
    console.log(copy);
    
    return obj;

}

const copy = {...obj}

copyIncrementAge(copy)








