// console.log("js");
//
 $(document).ready(function(){
//
//
// // AJAX METHOD
//
// $.ajax({
//   url:'https://my.api.mockaroo.com/plant.json?key=d0ea6160',
//   type:'GET',
//   data:'json',
//   success: function(data){
//     console.log(data);
//     var i;
//     for (i=0; i<data.length; i++){
//       document.getElementById('result').innerHTML +=
//         '<div class="col">'+
//         '<div class="card" style="width: 18rem;">' +
//         '<img src="'+ data[i].image +'" class="card-img-top" alt="Plant Image">' +
//         '<div class="card-body"><h5 class="card-title">' + data[i].plant_name + '</h5>' +
//         '<p class="card-text">Plant Family: '+ data[i].scientific_name + '</p>' +
//         '<p class="card-text">Plant Family: '+ data[i].plant_family + '</p>' +
//         '<a href="#" class="btn btn-info">More Info</a></div></div> '
//     }
//
//   },//success
//   error:function(){
//     console.log('error');
//   }//error
//
// });//ajax
//
// });//document.ready
//
// $(document).ready(function(){


// AJAX METHOD PHOTOS

$.ajax({
 url:'https://api.unsplash.com/collections?page=1&client_id=',
 type:'GET',
 data:'json',
 success: function(data){
   console.log(data);
   var i;
   for (i=0; i<data.length; i++){
     console.log(data[i].title);
     // document.getElementById('result').innerHTML +=
     //   '<div class="col">'+
     //   '<div class="card" style="width: 18rem;">' +
     //   '<img src="'+ data[i].image +'" class="card-img-top" alt="Plant Image">' +
     //   '<div class="card-body"><h5 class="card-title">' + data[i].plant_name + '</h5>' +
     //   '<p class="card-text">Plant Family: '+ data[i].scientific_name + '</p>' +
     //   '<p class="card-text">Plant Family: '+ data[i].plant_family + '</p>' +
     //   '<a href="#" class="btn btn-info">More Info</a></div></div> '
   }

 },//success
 error:function(){
   console.log('error');
 }//error

});//ajax

});//document.ready
