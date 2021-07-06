mapboxgl.accessToken='pk.eyJ1Ijoia2ludHJwIiwiYSI6ImNrcXM1OWQ1ZjFta2Qybm1ocTk2cG84djMifQ.m7fogXVWDffNLgmhb0Pe5g'

console.log('HelloFromMapBox');

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style:'mapbox://styles/kintrp/ckqs6ybuj0vh117odwy1wl36q',
    //style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [13.405, 52.52], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

// NavBAr

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

// Axios

axios.get(`http://localhost:3000/locations`)
		.then(response => {
			console.log(response.data);

		})
		.catch(err => {
			console.log(err);
		})







// Marker

/* const coordinates = [
    [13.405, 52.52],
    [13.400, 49.21]
]

coordinates.forEach(coord => {
    new mapboxgl.Marker({
        color: 'red'
    })
    .setLngLat(coord)
    .addTo(map)
}) */










/* 
const marker = new mapboxgl.Marker({
    color: 'red'
})
.setLngLat([13.405, 52.52])
.addTo(map); 
*/


