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
  maxZoom: 18
})
tileLayer.addTo(map);
map.setView([40.730833, -73.9975], 14);
let washSqPark = L.marker([40.730833, -73.9975]).bindPopup("<h2>WSP</h2> <p>This is Wash Sq. Park. Here <a href='http://nyu.edu'>is a link to NYU</a>, which surrounds it.</p>");
washSqPark.addTo(map);
