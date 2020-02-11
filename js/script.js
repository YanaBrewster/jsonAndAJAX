// console.log("js");

// to test jquery
 $(document).ready(function(){
   $('body').click(function(){
    $(this).css('color','blue');
   });



// // JS AARAY OF DATA
//
// var jsData = [
//   {
//     name: "Peter",
//     age: 50
//   },
//   {
//     name: "Anna",
//     age: 24
//   }
// ];
//
// // DISPLAY JS OBJECTS IN THE BROWSER WINDOW
//
// var i;
// for (var i = 0; i < jsData.length; i++) {
// document.getElementById('result').innerHTML +=
// "<h2>" + jsData[i].name + " is "  + jsData[i].age + "</h2>"
// };
//
//
// // JSON DATA
//
// var jsonData = [
//   {
//     "name" : "Laura",
//     "age" : 50
//   },
//   {
//     "name" : "Tim",
//     "age" : 24
//   }
// ];
//
// // DISPLAY JSON OBJECTS IN THE BROWSER WINDOW
//
// var j;
// for (var j = 0; j < jsonData.length; j++) {
// document.getElementById('result').innerHTML +=
// "<h2>" + jsonData[j].name + " is "  + jsonData[j].age + "</h2>"
// };
//
// // JSON FROM EXTERNAL FILE
//
// var person = JSON.parse(myData);
// console.log(person);
//
// // DISPLAY JSON OBJECTS IN THE BROWSER WINDOW
//
// var k;
// for (var k = 0; k < person.length; k++) {
// document.getElementById('result').innerHTML +=
// "<h2>" + person[k].name + " is "  + person[k].age + "</h2>"
// };

// AJAX METHOD

$.ajax({
  url:'js/mock_data.json',
  type:'GET',
  data:'json',
  success: function(data){
    console.log(data);
    var i;
    for (i=0; i<data.length; i++){
      document.getElementById('result').innerHTML +=
      '<div class="col col-sm-6 col-md-4 col-lg-4 border border-secondary rounded mx-1 my-1">' +
      '<h1>' + data[i].first_name  + ' ' +
       data[i].last_name + '</h1>' +
       '<h2>' + data[i].gender + '</h2>' +
       '<h3>' + data[i].email + '<h3>' +
       '<img class="img-thumbnail" src="' + data[i].avatar + '" alt="Avatar">' +
      '</div>';
    }

  },//success
  error:function(){
    console.log('error');
  }//error

});//ajax

});//document.ready
