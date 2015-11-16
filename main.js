// var request = new XMLHttpRequest();
//
// request.onreadystatechange = function(){
//   if(this.readyState == 4 && this.status == 200){
//     var listings = JSON.parse(this.responseText);
//     console.log(listings);

    // for(var i = 0; i < listings.length; i++){
    //   console.log(listings[i].label)



$(document).ready(function(){
    $.get('http://star-api.herokuapp.com/api/v1/exo_planets.json', function(data){
      console.log(data);
      for(var i = 0; i < data.length; i ++){
        console.log(data[i].label);
      }
    })
//   $('button').on('click', function(){
//     console.log($('#search').value)
//   })
})
