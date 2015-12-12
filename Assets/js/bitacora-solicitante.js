
$('#btnSolicitanteHome').click(function () {
	
	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').hide();
	$('#menu_Proyecto_Section').show();


	var nowS = moment().format('YYYY-MM-DD');
	todayS = new Date();
	yesterdayS = new Date(todayS.setDate(todayS.getDate() - 182));
	var ayerS = moment(yesterdayS).format('YYYY-MM-DD');
	$('#fec_desde_Solicitante').val(ayerS);
	$('#fec_hasta_Solicitante').val(nowS);

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '5',
			'fec_inicio_S':ayerS,
			'fec_cierre_S':nowS 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverSolicitante = JSON.parse(response);

		$("#footer_Solicitante").html(' ');
		$.each(serverSolicitante, function (key,value) {
			$("#footer_Solicitante").append('<li class="seletable arrow" onclick="id_VP_Estado_Lista('+value['id']+');" > <a href="" data-view-section="main_solicitante_estado"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

		generarGraficasSolicitante(serverSolicitante);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});

});

$('#menu_Solicitante_Home').click(function () {
	
	$('#menu_Estado_Section').show();
	$('#menu_Proyecto_Section').show();
	$('#menu_Solicitante_Section').hide();

	var nowS = moment().format('YYYY-MM-DD');
	todayS = new Date();
	yesterdayS = new Date(todayS.setDate(todayS.getDate() - 182));
	var ayerS = moment(yesterdayS).format('YYYY-MM-DD');
	$('#fec_desde_Solicitante').val(ayerS);
	$('#fec_hasta_Solicitante').val(nowS);

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '5',
			'fec_inicio_S':ayerS,
			'fec_cierre_S':nowS 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverSolicitante = JSON.parse(response);

		$("#footer_Solicitante").html(' ');
		$.each(serverSolicitante, function (key,value) {
			$("#footer_Solicitante").append('<li class="seletable arrow" onclick="id_VP_Estado_Lista('+value['id']+');" > <a href="" data-view-section="main_solicitante_estado"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

		generarGraficasSolicitante(serverSolicitante);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});

});

$('#menu_Solicitante_Section').click(function () {
	
	$('#menu_Estado_Section').show();
	$('#menu_Proyecto_Section').show();
	$('#menu_Solicitante_Section').hide();

	var nowS = moment().format('YYYY-MM-DD');
	todayS = new Date();
	yesterdayS = new Date(todayS.setDate(todayS.getDate() - 182));
	var ayerS = moment(yesterdayS).format('YYYY-MM-DD');
	$('#fec_desde_Solicitante').val(ayerS);
	$('#fec_hasta_Solicitante').val(nowS);

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '5',
			'fec_inicio_S':ayerS,
			'fec_cierre_S':nowS 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverSolicitante = JSON.parse(response);

		$("#footer_Solicitante").html(' ');
		$.each(serverSolicitante, function (key,value) {
			$("#footer_Solicitante").append('<li class="seletable arrow" onclick="id_VP_Estado_Lista('+value['id']+');" > <a href="" data-view-section="main_solicitante_estado"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

		generarGraficasSolicitante(serverSolicitante);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});

});

$('#btnSolicitanteUpdate').click(function () {
	
	$('#menu_Estado_Section').show();
	$('#menu_Proyecto_Section').show();
	$('#menu_Solicitante_Section').hide();

	var ayerS = $('#fec_desde_Solicitante').val();
	var nowS = $('#fec_hasta_Solicitante').val();

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '5',
			'fec_inicio_S':ayerS,
			'fec_cierre_S':nowS 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverSolicitante = JSON.parse(response);

		$("#footer_Solicitante").html(' ');
		$.each(serverSolicitante, function (key,value) {
			$("#footer_Solicitante").append('<li class="seletable arrow" onclick="id_VP_Estado_Lista('+value['id']+');" > <a href="" data-view-section="main_solicitante_estado"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

		generarGraficasSolicitante(serverSolicitante);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});

});

function id_VP_Estado_Lista (id_solicitante) {

	var nowS = moment().format('YYYY-MM-DD');
	todayS = new Date();
	yesterdayS = new Date(todayS.setDate(todayS.getDate() - 182));
	var ayerS = moment(yesterdayS).format('YYYY-MM-DD');
	$('#fec_desde_SolicitanteEstado').val(ayerS);
	$('#fec_hasta_SolicitanteEstado').val(nowS);

	$('#id_solicitanteEstado').val(id_solicitante);

	var fec_desde = $('#fec_desde_Solicitante').val();
	var fec_hasta = $('#fec_hasta_Solicitante').val();
	
	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '6',
			'id_solicitante':id_solicitante,
			'fec_inicio_S_E':fec_desde,
			'fec_cierre_S_E':fec_hasta 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataSolicitanteLista = JSON.parse(response);

		generarGraficasSolicitanteEstado(serverDataSolicitanteLista);

		$("#footer_Solicitante_Estado").html(' ');
		$.each(serverDataSolicitanteLista, function (key,value) {
			$("#footer_Solicitante_Estado").append('<li class="seletable arrow" onclick="Listado_ProyectoSolicitante('+value['id']+');" > <a href="" data-view-section="main_estado_VP_Lista"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});


	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
}


$('#btnSolicitanteUpdate_Estado').click(function () {

	var id_solicitante = $('#id_solicitanteEstado').val();

	var fec_desde = $('#fec_desde_Solicitante').val();
	var fec_hasta = $('#fec_hasta_Solicitante').val();


	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '6',
			'id_solicitante':id_solicitante,
			'fec_inicio_S_E':fec_desde,
			'fec_cierre_S_E':fec_hasta 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataSolicitanteLista = JSON.parse(response);

		generarGraficasSolicitanteEstado(serverDataSolicitanteLista);

		$("#footer_Solicitante_Estado").html(' ');
		$.each(serverDataSolicitanteLista, function (key,value) {
			$("#footer_Solicitante_Estado").append('<li class="seletable arrow" onclick="Listado_ProyectoSolicitante('+value['id']+');" > <a href="" data-view-section="main_estado_VP_Lista"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
});

function Listado_ProyectoSolicitante (id_estado) {
	
	var fec_desde = $('#fec_desde_SolicitanteEstado').val();
	var fec_hasta = $('#fec_hasta_SolicitanteEstado').val();
	var id_solicitante = $('#id_solicitanteEstado').val();

	$('#ListadoProyectoEstado').hide();
	$('#ListadoProyectoSolicitante').show();
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
			$("#footer_estado_VP_lista").append('<li class="seletable arrow" onclick="VerDetalleProyectoSolicitante('+key+')" > <a href="" data-view-section="DetalleProyecto"> <strong class="text bold" >'+value['proyecto']+'</strong> <small class="text bold"> ITPAM: <span>'+value['itpam']+'</> </small> <small class="text bold">Avance: <span>'+value['avance']+'</span> </small> </a> </li>');
		});


	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
}

function VerDetalleProyectoSolicitante (id_proyecto) {
	
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

function generarGraficasSolicitante (valorJSON) {
	var datosUno = [];

	$.each(valorJSON, function (key,value) {
		datosUno.push({name:key,y:parseInt(value['porcentaje'])});
	});


	$('#containerGraphicsSolicitante').highcharts({
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

function generarGraficasSolicitanteEstado (valorJSON) {
	var datosUno = [];

	$.each(valorJSON, function (key,value) {
		datosUno.push({name:key,y:parseInt(value['porcentaje'])});
	});


	$('#containerGraphicsSolicitanteEstado').highcharts({
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


