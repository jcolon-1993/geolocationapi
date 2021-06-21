// Html Element
var elMap = document.getElementById("loc");

// No location message
var msg = "Sorry, we were unable to get your location";

// Is Geo supported
if (Modernizr.geolocation)
{
  // Ask for location
  navigator.geolocation.getCurrentPosition(success, fail);

  // Checking...
  elMap.content = "Checking location...";

}
// Not supported
else
{
  // Add manual entry
  elMap.textContet = msg;
}

// Got location
function success(position)
{
  // Create message
  msg += "<h3>Longitude:<br>";

  // Add latitude
  msg += position.coords.latitude +  "</h3>";

  // Create message
  msg += "<h3>Latitude</h3>";

  // Add Longitude
  msg += position.coords.longitude + "</h3>";

  // Show Location.
  elMap.innerHTML = msg;
}

// Cannot get location
function fail(msg)
{
  // Show text input
  elmap.textContet = msg;

  // Log the error
  console.log(msg.code);
}
