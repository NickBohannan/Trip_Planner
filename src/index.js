const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoidGhlOTdicmFkbGV5IiwiYSI6ImNqaW0zanBjdDBlajEzcHBlaGdycWlqZWcifQ._R9oAh4FbpumcOay65dO3g';



const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const marker = buildMarker("hotels", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);


new mapboxgl.Marker(markerDomEl).setLngLat([-87.6390351, 41.8952661]).addTo(map);

