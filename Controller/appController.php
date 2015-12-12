<?php

require_once '../Config/Config.php';
require_once '../Library/DataBase.php';
require_once '../Model/ProyectosModel.php';

function ProyectoEstado(){
	$Mensaje =array();
	$modelProyectos = new ProyectosModel();
	$modelProyectos->__SET('fecha_solicitud_desde',$_POST['fec_inicio']);
	$modelProyectos->__SET('fecha_solicitud_hasta',$_POST['fec_cierre']);
	foreach ($modelProyectos->ListarEstadoProyecto() as $value){

		$Mensaje[$value['estado']] = array("porcentaje"=>$value['porcentaje'],"cantidad"=>$value['cantidad'],"id"=>$value['id']);
	}


	echo json_encode($Mensaje);
}

function ProyectoEstadoVP(){
	$MensajeVP =array();
	$modelProyectosVP = new ProyectosModel();
	$modelProyectosVP->__SET('id_estado',$_POST['id_estado_VP']);
	$modelProyectosVP->__SET('fecha_solicitud_desde',$_POST['fec_inicio']);
	$modelProyectosVP->__SET('fecha_solicitud_hasta',$_POST['fec_cierre']);
	foreach ($modelProyectosVP->ListarEstadoProyectoVP() as $value){

		$MensajeVP[$value['solicitante']] = array("porcentaje"=>$value['porcentaje'],"cantidad"=>$value['cantidad'],"id"=>$value['id'],"estado"=>$value['estado']);
	} 

	echo json_encode($MensajeVP);
}

function ProyectoEstadoVPLista(){
	$MensajeVPLista =array();
	
	$modelProyectosVPLista = new ProyectosModel();


	$modelProyectosVPLista->__SET('id_estado',$_POST['idestadoVPLista']);
	$modelProyectosVPLista->__SET('id_vicepresidencia',$_POST['idsolicitante']);
	$modelProyectosVPLista->__SET('fecha_solicitud_desde',$_POST['fechainicio']);
	$modelProyectosVPLista->__SET('fecha_solicitud_hasta',$_POST['fechacierre']);
	foreach ($modelProyectosVPLista->ListaProyectoVPEstado() as $value){

		$MensajeVPLista[$value['id_proyecto']] = array("itpam"=>$value['itpam'],"proyecto"=>$value['nombre_proyecto'],"avance"=>$value['porcentaje_avance_proyecto']);
	}
	echo json_encode($MensajeVPLista);
}

function ProyectoTipoVPLista(){
	$MensajeVPLista =array();
	
	$modelProyectosVPLista = new ProyectosModel();


	$modelProyectosVPLista->__SET('id_estado',$_POST['idestadoVPLista']);
	$modelProyectosVPLista->__SET('id_tipo_proyecto',$_POST['id_tipo_proyecto']);
	$modelProyectosVPLista->__SET('id_vicepresidencia',$_POST['idsolicitante']);
	$modelProyectosVPLista->__SET('fecha_solicitud_desde',$_POST['fechainicio']);
	$modelProyectosVPLista->__SET('fecha_solicitud_hasta',$_POST['fechacierre']);
	foreach ($modelProyectosVPLista->ListaProyectoVPTipo() as $value){

		$MensajeVPLista[$value['id_proyecto']] = array("itpam"=>$value['itpam'],"proyecto"=>$value['nombre_proyecto'],"avance"=>$value['porcentaje_avance_proyecto']);
	}
	echo json_encode($MensajeVPLista);
}

function ProyectoDetalle(){
	$MensajeDetalle =array();
	
	$modelProyectosDetalle = new ProyectosModel();


	$modelProyectosDetalle->__SET('id_proyecto',$_POST['id_proyecto']);
	foreach ($modelProyectosDetalle->DetalleProyecto() as $value){

		$MensajeDetalle[$value['id_proyecto']] = array("fecharegistro"=>$value['fecha_registro'],"itpam"=>$value['itpam'],"proyecto"=>$value['nombre_proyecto'],"tipo"=>$value['nombre_tipo'],"vp"=>$value['nombre_vicepresidencia'],"area"=>$value['nombre_area'],"funcional"=>$value['nombre_funcional'],"fechaSolicitud"=>$value['fecha_solicitud'],"tipoIniciativa"=>$value['nombre_tipo_iniciativa'],"fechaEsperada"=>$value['fecha_estimada_inicio'],"observacion"=>$value['observaciones'],"recurso"=>$value['nom']);
	}
	echo json_encode($MensajeDetalle);
}



function ProyectoSolicitante() {

	$MensajeSolicitante = array();

	$modelProyectosSolicitante = new ProyectosModel();
	$modelProyectosSolicitante->__SET('fecha_solicitud_desde',$_POST['fec_inicio_S']);
	$modelProyectosSolicitante->__SET('fecha_solicitud_hasta',$_POST['fec_cierre_S']);
	foreach ($modelProyectosSolicitante->ListarSolicitanteProyecto() as $value) {

		$MensajeSolicitante[$value['nombre_vicepresidencia']] = array("porcentaje"=>$value['porcentaje'],"cantidad"=>$value['cantidad'],"id"=>$value['id']);
	}

	echo json_encode($MensajeSolicitante);
}

function ProyectoSolicitanteEstado() {

	$MensajeSolicitanteEstado = array();

	$modelProyectosSolicitanteEstado = new ProyectosModel();
	$modelProyectosSolicitanteEstado->__SET('id_vicepresidencia',$_POST['id_solicitante']);
	$modelProyectosSolicitanteEstado->__SET('fecha_solicitud_desde',$_POST['fec_inicio_S_E']);
	$modelProyectosSolicitanteEstado->__SET('fecha_solicitud_hasta',$_POST['fec_cierre_S_E']);
	foreach ($modelProyectosSolicitanteEstado->ListarSolicitanteEstadoProyecto() as $value) {

		$MensajeSolicitanteEstado[$value['nombre_estado']] = array("porcentaje"=>$value['porcentaje'],"cantidad"=>$value['cantidad'],"id"=>$value['id_estado']);
	}

	echo json_encode($MensajeSolicitanteEstado);
}

function ProyectoTipo() {

	$MensajeTipo = array();

	$modelProyectosTipo = new ProyectosModel();
	$modelProyectosTipo->__SET('fecha_solicitud_desde',$_POST['fec_inicio_T']);
	$modelProyectosTipo->__SET('fecha_solicitud_hasta',$_POST['fec_cierre_T']);
	foreach ($modelProyectosTipo->ListarTipoProyecto() as $value) {

		$MensajeTipo[$value['nombre_tipo']] = array("porcentaje"=>$value['porcentaje'],"cantidad"=>$value['cantidad'],"id"=>$value['id']);
	}

	echo json_encode($MensajeTipo);
}

function ProyectoTipoEstado() {

	$MensajeTipoEstado = array();

	$modelProyectosTipoEstado = new ProyectosModel();
	$modelProyectosTipoEstado->__SET('id_tipo_proyecto',$_POST['id_tipo_proyecto']);
	$modelProyectosTipoEstado->__SET('fecha_solicitud_desde',$_POST['fec_inicio_TE']);
	$modelProyectosTipoEstado->__SET('fecha_solicitud_hasta',$_POST['fec_cierre_TE']);
	foreach ($modelProyectosTipoEstado->ListarTipoProyectoEstado() as $value) {

		$MensajeTipoEstado[$value['nombre_estado']] = array("porcentaje"=>$value['porcentaje'],"cantidad"=>$value['cantidad'],"id"=>$value['id']);
	}

	echo json_encode($MensajeTipoEstado);
}

function ProyectoTipoEstadoVP() {

	$MensajeTipoEstadoVP = array();

	$modelProyectosTipoEstadoVP = new ProyectosModel();
	$modelProyectosTipoEstadoVP->__SET('id_estado',$_POST['id_estado']);
	$modelProyectosTipoEstadoVP->__SET('id_tipo_proyecto',$_POST['id_tipo_proyecto']);
	$modelProyectosTipoEstadoVP->__SET('fecha_solicitud_desde',$_POST['fec_inicio_TVP']);
	$modelProyectosTipoEstadoVP->__SET('fecha_solicitud_hasta',$_POST['fec_cierre_TVP']);
	foreach ($modelProyectosTipoEstadoVP->ListarTipoProyectoEstadoVP() as $value) {

		$MensajeTipoEstadoVP[$value['nombre_vicepresidencia']] = array("porcentaje"=>$value['porcentaje'],"cantidad"=>$value['cantidad'],"id"=>$value['id']);
	}

	echo json_encode($MensajeTipoEstadoVP);
}




if (isset($_POST['Opcion'])!=null) {
	switch ($_POST['Opcion']){
		case '1':
		ProyectoEstado();
		break;
		case '2':
		ProyectoEstadoVP();
		break;
		case '3':
		ProyectoEstadoVPLista();
		break;
		case '4':
		ProyectoDetalle();
		break;
		case '5':
		ProyectoSolicitante();
		break;
		case '6':
		ProyectoSolicitanteEstado();
		break;
		case '7':
		ProyectoTipo();
		break;
		case '8':
		ProyectoTipoEstado();
		break;
		case '9':
		ProyectoTipoEstadoVP();
		break;
		case '10':
		ProyectoTipoVPLista();
		break;
	}
}else{

	include_once '../View/Aplication/index.php';

}
?>
