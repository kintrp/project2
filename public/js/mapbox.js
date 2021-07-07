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

let markers = [];
axios.get(`http://localhost:3000/locations`)
		.then(response => {
			//console.log(response.data.stories);

            response.data.stories.forEach(postalCode => {
                //console.log(postalCode);
                axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${postalCode}%20Germany.json?access_token=pk.eyJ1Ijoia2ludHJwIiwiYSI6ImNrcXM1OWQ1ZjFta2Qybm1ocTk2cG84djMifQ.m7fogXVWDffNLgmhb0Pe5g`)
                .then(response=> {
                    //console.log(response.data.features[0].geometry.coordinates);
                    markers.push(response.data.features[0].geometry.coordinates);
                    console.log(markers);

                    markers.forEach(coord => {
                        new mapboxgl.Marker({
                            color: 'red'
                        })
                        .setLngLat(coord)
                        .addTo(map)
                    })  
                })
            })          
		})
		.catch(err => {
			console.log(err);
		})
