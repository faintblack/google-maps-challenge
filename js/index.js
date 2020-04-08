
function initMap() {
    var pekanbaru = {
        lat: 0.506566, 
        lng: 101.437790
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: pekanbaru,
        zoom: 13,
        mapTypeId: 'roadmap',
    });   
}
