
$('#menu_Estado_Section').click(function () {

	$('#menu_Estado_Section').hide();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	var now = moment().format('YYYY-MM-DD');

	today = new Date();
	yesterday = new Date(today.setDate(today.getDate() - 182));
	var ayer = moment(yesterday).format('YYYY-MM-DD');
	$('#fec_desde_estado').val(ayer);
	$('#fec_hasta_estado').val(now);

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '1',
			'fec_inicio':ayer,
			'fec_cierre':now 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var food = JSON.parse(response);

		$("#footer_estado").html(' ');
		$.each(food, function (key,value) {
			$("#footer_estado").append('<li class="seletable arrow" onclick="id_estado_VP('+value['id']+');" > <a href="" data-view-section="main_estado_VP"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});
		generarGraficas(food);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
});

$('#menu_Estado_Home').click(function () {

	$('#menu_Estado_Section').hide();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	var now = moment().format('YYYY-MM-DD');

	today = new Date();
	yesterday = new Date(today.setDate(today.getDate() - 182));
	var ayer = moment(yesterday).format('YYYY-MM-DD');
	$('#fec_desde_estado').val(ayer);
	$('#fec_hasta_estado').val(now);

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '1',
			'fec_inicio':ayer,
			'fec_cierre':now 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var food = JSON.parse(response);

		$("#footer_estado").html(' ');
		$.each(food, function (key,value) {
			$("#footer_estado").append('<li class="seletable arrow" onclick="id_estado_VP('+value['id']+');" > <a href="" data-view-section="main_estado_VP"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});
		generarGraficas(food);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
});



$('#btnEstadoHome').click(function () {

	$('#menu_Estado_Section').hide();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	var now = moment().format('YYYY-MM-DD');

	today = new Date();
	yesterday = new Date(today.setDate(today.getDate() - 182));
	var ayer = moment(yesterday).format('YYYY-MM-DD');
	$('#fec_desde_estado').val(ayer);
	$('#fec_hasta_estado').val(now);

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '1',
			'fec_inicio':ayer,
			'fec_cierre':now 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var food = JSON.parse(response);

		$("#footer_estado").html(' ');
		$.each(food, function (key,value) {
			$("#footer_estado").append('<li class="seletable arrow" onclick="id_estado_VP('+value['id']+');" > <a href="" data-view-section="main_estado_VP"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});
		generarGraficas(food);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
});

$('#btnEstadoUpdate').click(function () {

	$('#menu_Estado_Section').hide();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	var fec_desde = $('#fec_desde_estado').val();
	var fec_hasta = $('#fec_hasta_estado').val();



	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '1',
			'fec_inicio':fec_desde,
			'fec_cierre':fec_hasta 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverData = JSON.parse(response);

		$("#footer_estado").html(' ');
		$.each(serverData, function (key,value) {
			$("#footer_estado").append('<li class="seletable arrow" onclick="id_estado_VP('+value['id']+');"  > <a href="" data-view-section="main_estado_VP"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});
		generarGraficas(serverData);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
});

$('#btnEstadoUpdate_VP').click(function () {

	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	var fec_desde = $('#fec_desde_estado_VP').val();
	var fec_hasta = $('#fec_hasta_estado_VP').val();


	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '2',
			'id_estado_VP':$('#id_estado').val(),
			'fec_inicio':fec_desde,
			'fec_cierre':fec_hasta 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataVP = JSON.parse(response);

		$("#footer_estado_VP").html(' ');
		$.each(serverDataVP, function (key,value) {
			$("#footer_estado_VP").append('<li class="seletable arrow" onclick="id_estado_VP_lista('+value['id']+');"  > <a href="" data-view-section="main_estado_VP_Lista"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});
		generarGraficasVP(serverDataVP);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
});




function id_estado_VP (id) {

	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	var nowVP = moment().format('YYYY-MM-DD');
	$('#id_estado').val(id);
	today = new Date();
	yesterdayVP = new Date(today.setDate(today.getDate() - 182));
	var ayerVP = moment(yesterdayVP).format('YYYY-MM-DD');
	$('#fec_desde_estado_VP').val(ayerVP);
	$('#fec_hasta_estado_VP').val(nowVP);

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '2',
			'id_estado_VP':id,
			'fec_inicio':ayerVP,
			'fec_cierre':nowVP 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataVP = JSON.parse(response);
		$("#footer_estado_VP").html(' ');
		$.each(serverDataVP, function (key,value) {
			$("#footer_estado_VP").append('<li class="seletable arrow" onclick="id_estado_VP_lista('+value['id']+');" > <a href="" data-view-section="main_estado_VP_Lista"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});
		generarGraficasVP(serverDataVP);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
}


function generarGraficas (valorJSON) {
	var datosUno = [];

	$.each(valorJSON, function (key,value) {
		datosUno.push({name:key,y:parseInt(value['porcentaje'])});
	});


	$('#containerGraphics').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: true
			}
		},
		series: [{
			name: "Porcentaje",
			colorByPoint: true,
			data: datosUno
		}]
	});
}

function generarGraficasVP (valorJSONVP) {
	var datosDos = [];
	$.each(valorJSONVP, function (key,value) {
		datosDos.push({name:key,y:parseInt(value['porcentaje'])});
	});


	$('#containerGraphics_VP').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: true
			}
		},
		series: [{
			name: "Porcentaje",
			colorByPoint: true,
			data: datosDos
		}]
	});
}

function id_estado_VP_lista (id_solicitante) {

	var fec_desde = $('#fec_desde_estado_VP').val();
	var fec_hasta = $('#fec_hasta_estado_VP').val();
	var id_estado = $('#id_estado').val();

	$('#ListadoProyectoSolicitante').hide();
	$('#ListadoProyectoEstado').show();
	$('#ListadoProyectoTipo').hide();

	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '3',
			'idestadoVPLista':id_estado,
			'idsolicitante':id_solicitante,
			'fechainicio':fec_desde,
			'fechacierre':fec_hasta 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataVPLista = JSON.parse(response);

		$("#footer_estado_VP_lista").html(' ');
		$.each(serverDataVPLista, function (key,value) {
			$("#footer_estado_VP_lista").append('<li class="seletable arrow" onclick="VerDetalleProyecto('+key+')" > <a href="" data-view-section="DetalleProyecto"> <strong class="text bold" >'+value['proyecto']+'</strong> <small class="text bold"> ITPAM: <span>'+value['itpam']+'</> </small> <small class="text bold">Avance: <span>'+value['avance']+'</span> </small> </a> </li>');
		});


	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
}

function VerDetalleProyecto (id_proyecto) {
	
	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '4',
			'id_proyecto':id_proyecto
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataDetalle = JSON.parse(response);

		$("#ListaDetalleProyecto").html(' ');
		$.each(serverDataDetalle, function (key,value) {
			$("#ListaDetalleProyecto").append('<li class="cancel"> <strong class="title centered text bold" >ITPAM</strong> <small class="text bold">'+value['itpam']+'</small></li> <li class="cancel" > <strong class="title centered text bold" >Nombre proyecto</strong> <small class="text bold">'+value['proyecto']+'</small> </li> <li class="cancel" > <strong class="title centered text bold" >Fecha registro</strong> <small class="text bold">'+value['fecharegistro']+'</small> </li> <li class="cancel" > <strong class="title centered text bold" >Recurso</strong> <small class="text bold">'+value['recurso']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Tipo</strong> <small class="text bold">'+value['tipo']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Vicepresidencia</strong> <small class="text bold">'+value['vp']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Area solicitante</strong> <small class="text bold">'+value['area']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Funcional</strong> <small class="text bold">'+value['funcional']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Fecha solicitud</strong> <small class="text bold">'+value['fechaSolicitud']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Tipo iniciativa</strong> <small class="text bold">'+value['tipoIniciativa']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Fecha esperada inicio</strong> <small class="text bold">'+value['fechaEsperada']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Observaciones</strong> <small class="text bold">'+value['observacion']+'</small> </li>');
		});


}).fail(function (response) {
	console.log("ocurrio un error " + response)
});
}

