


/* Social links */	
var facebook ="fb://facewebmodal/f?href=https://www.facebook.com/articulosbquilla";
var instagram="https://www.instagram.com/articulos_bquilla";
var	contact = "https://api.whatsapp.com/send?phone=+573008546921";
var	face_art ='fb://page/378010675934018';
var	face_gor ='fb://page/581398665578960';
var server = "https://artbaq.github.io/catalogo/";

/* End of Social links */	

var flechas = '<a class="transparent" style="left:0;" onclick="plusDivs(-1)" >&#10094 </a>'+
 			'<a class="transparent" style="right:0;" onclick="plusDivs(1)">&#10095</a>';


//**********************


var mySidebar = document.getElementById("mySidebar");
var modal = document.getElementById('myModal');

var menu = document.getElementById('menu');
var menu_a = menu.getElementsByTagName('a');
var menu_i = menu.getElementsByTagName('i');

var containerModal = document.getElementById('container-modal');

////// Social links //////////
var social = document.getElementById('social');
	var social_a = social.getElementsByTagName('a');



var promo_0 = "promo_0.png Smart TV BOX plus ⛱ Aprovecha que solo quedan pocos.";
var promo_1 = "promo_1.png Receptor Bluetooth ⛱ Convierte tu viejo equipo de sonido a Bluetooth";
var promo_2 = "promo_2.png Speaker Bluetooth ⛱ Lleva tu musica a donde quieras.";
var promo_3 = "promo_3.png Gorras Planas ⛱ Tu mejor estilo para cada ocacion.";
var promo_4 = "promo_4.png Game pad ⛱ Llevas tus juegos a otro nivel ";

getMenu(); // Hamburger menu 
getPromo(promo_0,0);
getPromo(promo_1,4);
getPromo(promo_2,2);
getPromo(promo_3,3);
getPromo(promo_4,1);

//getCategory(tec_text, tec_src, 0);
//getCategory(cap_text, cap_src, 1);


document.getElementById("contactanos").href=contact;

	social_a[0].href = instagram;
	social_a[1].href = face_art;
//social_a[2].href = linkedin;
//social_a[3].href = google;


function getPromo(vary,n){
	var a = vary.search("promo"),
		b = vary.search("png"),
	 	c = vary.search("⛱"),
	 source = vary.substring(a , b + 3),
	 tittle = vary.substring(b + 3 , c),
	 coment = vary.substring(c + 1);

	document.getElementsByClassName("promo")[n].src= source;
	document.getElementsByClassName("enunc")[n].innerHTML= tittle;
	document.getElementsByClassName("stat")[n].innerHTML= coment;
}


function getCategory() {	
	var y = document.getElementsByClassName('tester'),
		r = y.getElementsByTagName('div')[0];	
		r.className = "cont2";

	var	x = '<div> <p class="icon"> </p><p></p></div>';

	var z = ["Audifonos & Bluetooth" , "Cargadores & Cables" , "Speakers" , "Miselaneos & más" ]

		y.innerHTML = x ;		
		
		for (var i = 0;  i < y.length; i++)
		{
			
		}

	var div = y.getElementsByTagName('div');
	var img = y.getElementsByTagName('img')[0];

		div[0].className = 'w3-card-4 w3-margin';
		div[1].innerHTML = text;
		
		img.id = 'myImg';
		img.src = src; 
		img.style.width = '100%';


	}

function getMenu()		
{						
	var menuTxt = ["" , "Inicio" , "Nosotros" , "Catalogos" , "Contacto" ];
	var 	logo = [ "","fa fa-home","fa fa-user","fa fa-list","fa fa-phone-alt" ]
	
  	for (var i = 1;  i < menu_a.length; i++)
	{		
		menu_a[i].innerHTML +=  "<i class='" + logo[i] +"'></i>" +
						 "<span>" + menuTxt[i] +"</span>";
    	menu_a[i].onclick = function(){w3_close()};
	}		
}



function get_images(y, n)
{   	
	var f1_Set ='';
		for (var i = 0; i <= n; i++)	
		{	
			f1_Set += '<img class="caption" src="logo.png"><img class="passing" src="'+ y + i +'.png" style="width:100%">';
	 	}	
			f1_Set += flechas;	

	 	containerModal.innerHTML = f1_Set; 
}


// Get the modal
function oModal(nam , num){
	exit_Icon(myModal);
    modal.style.display = "block";    
    get_images(nam , num)
    showDivs(slideIndex); 
	}

function exit_Icon(id){
	var x = id.getElementsByTagName("a")[0]; 
		x.innerHTML = "&#10006";			
		x.src = "javascript:void(0)";
		x.onclick = function(){ w3_close() };
		}


var header = document.getElementById("header");
var innerHeader = document.getElementById("inner_header");

var menuIcon = document.getElementById("⁝");
var headerLogo = header.getElementsByTagName("img")[0];
var body = document.getElementsByTagName("body")[0];
var menuLogo = menu.getElementsByTagName("img")[0];
var closeClass = document.getElementsByClassName("close");



function w3_open(){ 

	exit_Icon(mySidebar);
	mySidebar.style.width = " 57.5%";
	mySidebar.style.zIndex ="1"	;
	body.style.width = "42.5%" 
	
 	header.style.cssText = "background-color:rgba(0,0,0,0.7); height:100%; ";
 	innerHeader.style.cssText = "background-color:rgba(0,0,0,0); ";
		
	header.getElementsByTagName("span")[0].style.display="none";
	header.getElementsByTagName("img")[0].style.cssText="width:0.5px; transition:width 0.4s;";

	

	menu.style.cssText = "z-index:1;";
	menuLogo.src = headerLogo.src;
	menuLogo.style.cssText = "margin:20px;"
	
	closeClass[0].style.cssText=" display:; color:white";
}


function w3_close()	{
 	mySidebar.style.width = "0%";
	modal.style.display = "none";
	body.style.cssText = "position: relative ; right:0%;"
	header.style.cssText = "background-color:white;  ";
	closeClass[0].style.cssText="display:none; background-color:black; ";
	
	header.getElementsByTagName("span")[0].style.display="";
	header.getElementsByTagName("img")[0].style.cssText="width:50px; transition:width 0.4s;";

	
}

var slideIndex = 1;
function plusDivs(n)	{ 
	showDivs(slideIndex += n);
}

function showDivs(n)	{     var i;   
	var x = document.getElementsByClassName("passing");
	var y = document.getElementsByClassName("caption");
  	
  	if (n > x.length)	{ slideIndex = 1; }   	
	if (n < 1) 	{ slideIndex = x.length } 
	
	  	for (i = 0; i < x.length; i++)  {
		x[i].style.display = "none";
		y[i].style.display = "none";
		}
    
    	x[slideIndex-1].style.display = "block";  
    	y[slideIndex-1].style.display = "block";
}


var slideInd = 1;
showSlides(slideInd);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  
  //Hide all the slide with a loop

   for (i = 0; i < slides.length; i++) {

    slides[i].style.display = "none"; 
  }

  slideInd++;

  if (slideInd > slides.length) {slideInd = 1}  

  for (i = 0; i < dots.length; i++) {

    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideInd-1].style.display = "block";  
  dots[slideInd-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}





document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{ 
   document.addEventListener("backbutton", onBackKeyDown, false); 
} 

function onBackKeyDown() 
{ 
  mainView.router.back(); 
}