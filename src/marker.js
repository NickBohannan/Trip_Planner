const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");


const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    if (type === "hotels") markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    else if (type === "restaurants") markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    else markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;







// function buildMarker(lng, lat) {

// }

// export default buildMarker