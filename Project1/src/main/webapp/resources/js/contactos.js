//google maps initialization
var markers = [];
var zoom = [16,13,16,17,14,16,12];
var mainMap;



$(function() {
	$(".active").removeClass("active");
	$("#contactosLink").addClass("active");

	$(".mapShow").on("click", function(e) {
		var mapNumber = $(this).data("map");
		mainMap.panTo(markers[mapNumber].getPosition());
		mainMap.setZoom(zoom[mapNumber]);
		e.preventDefault();
	});

	initialize();

});




function initialize() {
	var exploratorio = {
			pos:new google.maps.LatLng(40.197369,-8.430208),
	};
	var constancia = {
			pos:new google.maps.LatLng(39.49635541484445,-8.328394289323366),
	};
	var planetario = {
			pos:new google.maps.LatLng(41.150716,-8.638461999999999),
	};
	var braganca = {
			pos:new google.maps.LatLng(41.804649000000005,-6.754896),
	};
	var algarve = {
			pos:new google.maps.LatLng(37.01006277359892,-7.931283837752039),
	};
	var pavilhao = {
			pos:new google.maps.LatLng(38.76231,-9.095595999999999),
	};
	var acores = {
			pos:new google.maps.LatLng(37.75465549744625,-25.558381118766388),
	};

	var locals = [exploratorio, constancia, planetario, braganca, algarve, pavilhao, acores];

	var exploratorioMap = {
			center: exploratorio.pos,
			zoom:16,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			panControl: false,
			scaleControl: true,
	};
	mainMap = new google.maps.Map($("#mapDiv")[0], exploratorioMap); 

	// adds a marker on the map
	for (var i = 0; i < locals.length; i++) {
		markers.push(new google.maps.Marker({
			position:locals[i].pos,
		}));
		markers[i].setMap(mainMap);
	}

}