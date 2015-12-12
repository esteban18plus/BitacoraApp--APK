<?php 
/**
* 
*/
class ProyectosModel 
{
	
	private $id_estado;
	private $id_proyecto;
	private $id_vicepresidencia;
	private $id_tipo_proyecto;
	private $fecha_solicitud_desde;
	private $fecha_solicitud_hasta;

	function __construct()
	{
		$this->db=Database::getInstance();
	}

	public function __GET($atributo){
		return $this->$atributo;
	}

	public function __SET($atributo, $valor) {
		$this->$atributo = $valor;
	}

	function ListarEstadoProyecto(){

		$sql = 'SELECT pry_estado_proyecto.id_estado AS id,count(id_proyecto)*100/(SELECT COUNT(id_proyecto) AS cantidad FROM pry_proyecto WHERE fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta ) as porcentaje,COUNT(id_proyecto) AS cantidad, pry_estado_proyecto.nombre_estado AS estado FROM pry_proyecto LEFT JOIN pry_estado_proyecto ON pry_proyecto.estado_actual_proyecto = pry_estado_proyecto.id_estado WHERE fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta GROUP BY nombre_estado';
		$sth = $this->db->prepare($sql);
		$sth->execute(array(':fecha_solicitud_desde' => $this->__GET("fecha_solicitud_desde"),':fecha_solicitud_hasta' => $this->__GET("fecha_solicitud_hasta")));
		return $sth->fetchAll();
	}

	function ListarEstadoProyectoVP(){

		$sql = 'SELECT pry_vicepresidencia.id_vicepresidencia AS id,nombre_estado AS estado,COUNT(id_proyecto)*100/(SELECT COUNT(id_proyecto) FROM pry_proyecto WHERE estado_actual_proyecto = :id_estado and fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta GROUP BY nombre_vicepresidencia) AS porcentaje,COUNT(id_proyecto) AS cantidad, nombre_vicepresidencia AS solicitante FROM pry_proyecto LEFT JOIN pry_vicepresidencia ON pry_proyecto.vicepresidencia = pry_vicepresidencia.id_vicepresidencia JOIN pry_estado_proyecto ON pry_proyecto.estado_actual_proyecto = pry_estado_proyecto.id_estado WHERE estado_actual_proyecto = :id_estado and fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta GROUP BY nombre_vicepresidencia';
		$sth = $this->db->prepare($sql);
		$sth->execute(array(':id_estado' => $this->__GET("id_estado"),':fecha_solicitud_desde' => $this->__GET("fecha_solicitud_desde"),':fecha_solicitud_hasta' => $this->__GET("fecha_solicitud_hasta")));
		return $sth->fetchAll();
	}

	function ListaProyectoVPEstado(){

		$sql = 'SELECT id_proyecto , itpam,nombre_proyecto, porcentaje_avance_proyecto FROM pry_proyecto LEFT JOIN pry_vicepresidencia ON pry_proyecto.vicepresidencia = pry_vicepresidencia.id_vicepresidencia WHERE estado_actual_proyecto = :id_estado and fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta and pry_vicepresidencia.id_vicepresidencia = :id_vicepresidencia GROUP BY id_proyecto LIMIT 10';
		$sth = $this->db->prepare($sql);
		$sth->execute(array(':id_estado' => $this->__GET("id_estado"),':fecha_solicitud_desde' => $this->__GET("fecha_solicitud_desde"),':fecha_solicitud_hasta' => $this->__GET("fecha_solicitud_hasta"),':id_vicepresidencia' => $this->__GET("id_vicepresidencia")));
		return $sth->fetchAll();
	}

		function ListaProyectoVPTipo(){

		$sql = 'SELECT id_proyecto , itpam,nombre_proyecto, porcentaje_avance_proyecto FROM pry_proyecto LEFT JOIN pry_vicepresidencia ON pry_proyecto.vicepresidencia = pry_vicepresidencia.id_vicepresidencia WHERE estado_actual_proyecto = :id_estado and fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta and pry_vicepresidencia.id_vicepresidencia = :id_vicepresidencia AND tipo_proyecto = :id_tipo_proyecto GROUP BY id_proyecto LIMIT 10';
		$sth = $this->db->prepare($sql);
		$sth->execute(array(':id_estado' => $this->__GET("id_estado"),':fecha_solicitud_desde' => $this->__GET("fecha_solicitud_desde"),':fecha_solicitud_hasta' => $this->__GET("fecha_solicitud_hasta"),':id_vicepresidencia' => $this->__GET("id_vicepresidencia"),':id_tipo_proyecto' => $this->__GET("id_tipo_proyecto")));
		return $sth->fetchAll();
	}

	function DetalleProyecto(){

		$sql = 'SELECT id_proyecto,fecha_registro,itpam,nombre_proyecto,pry_tipo_proyecto.nombre_tipo,pry_vicepresidencia.nombre_vicepresidencia,pry_area_solicitante.nombre_area,pry_funcional.nombre_funcional,fecha_solicitud,pry_tipoiniciativa.nombre_tipo_iniciativa,fecha_estimada_inicio,observaciones,planning_user.nom FROM `pry_proyecto` LEFT JOIN pry_tipo_proyecto ON pry_proyecto.tipo_proyecto = pry_tipo_proyecto.id_tipo_proyecto LEFT JOIN pry_vicepresidencia ON pry_proyecto.vicepresidencia = pry_vicepresidencia.id_vicepresidencia LEFT JOIN pry_area_solicitante ON pry_proyecto.area_solicitante = pry_area_solicitante.id_area_solicitante LEFT JOIN pry_funcional ON pry_proyecto.funcional = pry_funcional.id_funcional LEFT JOIN pry_tipoiniciativa ON pry_proyecto.tipo_iniciativa = pry_tipoiniciativa.id_tipoiniciativa LEFT JOIN pry_recurso_proyecto ON pry_proyecto.id_proyecto = pry_recurso_proyecto.proyecto LEFT JOIN planning_user ON planning_user.user_id = pry_recurso_proyecto.id_recurso_proyecto WHERE pry_proyecto.id_proyecto = :id_proyecto';
		$sth = $this->db->prepare($sql);
		$sth->execute(array(':id_proyecto' => $this->__GET("id_proyecto")));
		return $sth->fetchAll();
	}

	function ListarSolicitanteProyecto(){

		$sql = 'SELECT pry_vicepresidencia.id_vicepresidencia AS id,count(id_proyecto)*100/(SELECT COUNT(id_proyecto) FROM pry_proyecto WHERE fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta ) as porcentaje,COUNT(id_proyecto) AS cantidad, nombre_vicepresidencia FROM pry_proyecto LEFT JOIN pry_vicepresidencia ON pry_proyecto.vicepresidencia = pry_vicepresidencia.id_vicepresidencia WHERE fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta GROUP BY nombre_vicepresidencia';
		$sth = $this->db->prepare($sql);
		$sth->execute(array(':fecha_solicitud_desde' => $this->__GET("fecha_solicitud_desde"),':fecha_solicitud_hasta' => $this->__GET("fecha_solicitud_hasta")));
		return $sth->fetchAll();
	}

	function ListarSolicitanteEstadoProyecto(){

		$sql = 'SELECT id_estado,pry_estado_proyecto.nombre_estado,count(id_proyecto)*100/(SELECT COUNT(id_proyecto) FROM pry_proyecto WHERE fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta ) as porcentaje,COUNT(id_proyecto) AS cantidad, nombre_vicepresidencia FROM pry_proyecto LEFT JOIN pry_vicepresidencia ON pry_proyecto.vicepresidencia = pry_vicepresidencia.id_vicepresidencia LEFT JOIN pry_estado_proyecto ON pry_proyecto.estado_actual_proyecto = pry_estado_proyecto.id_estado WHERE pry_vicepresidencia.id_vicepresidencia = :id_vicepresidencia AND fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta GROUP BY pry_estado_proyecto.id_estado';
		$sth = $this->db->prepare($sql);
		$sth->execute(array(':fecha_solicitud_desde' => $this->__GET("fecha_solicitud_desde"),':fecha_solicitud_hasta' => $this->__GET("fecha_solicitud_hasta"),':id_vicepresidencia' => $this->__GET("id_vicepresidencia")));
		return $sth->fetchAll();
	}

	function ListarTipoProyecto(){

		$sql = 'SELECT pry_tipo_proyecto.id_tipo_proyecto AS id,count(id_proyecto)*100/(SELECT COUNT(id_proyecto) FROM pry_proyecto WHERE fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta) AS porcentaje ,COUNT(id_proyecto) AS cantidad,pry_tipo_proyecto.nombre_tipo FROM pry_proyecto LEFT JOIN pry_tipo_proyecto ON pry_proyecto.tipo_proyecto = pry_tipo_proyecto.id_tipo_proyecto WHERE fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta GROUP BY pry_tipo_proyecto.id_tipo_proyecto';
		$sth = $this->db->prepare($sql);
		$sth->execute(array(':fecha_solicitud_desde' => $this->__GET("fecha_solicitud_desde"),':fecha_solicitud_hasta' => $this->__GET("fecha_solicitud_hasta")));
		return $sth->fetchAll();
	}


	function ListarTipoProyectoEstado(){

		$sql = 'SELECT pry_estado_proyecto.id_estado AS id,count(id_proyecto)*100/(SELECT COUNT(id_proyecto) FROM pry_proyecto WHERE fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta) AS porcentaje ,COUNT(id_proyecto) AS cantidad,pry_estado_proyecto.nombre_estado FROM pry_proyecto LEFT JOIN pry_estado_proyecto ON pry_proyecto.estado_actual_proyecto = pry_estado_proyecto.id_estado WHERE tipo_proyecto = :id_tipo_proyecto AND fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta GROUP BY pry_estado_proyecto.id_estado';
		$sth = $this->db->prepare($sql);
		$sth->execute(array(':fecha_solicitud_desde' => $this->__GET("fecha_solicitud_desde"),':fecha_solicitud_hasta' => $this->__GET("fecha_solicitud_hasta"),':id_tipo_proyecto' => $this->__GET("id_tipo_proyecto")));
		return $sth->fetchAll();
	}

		function ListarTipoProyectoEstadoVP(){

		$sql = 'SELECT pry_vicepresidencia.id_vicepresidencia AS id,count(id_proyecto)*100/(SELECT COUNT(id_proyecto) FROM pry_proyecto WHERE fecha_solicitud >= :fecha_solicitud_desde AND fecha_solicitud <= :fecha_solicitud_hasta) AS porcentaje ,COUNT(id_proyecto) AS cantidad,pry_vicepresidencia.nombre_vicepresidencia FROM pry_proyecto LEFT JOIN pry_vicepresidencia ON pry_proyecto.vicepresidencia = pry_vicepresidencia.id_vicepresidencia LEFT JOIN pry_tipo_proyecto ON pry_proyecto.tipo_proyecto = pry_tipo_proyecto.id_tipo_proyecto WHERE estado_actual_proyecto = :id_estado AND fecha_solicitud >= :fecha_solicitud_desde AND pry_proyecto.tipo_proyecto = :id_tipo_proyecto AND fecha_solicitud <= :fecha_solicitud_hasta GROUP BY pry_vicepresidencia.id_vicepresidencia';
		$sth = $this->db->prepare($sql);
		$sth->execute(array(':fecha_solicitud_desde' => $this->__GET("fecha_solicitud_desde"),':fecha_solicitud_hasta' => $this->__GET("fecha_solicitud_hasta"),':id_estado' => $this->__GET("id_estado"),':id_tipo_proyecto' => $this->__GET("id_tipo_proyecto")));
		return $sth->fetchAll();
	}
}


?>