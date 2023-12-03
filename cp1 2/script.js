const string = "High knowledge, high return"; 
const array = string.split(); 
const filteredArray = array.filter(array => array !== ""); 
const lowercaseArray = filteredArray.map(array => array.toLowerCase()); 
console.log(lowercaseArray); 

