<!DOCTYPE html>
<html lang="es">
<head>
    <title>Bitacora</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="TigoUne">
    <link rel="stylesheet" type="text/css" href="../Assets/css/lungo.css">
    <link rel="stylesheet" type="text/css" href="../Assets/css/lungo.icon.css">
    <link rel="stylesheet" type="text/css" href="../Assets/css/lungo.theme.css">

    <script type="text/javascript" src="../Assets/js/jquery-2.1.4.js" ></script>
    <script src="../Assets/js/highcharts.js"></script>
</head>
<body>

    <!-- Inicio menu SECTIONS -->

    <aside id="settings_section">
        <header data-title="Menú"></header>
        <article class="active list indented">
            <ul>
                <li data-icon="home" class="seletable arrow"><a href="" data-view-section="main_section" data-label="Inicio" ></a></li>
                <li id="menu_Estado_Section" data-icon="bar-chart" class="seletable arrow"><a href="" data-view-section="main_estado" data-label="Estado" ></a></li>
                <li id="menu_Solicitante_Section" data-icon="bar-chart" class="seletable arrow"><a href="" data-view-section="main_solicitante" data-label="Solicitante" ></a></li>
                <li id="menu_Proyecto_Section" data-icon="bar-chart" class="seletable arrow"><a href="" data-view-section="main_proyecto" data-label="Tipo proyecto" ></a></li>
            </ul>
        </article>
    </aside>

    <!-- Fin menu SECTIONS -->


    <!-- Inicio menu HOME -->
    <aside id="settings">
        <header data-title="Menú"></header>
        <article class="active list indented">
            <ul>
                <li id="menu_Estado_Home" data-icon="bar-chart" class="seletable arrow"><a href="" data-view-section="main_estado" data-label="Estado" ></a></li>
                <li id="menu_Solicitante_Home" data-icon="bar-chart" class="seletable arrow"><a href="" data-view-section="main_solicitante" data-label="Solicitante" ></a></li>
                <li id="menu_Proyecto_Home" data-icon="bar-chart" class="seletable arrow"><a href="" data-view-section="main_proyecto" data-label="Tipo proyecto" ></a></li>
            </ul>
        </article>
    </aside>
    <!-- Fin menu HOME -->

    <!-- Inicio seccion principal de la app //-->
    <section id="main" data-transition="cover">      
        <article id="main-article" class="active indented splash">
            <div data-control="groupbar">
                <img src="http://www.epmtigouneareametropolitana.com/wp-content/uploads/2014/09/tigoune.png" class="title centered" >
                <h3 class="title centered text bold" >Bienvenido a bitacora</h3>
                <a href="" class="button anchor" data-view-section="main_section" data-label="Empezar"></a>
            </div>


        </article>

    </section>
    <!-- Fin seccion principal de la app -->    

    <!-- Inicio bloque HOME -->
    <section id="main_section"  data-transition="cover">
        <header class="text bold" data-title="Inicio" >
            <nav class="on-left">
                <button data-view-aside="settings" data-icon="menu"></button>
            </nav>
            <nav class="on-right">
                <a href="" data-view-section="main" data-icon="signout"></a>
            </nav>
        </header>

        <article class="list" >
            <ul>
                <li> <a href="" id="btnEstadoHome" data-view-section="main_estado" class="button seletable"  data-label="Estado" ></a> </li>
                <li> <a href="" id="btnSolicitanteHome" data-view-section="main_solicitante" class="button seletable" data-label="Solicitante" ></a> </li>
                <li> <a href="" id="btnTipoProyectoHome" data-view-section="main_proyecto" class="button seletable"  data-label="Tipo proyecto" ></a> </li>
            </ul>
        </article>
    </section>
    <!-- Fin bloque HOME -->  

    <!-- Inicio bloque estado -->
    <section id="main_estado"  data-transition="cover">
        <header class="text bold" data-title="Estado" >
            <nav class="on-left">
                <button data-view-aside="settings_section" data-icon="menu"></button>
            </nav>
            <nav class="on-right">
                <a href="" data-view-section="main" data-icon="signout"></a>
            </nav>
        </header>

        <article class="scroll indented" >
            <div class="form">
                <fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha desde:</label>
                        <input type="date" id="fec_desde_estado" placeholder="fecha inicial">
                    </fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha Hasta:</label>
                        <input type="date" id="fec_hasta_estado" placeholder="fecha inicial">
                    </fieldset>
                    <button class="anchor" id="btnEstadoUpdate" >Actualizar</button>
                </fieldset>
            </div>
            <center>
                <div id="containerGraphics" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto" ></div>
            </center>
            <ul id="footer_estado" class="list indented" > 

            </ul>
        </article>
        <footer>
            <nav class="with-labels">
                <a href="#" data-label="Inicio" data-view-section="main_section" data-icon="undo"></a>
            </nav>
        </footer>

    </section>

    <section id="main_estado_VP"  data-transition="cover">
        <header class="text bold" data-title="Estado - VP" >
            <nav class="on-left">
                <button data-view-aside="settings_section" data-icon="menu"></button>
            </nav>
            <nav class="on-right">
                <a href="" data-view-section="main" data-icon="signout"></a>
            </nav>
        </header>

        <article class="scroll indented" >
            <div class="form">
                <fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha desde:</label>
                        <input type="date" id="fec_desde_estado_VP" placeholder="fecha inicial">
                    </fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha Hasta:</label>
                        <input type="date" id="fec_hasta_estado_VP" placeholder="fecha inicial">
                        <input type="hidden" id="id_estado">
                    </fieldset>
                    <button class="anchor" id="btnEstadoUpdate_VP" >Actualizar</button>
                </fieldset>
            </div>
            <center>
                <div id="containerGraphics_VP" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto" ></div>
            </center>
            <ul id="footer_estado_VP" class="list indented scroll" > 

            </ul>
        </article>
        <footer>
            <nav class="with-labels">
                <a href="#" data-label="Estado" data-view-section="main_estado" data-icon="undo"></a>
            </nav>
        </footer>
    </section>
    <!-- Fin bloque estado -->

    <!-- Inicio Bloques Proyectos  -->

    <section id="main_estado_VP_Lista"  data-transition="cover">
        <header class="text bold" data-title="Lista Proyectos" >
            <nav class="on-left">
                <button data-view-aside="settings_section" data-icon="menu"></button>
            </nav>
            <nav class="on-right">
                <a href="" data-view-section="main" data-icon="signout"></a>
            </nav>
        </header>

        <article class="indented scroll" >
            <ul id="footer_estado_VP_lista" class="list indented" > 

            </ul>
        </article>
        <footer>
            <nav class="with-labels">
                <a href="#" id="ListadoProyectoEstado" data-label="Estado-VP" data-view-section="main_estado_VP" data-icon="undo"></a>
                <a href="#" id="ListadoProyectoSolicitante" data-label="Solicitante estado" data-view-section="main_solicitante_estado" data-icon="undo"></a>
                <a href="#" id="ListadoProyectoTipo" data-label="Tipo proyecto - VP" data-view-section="main_proyecto_estadoVP" data-icon="undo"></a>
            </nav>
        </footer>
    </section>

        <section id="main_proyectoTipo_Lista"  data-transition="cover">
        <header class="text bold" data-title="Lista Proyectos Beta" >
            <nav class="on-left">
                <button data-view-aside="settings_section" data-icon="menu"></button>
            </nav>
            <nav class="on-right">
                <a href="" data-view-section="main" data-icon="signout"></a>
            </nav>
        </header>

        <article class="indented scroll" >
            <ul id="footer_proyectoTipo_lista" class="list indented" > 

            </ul>
        </article>
        <footer>
            <nav class="with-labels">
                <a href="#" id="ListadoProyectoTipo" data-label="Tipo proyecto - VP" data-view-section="main_proyecto_estadoVP" data-icon="undo"></a>
            </nav>
        </footer>
    </section>

        <section id="DetalleProyectoTipo"  data-transition="cover">
        <header class="text bold" data-title="Detalle proyecto" >
            <nav class="on-left">
                <button data-view-aside="settings_section" data-icon="menu"></button>
            </nav>
            <nav class="on-right">
                <a href="" data-view-section="main" data-icon="signout"></a>
            </nav>
        </header>

        <article class="indented scroll" >
            <ul id="ListaDetalleProyectoTipo" class="list indented" > 

            </ul>
        </article>
        <footer>
            <nav class="with-labels">
                <a href="#" data-label="Lista Proyecto" data-view-section="main_proyectoTipo_Lista" data-icon="undo"></a>
            </nav>
        </footer>
    </section>

    <section id="DetalleProyecto"  data-transition="cover">
        <header class="text bold" data-title="Detalle proyecto" >
            <nav class="on-left">
                <button data-view-aside="settings_section" data-icon="menu"></button>
            </nav>
            <nav class="on-right">
                <a href="" data-view-section="main" data-icon="signout"></a>
            </nav>
        </header>

        <article class="indented scroll" >
            <ul id="ListaDetalleProyecto" class="list indented" > 

            </ul>
        </article>
        <footer>
            <nav class="with-labels">
                <a href="#" data-label="Lista Proyecto" data-view-section="main_estado_VP_Lista" data-icon="undo"></a>
            </nav>
        </footer>
    </section>

    <!-- Fin Bloques Proyectos  -->

    <!-- Inicio bloque solicitante -->

    <section id="main_solicitante"  data-transition="cover">
        <header class="text bold" data-title="Solicitante" >
            <nav class="on-left">
                <button data-view-aside="settings_section" data-icon="menu"></button>
            </nav>
            <nav class="on-right">
                <a href="" data-view-section="main" data-icon="signout"></a>
            </nav>
        </header>

        <article class="indented scroll" >
            <div class="form">
                <fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha desde:</label>
                        <input type="date" id="fec_desde_Solicitante" placeholder="fecha inicial">
                    </fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha Hasta:</label>
                        <input type="date" id="fec_hasta_Solicitante" placeholder="fecha inicial">
                    </fieldset>
                    <button class="anchor" id="btnSolicitanteUpdate" >Actualizar</button>
                </fieldset>
            </div>
            <center>
                <div id="containerGraphicsSolicitante" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto" ></div>
            </center>
            <ul id="footer_Solicitante" class="list indented" >

            </ul>
        </article>
        <footer>
            <nav class="with-labels">
                <a href="#" data-label="Inicio" data-view-section="main_section" data-icon="undo"></a>
            </nav>
        </footer>
    </section>

    <section id="main_solicitante_estado"  data-transition="cover">
        <header class="text bold" data-title="Solicitante - Estado" >
            <nav class="on-left">
                <button data-view-aside="settings_section" data-icon="menu"></button>
            </nav>
            <nav class="on-right">
                <a href="" data-view-section="main" data-icon="signout"></a>
            </nav>
        </header>

        <article class="indented scroll" >
            <div class="form">
                <fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha desde:</label>
                        <input type="date" id="fec_desde_SolicitanteEstado" placeholder="fecha inicial">
                    </fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha Hasta:</label>
                        <input type="date" id="fec_hasta_SolicitanteEstado" placeholder="fecha inicial">
                        <input type="hidden" id="id_solicitanteEstado"> 
                    </fieldset>
                    <button class="anchor" id="btnSolicitanteUpdate_Estado" >Actualizar</button>
                </fieldset>
            </div>
            <center>
                <div id="containerGraphicsSolicitanteEstado" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto" ></div>
            </center>
            <ul id="footer_Solicitante_Estado" class="list indented" >

            </ul>
        </article>
        <footer>
            <nav class="with-labels">
                <a href="#" data-label="Solicitante" data-view-section="main_solicitante" data-icon="undo"></a>
            </nav>
        </footer>
    </section>

    <!-- Fin bloque solicitante -->

    <!--Inicio bloque tipo proyecto -->

    <section id="main_proyecto"  data-transition="cover">
        <header class="text bold" data-title="Tipo proyecto" >
            <nav class="on-left">
                <button data-view-aside="settings_section" data-icon="menu"></button>
            </nav>
            <nav class="on-right">
                <a href="" data-view-section="main" data-icon="signout"></a>
            </nav>
        </header>

        <article class="indented scroll" >
            <div class="form">
                <fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha desde:</label>
                        <input type="date" id="fec_desde_tipo" placeholder="fecha inicial">
                    </fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha Hasta:</label>
                        <input type="date" id="fec_hasta_tipo" placeholder="fecha inicial">
                    </fieldset>
                    <button class="anchor" id="btnTipoProyectoUpdate" >Actualizar</button>
                </fieldset>
            </div>
            <center>
                <div id="containerGraphicsTipo" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto" ></div>
            </center>
            <ul id="footer_Tipo" class="list indented" >

            </ul>
        </article>
        <footer>
            <nav class="with-labels">
                <a href="#" data-label="Inicio" data-view-section="main_section" data-icon="undo"></a>
            </nav>
        </footer>
    </section>

    <section id="main_proyecto_estado"  data-transition="cover">
        <header class="text bold" data-title="Tipo proyecto - Estado" >
            <nav class="on-left">
                <button data-view-aside="settings_section" data-icon="menu"></button>
            </nav>
            <nav class="on-right">
                <a href="" data-view-section="main" data-icon="signout"></a>
            </nav>
        </header>

        <article class="indented scroll" >
            <div class="form">
                <fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha desde:</label>
                        <input type="date" id="fec_desde_tipo_estado" placeholder="fecha inicial">
                    </fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha Hasta:</label>
                        <input type="date" id="fec_hasta_tipo_estado" placeholder="fecha inicial">
                        <input type="hidden" id="tipoproyectoestadoId" >
                    </fieldset>
                    <button class="anchor" id="btnTipoProyectoUpdate_estado" >Actualizar</button>
                </fieldset>
            </div>
            <center>
                <div id="containerGraphicsTipo_estado" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto" ></div>
            </center>
            <ul id="footer_Tipo_estado" class="list indented" >

            </ul>
        </article>
        <footer>
            <nav class="with-labels">
                <a href="#" data-label="Tipo proyecto" data-view-section="main_proyecto" data-icon="undo"></a>
            </nav>
        </footer>
    </section>

        <section id="main_proyecto_estadoVP"  data-transition="cover">
        <header class="text bold" data-title="Tipo proyecto - VP" >
            <nav class="on-left">
                <button data-view-aside="settings_section" data-icon="menu"></button>
            </nav>
            <nav class="on-right">
                <a href="" data-view-section="main" data-icon="signout"></a>
            </nav>
        </header>

        <article class="indented scroll" >
            <div class="form">
                <fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha desde:</label>
                        <input type="date" id="fec_desde_tipo_estadoVP" placeholder="fecha inicial">
                    </fieldset>
                    <fieldset data-icon="calendar">
                        <label>Fecha Hasta:</label>
                        <input type="date" id="fec_hasta_tipo_estadoVP" placeholder="fecha inicial">
                        <input type="hidden" id="tipoproyectoestadoId_tipo" >
                        <input type="hidden" id="tipoproyectoestadoId_estado" >
                    </fieldset>
                    <button class="anchor" id="btnTipoProyectoUpdate_estadoVP" >Actualizar</button>
                </fieldset>
            </div>
            <center>
                <div id="containerGraphicsTipo_estadoVP" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto" ></div>
            </center>
            <ul id="footer_Tipo_estadoVP" class="list indented" >

            </ul>
        </article>
        <footer>
            <nav class="with-labels">
                <a href="#" data-label="Tipo proyecto - Estado" data-view-section="main_proyecto_estado" data-icon="undo"></a>
            </nav>
        </footer>
    </section>

    <!--Inicio bloque tipo proyecto -->

    <script type="text/javascript" src="../Assets/js/moment.js" ></script>
    <script type="text/javascript" src="../Assets/js/quo.min.js" ></script>
    <script type="text/javascript" src="../Assets/js/lungo.js" ></script>
    <script>
        Lungo.init({
            name: "Bitacora",
            version: "0.0.1"
        });
    </script>
    <script type="text/javascript" src="../Assets/js/bitacora-estado.js" > </script>
    <script type="text/javascript" src="../Assets/js/bitacora-solicitante.js" > </script>
    <script type="text/javascript" src="../Assets/js/bitacora-tipo-proyecto.js" > </script>



</body>
</html>
