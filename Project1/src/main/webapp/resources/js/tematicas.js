$(function() {
//fecha todas as listas de navegação	
	$(".lista").hide();    
//detecta o tema da pagina
	var url = window.location.href;
	var res=url.split("/");
	var pos=res.length-2;
	
//mostra o seleccionado
	if (res[pos]==="Mecanica"){
		$(".lista_mecanica").show();
		$("#lista_mecanica").addClass("currentList");
	}
	else if (res[pos]==="Som"){
		$(".lista_som").show();
		$("#lista_som").addClass("currentList");
	}
	else if (res[pos]==="Magnetismo"){
		$(".lista_electricidade").show();
		$("#lista_electricidade").addClass("currentList");
	}
//esconder e mostrar as listas 	
	$("#lista_som").click(function(e) {
		if (!$(this).hasClass("currentList")) {
			$(".currentList").removeClass("currentList");		
			$(this).addClass("currentList");
			$(".lista").slideUp();
			$(".lista_som").slideDown();
		}
		e.preventDefault();
	});
	
	$("#lista_mecanica").click(function(e) {
		if (!$(this).hasClass("currentList")) {
			$(".currentList").removeClass("currentList");		
			$(this).addClass("currentList");
			$(".lista").slideUp();
			$(".lista_mecanica").slideDown();
		}
		e.preventDefault();
	});
	$("#lista_electricidade").click(function(e) {
		if (!$(this).hasClass("currentList")) {
			$(".currentList").removeClass("currentList");		
			$(this).addClass("currentList");
			$(".lista").slideUp();
			$(".lista_electricidade").slideDown();
		}
		e.preventDefault();
	});
//actualização da lista  
	$(".active").removeClass("active");
	$("#tematicasLink").addClass("active");
	
});
