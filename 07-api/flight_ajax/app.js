var fxml_url = 'http://ruixu0530:ace744cee1f5f33d07f18240d742653c0f670747@flightxml.flightaware.com/json/FlightXML2/';


google.load("visualization", "1", {packages:["map"]});


// When the button is clicked, fetch the details about the entered flight ident.
$(document).ready(function() {
    $('#go_button').click(function() {
    $.ajax({
        type: 'GET',
        url: fxml_url + 'FlightInfoEx',
        data: { 'ident': $('#ident_text').val(), 'howMany': 10, 'offset': 0 },
        success : function(result) {
            if (result.error) {
                alert('Failed to fetch flight: ' + result.error);
                return;
            }
            for (flight of result.FlightInfoExResult.flights) {
                if (flight.actualdeparturetime > 0) {
                    // display some textual details about the flight.
                    $('#results').html('Flight ' + flight.ident + ' from ' + flight.origin + ' to ' + flight.destination);

                    // display the route on a map.
                    fetchAndRenderRoute(flight.faFlightID);
                    return;
                }
            }
            alert('Did not find any useful flights');
        },
        error: function(data, text) { alert('Failed to fetch flight: ' + data); },
        dataType: 'jsonp',
        jsonp: 'jsonp_callback',
        xhrFields: { withCredentials: true }
        });
    });
});


// Fetch the planned route for a specified flight_id.
function fetchAndRenderRoute(flight_id) {
    $.ajax({
       type: 'GET',
       url: fxml_url + 'DecodeFlightRoute',
       data: { 'faFlightID': flight_id },
       success : function(result) {
           if (result.error) {
               alert('Failed to decode route: ' + result.error);
               return;
           }

           // Initialize a data table using the Google API.
           var table = new google.visualization.DataTable();
           table.addColumn('number', 'Lat');
           table.addColumn('number', 'Lon');
           table.addColumn('string', 'Name');

           // Insert all of the points into the data table.
           var points = result.DecodeFlightRouteResult.data;
           table.addRows(points.length);
           for (rowid = 0; rowid < points.length; rowid++) {
                table.setCell(rowid, 0, points[rowid].latitude);
                table.setCell(rowid, 1, points[rowid].longitude);
                table.setCell(rowid, 2, points[rowid].name + ' (' + points[rowid].type + ')' );
           }

           // Render the data table into a map using Google Maps API.
           var map = new google.visualization.Map(document.getElementById('map_div'));
           map.draw(table, {showTip: true, showLine: true, lineWidth: 3, lineColor: '#009900'});
       },
       error: function(data, text) { alert('Failed to decode route: ' + data); },
       dataType: 'jsonp',
       jsonp: 'jsonp_callback',
       xhrFields: { withCredentials: true }
   });
}
