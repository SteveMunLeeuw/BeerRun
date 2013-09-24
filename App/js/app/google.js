define(
	[ "async!http://maps.google.com/maps/api/js?key=AIzaSyDBVbskIUDkTwDCK359euk52FDtsve-SuI&sensor=true!callback" ],
	function() {
		return {
			addMapToCanvas: function( mapCanvas ) {
				var myOptions = {
					center: new google.maps.LatLng( 30.345695,-97.739703 ),
					zoom: 2,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				var map = new google.maps.Map( mapCanvas, myOptions );	
				var beerRunKmlUrl = 'https://raw.github.com/SteveMunLeeuw/BeerRun/master/Data/BeerRun.kml?_salt=' + Math.random();
                var ctaLayer = new google.maps.KmlLayer({
                url: beerRunKmlUrl
                });
                ctaLayer.setMap(map);

			    // Try HTML5 geolocation
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var pos = new google.maps.LatLng(position.coords.latitude,
                                                         position.coords.longitude);

                        var infowindow = new google.maps.InfoWindow({
                            map: map,
                            position: pos
                        });

                        map.setCenter(pos);
                    }, function () {
                        //handleNoGeolocation(true);
                    });
                } else {
                    // Browser doesn't support Geolocation
                    //handleNoGeolocation(false);
                }

			}		
		}

		function handleNoGeolocation(errorFlag) {
		    if (errorFlag) {
		        var content = 'Error: The Geolocation service failed.';
		    } else {
		        var content = 'Error: Your browser doesn\'t support geolocation.';
		    }

		    var options = {
		        map: map,
		        position: new google.maps.LatLng(60, 105),
		        content: content
		    };

		    var infowindow = new google.maps.InfoWindow(options);
		    map.setCenter(options.position);
		}
	}
);