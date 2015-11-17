$(document).ready(function(){
  $('#searchButton').on('click',function(e){
    e.preventDefault();
    var searchResult = $('#search').val();
    console.log(searchResult);
    var infoHeading = document.createElement('h3');
    $.get('http://star-api.herokuapp.com/api/v1/stars/' + searchResult + '.json', function(data){
      console.log(data);
      infoHeading.innerHTML = "More information about " + data.label;
      $('#infoContainer').append(infoHeading);
      var luminosity = document.createElement('p');
      luminosity.innerHTML ="Luminosity: " + data.lum;
      $('#infoContainer').append(luminosity);
    })
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
