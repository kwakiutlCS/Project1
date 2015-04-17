//google maps initialization
//lista de marcadores
var markers = [];
//lista de zoom especifico de cada local
var zoom = [16,13,16,17,14,16,12];
//mapa
var mainMap;

$(function() {
//	actualizaçao do link
	$(".active").removeClass("active");
	$("#contactosLink").addClass("active");

	$(".mapShow").on("click", function(e) {
		//mapa correspondente ao ponteiro
		var mapNumber = $(this).data("map");
		//actualizaçao do mapa
		mainMap.panTo(markers[mapNumber].getPosition());
		mainMap.setZoom(zoom[mapNumber]);
		e.preventDefault();
	});
	initialize();
});

function initialize() {
	//lista de coordenadas
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
//	guardar as coordenadas no array
	var locals = [exploratorio, constancia, planetario, braganca, algarve, pavilhao, acores];
//	inicializaçao do mapa
	var exploratorioMap = {
			// primeira posição do mapa ->exploratorio
			center: exploratorio.pos,
			zoom:16,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			panControl: false,
			scaleControl: true,
	};
	mainMap = new google.maps.Map($("#mapDiv")[0], exploratorioMap); 

	// adiciona os marcadores ao mapa, percorrendo o array dos marcadores definido
	for (var i = 0; i < locals.length; i++) {
		markers.push(new google.maps.Marker({
			position:locals[i].pos,
		}));
		markers[i].setMap(mainMap);
	}

}