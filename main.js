$(document).ready(function(){
    $.get('http://star-api.herokuapp.com/api/v1/stars.json', function(data){
      for(var i = 0; i < data.length; i ++){
        if(data[i].label === $('#search').value){
          console.log(data[i].label);
        }
      }
      var sortedList = data.sort(function(){
        return Math.round(Math.random()) - 0.5;
      })

      for(var i = 0; i <= 10; i++){
        var randomList = document.getElementById('randomList');
        var newItem = document.createElement('li');
        newItem.innerHTML = data[i].label;
        randomList.appendChild(newItem);
      }
    })
    // $.get('http://star-api.herokuapp.com/api/v1/exo_planets.json', function(data){
    //   for(var i = 0; i < data.length; i++){
    //     if($('exoplanets').checked){
    //       console.log("Checked");
    //     }
    //   }
    // })
})
