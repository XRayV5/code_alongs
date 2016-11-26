$(document).ready(function() {
  var latitude;
  var longitude;
  //Injecting HTML here due to CSS animation issue initiating before script load
  $('.loader').after('<div class="container"><div class="weatherCard"><div class="weatherIcon"></div><div class="temperatureDisplay"><div class="units"></div></div><div class="location"></div><div class="icon"></div></div></div>')
  var $location = $('.location');
  var $units = $('.units');
  var $temperatureDisplay = $('.temperatureDisplay');
  var $container = $('.container');
  $container.hide();

  var googleApiKey = 'AIzaSyCfxI8a5U-lL1vQiOWBIkowev5IM89MJf8';
  var openWeatherApiKey = '3eba5ffc8af17cda211319486bc35e12';

//https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCfxI8a5U-lL1vQiOWBIkowev5IM89MJf8

  $.getJSON('http://ipinfo.io', function(json) {
    latitude = json.loc.split(',')[0];
    longitude = json.loc.split(',')[1];
    getWeather(latitude, longitude);
  })

  function getWeather(lat, lon) {
    function decimalPlacer(value, places) {
      return +(value).toFixed(places);
    }

    function getUnits(country, temp) {
      if (country === "US") {
        return "F";
      } else
        return "C";
    }

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + openWeatherApiKey, function(json) {
      console.log(json);
      var temperatureKelvin = json.main.temp;
      var temperatureDegrees = json.main.temp - 273.15;
      var temperatureFahrenheit = (json.main.temp - 273.15) * 1.8 + 32;
      var country = json.sys.country;
      var units = getUnits(country);
      var location = json.name;
      var weatherDescription = json.weather[0].description;
      var temperature = getUnits.temperature;

      if (units === "C") {
        temperature = temperatureDegrees;
      } else {
        temperature = temperatureFahrenheit;
      }
      $('.loader').hide();

      if (json.weather[0].main === "Clouds") {$('.weatherIcon').addClass("cloud");}
      if (json.weather[0].main === "Sun") {$('.weatherIcon').addClass("sun");}

      $temperatureDisplay
        .append("<h1>" + decimalPlacer(temperature, 1) + "<span>" + "º" + units + "</span>" + "</h1>")

      .append('<p>' + location + '</p>')
        .show();
      $container.fadeIn();
    })
  }


  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);

});
