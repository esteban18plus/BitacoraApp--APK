
$('#btnTipoProyectoHome').click(function () {
	
	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').hide();

	var nowT = moment().format('YYYY-MM-DD');
	todayT = new Date();
	yesterdayT = new Date(todayT.setDate(todayT.getDate() - 182));
	var ayerT = moment(yesterdayT).format('YYYY-MM-DD');
	$('#fec_desde_tipo').val(ayerT);
	$('#fec_hasta_tipo').val(nowT);

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '7',
			'fec_inicio_T':ayerT,
			'fec_cierre_T':nowT 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataTipo = JSON.parse(response);

		$("#footer_Tipo").html(' ');
		$.each(serverDataTipo, function (key,value) {
			$("#footer_Tipo").append('<li class="seletable arrow" onclick="MetodoIdTipoEstado('+value['id']+');" > <a href="" data-view-section="main_proyecto_estado" > <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

		generarGraficasTipo(serverDataTipo);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});


});

$('#menu_Proyecto_Home').click(function  () {
	
	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').hide();

	var nowT = moment().format('YYYY-MM-DD');
	todayT = new Date();
	yesterdayT = new Date(todayT.setDate(todayT.getDate() - 182));
	var ayerT = moment(yesterdayT).format('YYYY-MM-DD');
	$('#fec_desde_tipo').val(ayerT);
	$('#fec_hasta_tipo').val(nowT);

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '7',
			'fec_inicio_T':ayerT,
			'fec_cierre_T':nowT 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataTipo = JSON.parse(response);

		$("#footer_Tipo").html(' ');
		$.each(serverDataTipo, function (key,value) {
			$("#footer_Tipo").append('<li class="seletable arrow" onclick="MetodoIdTipoEstado('+value['id']+');" > <a href="" data-view-section="main_proyecto_estado"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

		generarGraficasTipo(serverDataTipo);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});

});

$('#menu_Proyecto_Section').click(function () {
	
	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').hide();

	var nowT = moment().format('YYYY-MM-DD');
	todayT = new Date();
	yesterdayT = new Date(todayT.setDate(todayT.getDate() - 182));
	var ayerT = moment(yesterdayT).format('YYYY-MM-DD');
	$('#fec_desde_tipo').val(ayerT);
	$('#fec_hasta_tipo').val(nowT);

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '7',
			'fec_inicio_T':ayerT,
			'fec_cierre_T':nowT 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataTipo = JSON.parse(response);

		$("#footer_Tipo").html(' ');
		$.each(serverDataTipo, function (key,value) {
			$("#footer_Tipo").append('<li class="seletable arrow" onclick="MetodoIdTipoEstado('+value['id']+');" > <a href="" data-view-section="main_proyecto_estado"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

		generarGraficasTipo(serverDataTipo);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
});

$('#btnTipoProyectoUpdate').click(function () {
	
	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').hide();

	var ayerT = $('#fec_desde_tipo').val();
	var nowT = $('#fec_hasta_tipo').val();

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '7',
			'fec_inicio_T':ayerT,
			'fec_cierre_T':nowT 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataTipo = JSON.parse(response);

		$("#footer_Tipo").html(' ');
		$.each(serverDataTipo, function (key,value) {
			$("#footer_Tipo").append('<li class="seletable arrow" onclick="MetodoIdTipoEstado('+value['id']+');" > <a href="" data-view-section="main_proyecto_estado"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

		generarGraficasTipo(serverDataTipo);

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
});

$('#btnTipoProyectoUpdate_estado').click(function () {

	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	var id_Tipo_Estado = $('#tipoproyectoestadoId').val();

	var ayerT = $('#fec_desde_tipo_estado').val();
	var nowT = $('#fec_hasta_tipo_estado').val();

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '8',
			'id_tipo_proyecto':id_Tipo_Estado,
			'fec_inicio_TE':ayerT,
			'fec_cierre_TE':nowT 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataTipoEstado = JSON.parse(response);

		generarGraficasTipoEstado(serverDataTipoEstado);

		$("#footer_Tipo_estado").html(' ');
		$.each(serverDataTipoEstado, function (key,value) {
			$("#footer_Tipo_estado").append('<li class="seletable arrow" onclick="MetodoIdTipoEstadoVP('+value['id']+');" > <a href="" data-view-section="main_proyecto_estadoVP"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});

});

function MetodoIdTipoEstado (id_Tipo_Estado) {
	
	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	$('#tipoproyectoestadoId').val(id_Tipo_Estado);

	var nowT = moment().format('YYYY-MM-DD');
	todayT = new Date();
	yesterdayT = new Date(todayT.setDate(todayT.getDate() - 182));
	var ayerT = moment(yesterdayT).format('YYYY-MM-DD');
	$('#fec_desde_tipo_estado').val(ayerT);
	$('#fec_hasta_tipo_estado').val(nowT);

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '8',
			'id_tipo_proyecto':id_Tipo_Estado,
			'fec_inicio_TE':ayerT,
			'fec_cierre_TE':nowT 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataTipoEstado = JSON.parse(response);

		generarGraficasTipoEstado(serverDataTipoEstado);

		$("#footer_Tipo_estado").html(' ');
		$.each(serverDataTipoEstado, function (key,value) {
			$("#footer_Tipo_estado").append('<li class="seletable arrow" onclick="MetodoIdTipoEstadoVP('+value['id']+');" > <a href="" data-view-section="main_proyecto_estadoVP"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
}

function MetodoIdTipoEstadoVP (id_Tipo_EstadoVP) {
	
	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	var nowT = moment().format('YYYY-MM-DD');
	todayT = new Date();
	yesterdayT = new Date(todayT.setDate(todayT.getDate() - 182));
	var ayerT = moment(yesterdayT).format('YYYY-MM-DD');

	$('#fec_desde_tipo_estadoVP').val(ayerT);
	$('#fec_hasta_tipo_estadoVP').val(nowT);
	var id_tipo_proyecto = 	$('#tipoproyectoestadoId').val();
	$('#tipoproyectoestadoId_tipo').val(id_tipo_proyecto);
	$('#tipoproyectoestadoId_estado').val(id_Tipo_EstadoVP);

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '9',
			'id_estado':id_Tipo_EstadoVP,
			'id_tipo_proyecto':id_tipo_proyecto,
			'fec_inicio_TVP':ayerT,
			'fec_cierre_TVP':nowT 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataTipoEstadoVP = JSON.parse(response);

		generarGraficasTipoEstadoVP(serverDataTipoEstadoVP);

		$("#footer_Tipo_estadoVP").html(' ');
		$.each(serverDataTipoEstadoVP, function (key,value) {
			$("#footer_Tipo_estadoVP").append('<li class="seletable arrow" onclick="Listado_ProyectoTipo('+value['id']+');" > <a href="" data-view-section="main_proyectoTipo_Lista"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
}

$('#btnTipoProyectoUpdate_estadoVP').click(function () {
	
	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	var ayerT = $('#fec_desde_tipo_estadoVP').val();
	var nowT = $('#fec_hasta_tipo_estadoVP').val();
	var id_tipo_proyecto = 	$('#tipoproyectoestadoId_tipo').val();
	var id_Tipo_EstadoVP = $('#tipoproyectoestadoId_estado').val();

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '9',
			'id_estado':id_Tipo_EstadoVP,
			'id_tipo_proyecto':id_tipo_proyecto,
			'fec_inicio_TVP':ayerT,
			'fec_cierre_TVP':nowT 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataTipoEstadoVPbtn = JSON.parse(response);

		generarGraficasTipoEstadoVP(serverDataTipoEstadoVPbtn);

		$("#footer_Tipo_estadoVP").html(' ');
		$.each(serverDataTipoEstadoVPbtn, function (key,value) {
			$("#footer_Tipo_estadoVP").append('<li class="seletable arrow" onclick="Listado_ProyectoTipo('+value['id']+');" > <a href="" data-view-section="main_proyectoTipo_Lista"> <strong>'+key+'</strong> <small>'+value['cantidad']+'</small> </a> </li>');
		});

	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
});

function Listado_ProyectoTipo (id_VP) {
	
	var fec_desde = $('#fec_desde_tipo_estadoVP').val();
	var fec_hasta = $('#fec_hasta_tipo_estadoVP').val();
    var id_Tipo_Estado = $('#tipoproyectoestadoId_estado').val();
    var id_tipo_proyecto = 	$('#tipoproyectoestadoId_tipo').val();

	$('#ListadoProyectoEstado').hide();
	$('#ListadoProyectoSolicitante').hide();
	$('#ListadoProyectoTipo').show();

	$('#menu_Estado_Section').show();
	$('#menu_Solicitante_Section').show();
	$('#menu_Proyecto_Section').show();

	$.ajax({
		'type': 'post',
		'dataType': 'text',
		'data': {
			'Opcion': '10',
			'idestadoVPLista':id_Tipo_Estado,
			'idsolicitante':id_VP,
			'id_tipo_proyecto':id_tipo_proyecto,
			'fechainicio':fec_desde,
			'fechacierre':fec_hasta 
		},
		'url': 'http://serviciowebandroid.tk/BitacoraMovil-Responsive-V04/Controller/appController.php'
	}).done(function (response) {

		var serverDataVPLista = JSON.parse(response);
		$("#footer_proyectoTipo_lista").html(' ');
		$.each(serverDataVPLista, function (key,value) {
			$("#footer_proyectoTipo_lista").append('<li class="seletable arrow" onclick="VerDetalleProyectoTipo('+key+')" > <a href="" data-view-section="DetalleProyectoTipo"> <strong class="text bold" >'+value['proyecto']+'</strong> <small class="text bold"> ITPAM: <span>'+value['itpam']+'</> </small> <small class="text bold">Avance: <span>'+value['avance']+'</span> </small> </a> </li>');
		});


	}).fail(function (response) {
		console.log("ocurrio un error " + response)
	});
}

function VerDetalleProyectoTipo (id_proyecto) {
	
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

		$("#ListaDetalleProyectoTipo").html(' ');
		$.each(serverDataDetalle, function (key,value) {
			$("#ListaDetalleProyectoTipo").append('<li class="cancel"> <strong class="title centered text bold" >ITPAM</strong> <small class="text bold">'+value['itpam']+'</small></li> <li class="cancel" > <strong class="title centered text bold" >Nombre proyecto</strong> <small class="text bold">'+value['proyecto']+'</small> </li> <li class="cancel" > <strong class="title centered text bold" >Fecha registro</strong> <small class="text bold">'+value['fecharegistro']+'</small> </li> <li class="cancel" > <strong class="title centered text bold" >Recurso</strong> <small class="text bold">'+value['recurso']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Tipo</strong> <small class="text bold">'+value['tipo']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Vicepresidencia</strong> <small class="text bold">'+value['vp']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Area solicitante</strong> <small class="text bold">'+value['area']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Funcional</strong> <small class="text bold">'+value['funcional']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Fecha solicitud</strong> <small class="text bold">'+value['fechaSolicitud']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Tipo iniciativa</strong> <small class="text bold">'+value['tipoIniciativa']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Fecha esperada inicio</strong> <small class="text bold">'+value['fechaEsperada']+'</small> </li> <li class="cancel"> <strong class="title centered text bold" >Observaciones</strong> <small class="text bold">'+value['observacion']+'</small> </li>');
		});


}).fail(function (response) {
	console.log("ocurrio un error " + response)
});
}

function generarGraficasTipo (valorJSON) {
	var datosUno = [];

	$.each(valorJSON, function (key,value) {
		datosUno.push({name:key,y:parseInt(value['porcentaje'])});
	});


	$('#containerGraphicsTipo').highcharts({
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

function generarGraficasTipoEstado (valorJSON) {
	var datosUno = [];

	$.each(valorJSON, function (key,value) {
		datosUno.push({name:key,y:parseInt(value['porcentaje'])});
	});


	$('#containerGraphicsTipo_estado').highcharts({
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

function generarGraficasTipoEstadoVP (valorJSON) {
	var datosUno = [];

	$.each(valorJSON, function (key,value) {
		datosUno.push({name:key,y:parseInt(value['porcentaje'])});
	});


	$('#containerGraphicsTipo_estadoVP').highcharts({
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