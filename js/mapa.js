function initMap(){
    let myLatLng = {lat: -33.684, lng: -59.668};
    let map = new google.maps.Map(document.querySelector('#map'), {
        center: myLatLng,
        zoom: 8
    });
    let marker = new google.maps.Marker ({
        position: myLatLng,
        map: map,
        title: 'Mi ubicacion'
    });
}