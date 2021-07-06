mapboxgl.acessToken='pk.eyJ1Ijoia2ludHJwIiwiYSI6ImNrcXMwYjhkbDEybnAydW8xNTI5MDNpODYifQ.3CiKMUdlxVCvRwanbAmrPQ'
console.log('HelloFromMapBox');
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [13.405, 52.52], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

// NavBAr

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');


// Set markers 

const coordinates = [
    [13.405, 52.52],
    [13.400, 49.21]
]

coordinates.forEach(coord => {
    new mapboxgl.Marker({
        color: 'red'
    })
    .setLngLat(coord)
    .addTo(map)
})










/* 
const marker = new mapboxgl.Marker({
    color: 'red'
})
.setLngLat([13.405, 52.52])
.addTo(map); 
*/


