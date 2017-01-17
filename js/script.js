function weatherBtnHdler() {
  $('.get_weather').click(callWeatherScraper);
}

function callWeatherScraper() {
  if ($('#city').val() !== "") {
    
    var city = $('#city').val();
    
    $.ajax({
      url: 'php/weather.php',
      method: 'get',
      data: {city: city},
      type: 'text',
      success: function (response) {
        if (response.indexOf("Warning")===10){
          ($('.weather_output').text("Unknown City, Please Enter a Valid City"));
          $('#city').val("");
        }else{
          console.log(response);
          ($('.weather_output').text(response));
          $('#city').val("");
        }
      },
      error: function (error) {
        console.log("An error happened" + error);
      }
    })
  }else{
    ($('.weather_output').text("Please Enter a City"))
  }
}

$(document).ready(function(){
  weatherBtnHdler();
});