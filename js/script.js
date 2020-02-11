// console.log("js");

// JS AARAY OF DATA

var jsData = [
  {
    name: "Peter",
    age: 50
  },
  {
    name: "Anna",
    age: 24
  }
];

// DISPLAY JS OBJECTS IN THE BROWSER WINDOW

var i;
for (var i = 0; i < jsData.length; i++) {
document.getElementById('result').innerHTML +=
"<h2>" + jsData[i].name + " is "  + jsData[i].age + "</h2>"
};


// JSON DATA

var jsonData = [
  {
    "name" : "Laura",
    "age" : 50
  },
  {
    "name" : "Tim",
    "age" : 24
  }
];

// DISPLAY JSON OBJECTS IN THE BROWSER WINDOW

var j;
for (var j = 0; j < jsonData.length; j++) {
document.getElementById('result').innerHTML +=
"<h2>" + jsonData[j].name + " is "  + jsonData[j].age + "</h2>"
};

// JSON FROM EXTERNAL FILE

var person = JSON.parse(myData);
console.log(person);

// DISPLAY JSON OBJECTS IN THE BROWSER WINDOW

var k;
for (var k = 0; k < person.length; k++) {
document.getElementById('result').innerHTML +=
"<h2>" + person[k].name + " is "  + person[k].age + "</h2>"
};
