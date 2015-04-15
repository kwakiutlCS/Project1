$(function() {
	$(".active").removeClass("active");
	$("#contactosLink").addClass("active");
	$(".mapa").hide();
	
	
	$(".mapShow").on("click", function(e) {
		$(".mapa").slideUp();
		var mapNumber = $(this).data("map");
		var map = $("#mapa"+mapNumber).eq(0);
		
		map.slideDown(400, function() {
			for (var i = 0; i < maps.length; i++) {
				google.maps.event.trigger(maps[i], "resize");
				maps[i].panTo(markers[i].getPosition());
				
			}
		});
		e.preventDefault();
	});
	
	
	initialize();
	
});



//google maps initialization
var maps = []; // global variables so map resizing works
var markers = [];

function initialize() {
	var exploratorio = {
		    center:new google.maps.LatLng(40.197369,-8.430208),
		    zoom:16,
		    mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
	var constancia = {
		    center:new google.maps.LatLng(39.49635541484445,-8.328394289323366),
		    zoom:13,
		    mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
	var planetario = {
		    center:new google.maps.LatLng(41.150716,-8.638461999999999),
		    zoom:13,
		    mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
	var braganca = {
		    center:new google.maps.LatLng(41.804649000000005,-6.754896),
		    zoom:13,
		    mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
	var algarve = {
		    center:new google.maps.LatLng(37.01006277359892,-7.931283837752039),
		    zoom:13,
		    mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
	var pavilhao = {
		    center:new google.maps.LatLng(38.76231,-9.095595999999999),
		    zoom:13,
		    mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
	var acores = {
		    center:new google.maps.LatLng(37.75465549744625,-25.558381118766388),
		    zoom:13,
		    mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
	  
	var locals = [exploratorio, constancia, planetario, braganca, algarve, pavilhao, acores];
	
	// initializes the maps
	for (var i = 0; i < locals.length; i++) {
		maps.push(new google.maps.Map($("#mapa"+(i+1))[0], locals[i]));
	}
	 
	// adds a marker on the maps
	for (var i = 0; i < locals.length; i++) {
		markers.push(new google.maps.Marker({
			position:locals[i].center,
		}));
		markers[i].setMap(maps[i]);
	}
	  
	  
	  
}