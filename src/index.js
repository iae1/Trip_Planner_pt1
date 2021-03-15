import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiaWFlMSIsImEiOiJja21hdGJoZzgxaTkzMnFzOXgxMW51OGE1In0.97djfnk5ZfjaLY082r0K3w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
})

const lngLt = new mapboxgl.Marker().setLngLat([-74.009, 40.705])
.addTo(map)

