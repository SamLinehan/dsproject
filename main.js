$(document).ready(function(){

  // Below is the code for the search function
  $('#searchButton').on('click',function(e){
    e.preventDefault();
    var searchResult = $('#search').val();
    console.log(searchResult);

    // Below is the code for displaying the headings
    var infoHeading = document.createElement('h3');
    $.get('http://star-api.herokuapp.com/api/v1/stars/' + searchResult + '.json', function(data){
      console.log(data);
      infoHeading.innerHTML = "More information about " + data.label;
      $('#infoHeading').append(infoHeading);

      // Stars without exoplanets API data retrieval
      var luminosity = document.createElement('p');
      luminosity.innerHTML ="Luminosity: " + data.lum;
      var dist = document.createElement('p');
      dist.innerHTML = data.label + " is " + data.distly + " light years from Earth";
      var color = document.createElement('p');
      if( -1 < data.colorb_v < 0){
        color.innerHTML = data.label + " is a Blue Star";
      } else {
        color.innerHTML = data.label + " is a Red Star";
      }
      $('#infoContainer').append(luminosity);
      $('#infoContainer').append(dist);
      $('#infoContainer').append(color);


      var compHeading = document.createElement('h3');
      compHeading.innerHTML = "In comparison to the Sun,";
      $('#compHeading').append(compHeading);
      var luminosityComp = document.createElement('p');
      var sunLum = 0.8913
      if(data.lum > sunLum){
        var greater = Math.floor((data.lum / sunLum));
        luminosityComp.innerHTML = data.label + " is " + greater + " times more luminous than the Sun";
      } else if (data.lum < sunLum){
        var lesser = Math.floor((sunLum / data.lum));
        luminosityComp.innerHTML = "The Sun is " + lesser + " times more luminious than " + data.label;
      } else {
        luminosityComp.innerHTML = "The Sun and " + data.label + " are of the same luminosity";
      }
      $('#compContainer').append(luminosityComp);

      var visibility = document.createElement('p');
      if( -2.5 < data.appmag < 6.5){
        visibility.innerHTML = "Like the Sun, " + data.label + " is visible to the naked eye";
      } else {
        visibility.innerHTML = "Unlike the Sun, " + data.label + " is not visible to the naked eye";
      }
      $('#compContainer').append(visibility);
    })

    // Stars with exoplanets API data retrieval
    $.get('http://star-api.herokuapp.com/api/v1/exo_planets/' + searchResult + '.json', function(data){
      console.log(data);
      infoHeading.innerHTML = "More information about " + data.label;
      $('#infoContainer').append(infoHeading);
      var numPlanets = document.createElement('p');
      if(data.numplanets === 1){
        numPlanets.innerHTML = data.label + " has " + data.numplanets + " Exoplanet";
      } else {
        numPlanets.innerHTML = data.label + " has " + data.numplanets + " Exoplanets";
      }
      var distance = document.createElement('p');
      distance.innerHTML = data.label + " is " + data.distance + " light years away from Earth";
      $('#infoContainer').append(numPlanets);
      $('#infoContainer').append(distance);
    })
  })

  // Below is the code for generating the list of stars
    $.get('http://star-api.herokuapp.com/api/v1/stars.json', function(data){
      var sortedList = data.sort(function(){
        return Math.round(Math.random()) - 0.5;
      })
      for(var i = 0; i <= 5; i++){
        var randomList = document.getElementById('randomList');
        var newItem = document.createElement('li');
        newItem.innerHTML = data[i].label;
        randomList.appendChild(newItem);
      }
    })
    $.get('http://star-api.herokuapp.com/api/v1/exo_planets.json', function(data){
      var sortedListB = data.sort(function(){
        return Math.round(Math.random()) - 0.5;
      })
      for(var i = 0; i <= 5; i++){
        var randomListB = document.getElementById('randomList');
        var newItemB = document.createElement('li');
        newItemB.innerHTML = data[i].label;
        randomListB.appendChild(newItemB);
      }
    })
  })
