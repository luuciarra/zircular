<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
		<link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="slideSlick/slick/slick.css"/>
		<link rel="stylesheet" type="text/css" href="style.css">
		<script type="text/javascript" src="slideSlick/slick/slick.min.js"></script>
		<title></title>
	</head>
	<body>

		<!-- 
		* ATTR URL = imagen de fondo de cada projecto
		* 			del portfolio
		 -->
		<div proj="1" src="images/img1.jpg" ppalColor="reposicion"></div>
		<div proj="2" src="images/img2.jpg" ppalColor="altura"></div>
		<div proj="3" src="images/img3.jpg" ppalColor="trabajo"></div>
		<div proj="4" src="images/img4.jpg" ppalColor="mixto"></div>
		<div proj="5" src="images/img5.jpg" ppalColor="residencial"></div>
		<div proj="6" src="images/img6.jpg" ppalColor="mixto"></div>
		<div proj="7" src="images/img7.jpg" ppalColor="reposicion"></div>
		<div proj="8" src="images/img8.jpg" ppalColor="altura"></div>
		<div proj="9" src="images/img1.jpg" ppalColor="residencial"></div>
		<div proj="10" src="images/img2.jpg" ppalColor="trabajo"></div>
		<div proj="11" src="images/img3.jpg" ppalColor="mixto"></div>
		<div proj="12" src="images/img4.jpg" ppalColor="altura"></div>
		<div proj="13" src="images/img5.jpg" ppalColor="trabajo"></div>
		<div proj="14" src="images/img6.jpg" ppalColor="residencial"></div>
		<div proj="15" src="images/img7.jpg" ppalColor="altura"></div>
		<div proj="16" src="images/img8.jpg" ppalColor="reposicion"></div>

		<!-- preloader section -->
		<div class="preloader">
			<div class="sk-spinner sk-spinner-circle">
		       <div class="sk-circle1 sk-circle"></div>
		       <div class="sk-circle2 sk-circle"></div>
		       <div class="sk-circle3 sk-circle"></div>
		       <div class="sk-circle4 sk-circle"></div>
		       <div class="sk-circle5 sk-circle"></div>
		       <div class="sk-circle6 sk-circle"></div>
		       <div class="sk-circle7 sk-circle"></div>
		       <div class="sk-circle8 sk-circle"></div>
		       <div class="sk-circle9 sk-circle"></div>
		       <div class="sk-circle10 sk-circle"></div>
		       <div class="sk-circle11 sk-circle"></div>
		       <div class="sk-circle12 sk-circle"></div>
		    </div>
		</div>

		<div class="logo-section">
			<h1>LOGO</h1>
		</div>

		<div class="container-fluid" style="padding: 0">
			<?php include("menuInclude.php") ?>
		</div>

		<!-- DESKTOP LAYOUT -->
		<div class="project-container container-fluid main-container">
			<div class="row">
				<div elem="1" class="item col port-container pointer port-color-reposicion-bg" >
					<h6 class="port-main-title port-color-reposicion">Titulo principal 1</h6>
					<p class="port-main-subtitle">Subtitulo 1</p>
					<p class="port-title">Uno</p>
				</div>
				<div elem="2"  class="item col port-container pointer port-color-altura-bg" >
					<h6 class="port-main-title port-color-altura">Titulo principal 2</h6>
					<p class="port-main-subtitle">Subtitulo 2</p>
					<p class="port-title">Dos</p>
				</div>
				<div elem="3" class="item col port-container pointer port-color-mixto-bg" >
					<h6 class="port-main-title port-color-mixto">Titulo principal 3</h6>
					<p class="port-main-subtitle">Subtitulo 3</p>
					<p class="port-title">Tres</p>
				</div>
				<div elem="4" class="item col port-container  pointer port-color-trabajo-bg" >
					<h6 class="port-main-title port-color-trabajo">Titulo principal 4</h6>
					<p class="port-main-subtitle">Subtitulo 4</p>
					<p class="port-title">Cuatro</p>
				</div>
			</div>
			<div class="row">
				<div elem="5" class="item col port-container  pointer  port-color-trabajo-bg" >
					<h6 class="port-main-title port-color-trabajo">Titulo principal 5</h6>
					<p class="port-main-subtitle">Subtitulo 5</p>
					<p class="port-title">Cinco</p>
				</div>
				<div elem="6"  class="item col port-container pointer port-color-residencial-bg" >
					<h6 class="port-main-title port-color-residencial">Titulo principal 6</h6>
					<p class="port-main-subtitle">Subtitulo 6</p>
					<p class="port-title">Seis</p>
				</div>
				<div elem="7" class="item col port-container pointer port-color-reposicion-bg" >
					<h6 class="port-main-title port-color-reposicion">Titulo principal 7</h6>
					<p class="port-main-subtitle">Subtitulo 7</p>
					<p class="port-title">Siete</p>
				</div>
				<div elem="8"  class="item col port-container pointer port-color-mixto-bg" >
					<h6 class="port-main-title port-color-mixto">Titulo principal 8</h6>
					<p class="port-main-subtitle">Subtitulo 8</p>
					<p class="port-title">Ocho</p>
				</div>
			</div>
			<div class="row">
				<div elem="9"  class="item col port-container pointer port-color-altura-bg" >
					<h6 class="port-main-title port-color-altura">Titulo principal 9</h6>
					<p class="port-main-subtitle">Subtitulo 9</p>
					<p class="port-title">Nueve</p>
				</div>
				<div elem="10" class="item col port-container pointer port-color-trabajo-bg" >
					<h6 class="port-main-title port-color-trabajo">Titulo principal 10</h6>
					<p class="port-main-subtitle">Subtitulo 10</p>
					<p class="port-title">Diez</p>
				</div>
				<div elem="11" class="item col port-container pointer port-color-altura-bg" >
					<h6 class="port-main-title port-color-altura">Titulo principal 11</h6>
					<p class="port-main-subtitle">Subtitulo 11</p>
					<p class="port-title">Once</p>
				</div>
				<div elem="12" class="item col port-container pointer port-color-residencial-bg"  >
					<h6 class="port-main-title port-color-residencial">Titulo principal 12</h6>
					<p class="port-main-subtitle">Subtitulo 12</p>
					<p class="port-title">Doce</p>
				</div>
			</div>
			<div class="row">
				<div elem="13" class="item col port-container pointer port-color-residencial-bg" >
					<h6 class="port-main-title port-color-residencial">Titulo principal 13</h6>
					<p class="port-main-subtitle">Subtitulo 13</p>
					<p class="port-title">Trece</p>
				</div>
				<div elem="14" class="item col port-container pointer port-color-reposicion-bg" >
					<h6 class="port-main-title port-color-reposicion">Titulo principal 14</h6>
					<p class="port-main-subtitle">Subtitulo 14</p>
					<p class="port-title">Catorce</p>
				</div>
				<div elem="15" class="item col port-container pointer port-color-trabajo-bg" >
					<h6 class="port-main-title port-color-trabajo">Titulo principal 15</h6>
					<p class="port-main-subtitle">Subtitulo 15</p>
					<p class="port-title">Quince</p>
				</div>
				<div elem="16" class="item col port-container pointer port-color-mixto-bg" >
					<h6 class="port-main-title port-color-mixto">Titulo principal 16</h6>
					<p class="port-main-subtitle">Subtitulo 16</p>
					<p class="port-title">Dieciséis</p>
				</div>
			</div>
		</div>

		<!-- RESPONSIVE LAYOUT -->
		<div class="project-container-responsive the-slide">
			<div elemresp="1" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>

			<div elemresp="2" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>

			<div elemresp="3" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo 3</p>
						<p class="proj-resp-title-2">Título 3</p>
					</div>
				</div>
			</div>

				
			<div elemresp="4" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
			<div elemresp="5" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
			<div elemresp="6" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
			<div elemresp="7" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
			<div elemresp="8" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
			<div elemresp="9" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
			<div elemresp="10" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
			<div elemresp="11" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
			<div elemresp="12" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
			<div elemresp="13" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
			<div elemresp="14" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
			<div elemresp="15" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
			<div elemresp="16" class="resp-port-container" >		
				<div class="proj-section-1">
					<h6 class="proj-resp-title">Titulo principal 1</h6>
				</div>
				<div class="proj-section-2 port-color-reposicion-back">
					<div class="proj-resp-data">
						<p class="proj-resp-subtitle">Subtitulo</p>
						<p class="proj-resp-title-2">Título</p>
					</div>
				</div>
			</div>
		</div>

		<div class="proj-resp-slide-test">
			<div class="slide-number">1/16</div>
		</div>


		<div class="container-fluid work-single">
			<div class="row align-items-end work-row-1" >
				<h1 class="work-title"></h1>
			</div>

			<div class="row work-row-2">
				<div class="work-info-1">
					<div style="display: flex;align-items: center;justify-content: center; flex-direction: column;">
						<h3 class="work-common-title">Cliente</h3>
						<h6>Lorem</h6>
					</div>
				</div>
				<div class="work-info-2">
					<div style="display: flex;align-items: center;justify-content: center; flex-direction: column;">
						<h3 class="work-common-title">Ciudad</h3>
						<h6>Lorem</h6>
					</div>
				</div>
				<div class="work-info-3">
					<div style="display: flex;align-items: center;justify-content: center; flex-direction: column;">
						<h3 class="work-common-title">250.000m2</h3>
						<h6>Lorem</h6>
					</div>
				</div>
				<div class="work-info-4">
					<div style="display: flex;align-items: center;justify-content: center; flex-direction: column;">
						<h4></h4>
						<h5></h5>
					</div>
				</div>
			</div>
		</div>
	</body>

	<script src="js/projects.js"></script>
	<script src="js/menu.js"></script>	
</html>