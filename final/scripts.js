// // Define and assign a Markdown-it renderer.
// let md;
// md = window.markdownit({html: true}).use(window.markdownitFootnote);
// // Load the Markdown file with jQuery.
// $.ajax({
//   url: "poem.md",
//   success: function(poem){
//     let html;
//     html = md.render(poem);
//     $("#poem").html(html);
//     // The above is the same as the $.ajax() call in the prev. ch.
//     $("#poem").html(function(_, oldHtml){
//       let newHtml;
//       newHtml = oldHtml.replace(/Hastings Street/g, "<a href='#' data-place='hastings-street'>Hastings Street</a>");
//       return newHtml;
//     });
//   }
// });

let map = L.map("final-map");
let tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
  attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
  subdomains: "abcd",
  maxZoom: 13

})
tileLayer.addTo(map);
map.setView([40.806225, -73.95848], 15);
let MorningsidePark = L.marker([40.806225, -73.95848]).bindPopup("<h3>Morningside Park</h3> <p2>This is Morningside Park. Here <a href='https://en.wikipedia.org/wiki/Morningside_Park_(New_York_City)'>is a link </a>, to a Wiki page about the location.</p2>");
MorningsidePark.addTo(map);
map.setView([40.766068, -73.977029], 15);
let CentralParkSouth = L.marker([40.766068, -73.977029]).bindPopup("<h3>Central Park South</h3> <p2>This is Central Park South. Here<https://www.nytimes.com/2017/08/23/realestate/central-park-south-a-frenetic-neighborhood-with-calming-views.html'>is a link </a>, to an article about the location.</p2>");
CentralParkSouth.addTo(map);
map.setView([40.768044, -73.982372], 15);
let ColumbusCircle = L.marker([40.768044, -73.982372]).bindPopup("<h3>Columbus Circle</h3> <p2>This is Columbus Circle. Here <a href='https://en.wikipedia.org/wiki/Columbus_Circle'>is a link </a>, to a Wiki page about the location.</p2>");
ColumbusCircle.addTo(map);
map.setView([40.772464, -73.983489], 15);
let LincolnCenter = L.marker([40.772464, -73.983489]).bindPopup("<h3>Lincoln Center</h3> <p2>This is Lincoln Center. Here <a href='https://en.wikipedia.org/wiki/Lincoln_Center_for_the_Performing_Arts'>is a link </a>, to a Wiki page about the location.</p2>");
LincolnCenter.addTo(map);
map.setView([40.851342, -73.940224], 15);
let Onefirst = L.marker([40.851342, -73.940224]).bindPopup("<h3>181 St & Cabrini</h3> <p2>This is 181 St. Here <a href='https://patch.com/new-york/washington-heights-inwood/standing-181st-street-cabrini-blvd'>is a link </a>, to a picture of the view from this exact spot.</p2>");
Onefirst.addTo(map);
map.setView([40.813411, -73.956238], 15);
let AmsterdamAve = L.marker([40.813411, -73.956238]).bindPopup("<h3>Amsterdam Ave</h3> <p2>This is Amsterdam Ave. Here <a href='https://en.wikipedia.org/wiki/Tenth_Avenue_(Manhattan)'>is a link </a>, to a Wiki page about the location.</p2>");
AmsterdamAve.addTo(map);
map.setView([40.801234, -73.97231], 15);
let RiversidePark = L.marker([40.801234, -73.97231]).bindPopup("<h3>Riverside Park</h2> <p2>This is Riverside Park Here <a href='https://en.wikipedia.org/wiki/Riverside_Park_(Manhattan)'>is a link </a>, to a Wiki page about the location.</p2>");
RiversidePark.addTo(map);
map.setView([40.771769, -73.974842], 15);
let SheepMeadow = L.marker([40.771769, -73.974842]).bindPopup("<h3>Sheep Meadow</h3> <p2>This is Sheep Meadow. Here <a href='https://en.wikipedia.org/wiki/Morningside_Park_(New_York_City)'>is a link </a>, to a Wiki page about the location.</p2>");
SheepMeadow.addTo(map);
map.setView([40.738217, -73.98568], 15);
let LexingtonAve = L.marker([40.738217, -73.98568]).bindPopup("<h3>Lexington Ave.</h3> <p2>This is Lexington Ave. Here <a href='https://en.wikipedia.org/wiki/Morningside_Park_(New_York_City)'>is a link </a>, to a Wiki page about the location.</p2>");
LexingtonAve.addTo(map);
map.setView([40.712743, -74.013379], 15);
let WorldTradeCenter = L.marker([40.712743, -74.013379]).bindPopup("<h3>World Trade Center</h3> <p2>This is World Trade Center. Here <a href='https://www.wtc.com/'>is a link </a>, to the location's official website.</p2>");
WorldTradeCenter.addTo(map);
map.setView([40.641311, -73.778139], 15);
let KennedyAirport = L.marker([40.641311, -73.778139]).bindPopup("<h3>Kennedy Airport</h3> <p2>This is Kennedy Airport,aka JFK. Here <a href='https://en.wikipedia.org/wiki/John_F._Kennedy_International_Airport'>is a link </a>, to a Wiki page about the location.</p2>");
KennedyAirport.addTo(map);
map.setView([40.705176, -74.0074], 15);
let WaterStandWallSt = L.marker([40.705176, -74.0074]).bindPopup("<h3>Water St & Wall St</h3> <p2>This is Water St & Wall St. Here is a link to <a href='https://en.wikipedia.org/wiki/Wall_Street'>Wall St's</a>, Wiki page.</p2>");
WaterStandWallSt.addTo(map);
map.setView([40.703277, -74.017028], 15);
let BatteryPark = L.marker([40.703277, -74.017028]).bindPopup("<h3>Battery Park</h3> <p2>This is Battery Park. Here <a href='https://www.nycgovparks.org/parks/battery-park'>is a link </a>, to a Battery Park's official website.</p2>");
BatteryPark.addTo(map);
map.setView([40.841708, -73.939355], 15);
let WashingtonHeights = L.marker([40.841708, -73.939355]).bindPopup("<h3>Washington Heights</h3> <p2>This is Washington Heights. Here <a href='https://en.wikipedia.org/wiki/Washington_Heights,_Manhattan'>is a link </a>, to a Wiki page about the location.</p2>");
WashingtonHeights.addTo(map);
map.setView([40.765126, -73.979924], 15);
let CarnegieHall = L.marker([40.765126, -73.979924]).bindPopup("<h3>Carnegie Hall</h3> <p2>This is Carnegie Hall. Here <a href='https://en.wikipedia.org/wiki/Carnegie_Hall'>is a link </a>, to a Wiki page about the location.</p2>");
CarnegieHall.addTo(map);
