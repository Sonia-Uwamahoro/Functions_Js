// You manage a grocery store and need to keep track of the inventory of various items. 
// You will use arrays to store the data and various functions to manipulate and analyze the data.


// a. Create an array containing the names of all items in the inventory

let inventoryItems = ["toothpaste", "lotions", "toilet_papers", "soaps", "shaving_creams", "hair_dryers"];


// b. Create a separate array with the corresponding stock quantities of each item
let quantityOfItems = [28, 34, 65, 95, 10, 6];


// Write a function to add a new item to the inventory, updating both arrays

let  convertToObj = (inventoryItems, quantityOfItems) => {
    if(inventoryItems.length != quantityOfItems.length || inventoryItems.length == 0 || quantityOfItems.length == 0){
   return null;
    }
    return Object.assign(...inventoryItems.map((k, i)=>({[k]: quantityOfItems[i]}) ))
  }

  //  adding new item
  let newItems = convertToObj(inventoryItems, quantityOfItems);
  newItems.detergents = 47
  console.log({newItems});


  
// c. Write a function to update the stock quantity of an existing item


let updateItem = () => {
  newItems[oldKey] = newValue;  
  console.log(newItems);
}

let oldKey = 'soaps';
let newValue = 14;

updateItem();



// Write a function to calculate the total number of items in the inventory

let totalItems = () => {
  let total = 0;
for (let key in newItems){
  ++total;
}
console.log(`the total number of items in the inventory is : ${total}`);
}

totalItems()


// Write a function to find the item with the lowest stock quantity

var keys = Object.keys(newItems);

var minimumKey = keys[0];
for(var i = 1; i < keys.length; i++){
    var minimum = newItems[minimumKey];
    var value = newItems[keys[i]];
    if(minimum > value) minimumKey = keys[i];
}

console.log(minimumKey, newItems[minimumKey]);