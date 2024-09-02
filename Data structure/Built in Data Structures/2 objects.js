const obj = {
    name:"vamsee",
    age:"27",
    "key-three": true,
    saymyname: function() {
        console.log(this.name)
    }
}

// console.log(obj.name)
// console.log(obj["age"]) //should use apostapies
// console.log(obj["key-three"]) //not possible with dot notation

// obj.hobby = "Coding";
// delete obj.hobby
// obj.saymyname(); //it will run the function


// console.log(Object.keys(obj)); //prints keys
// console.log(Object.values(obj));c//prints values
// console.log(Object.entries(obj)); //prints total entires
