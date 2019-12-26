

/* Social links */	


var facebook ="fb://facewebmodal/f?href=https://www.facebook.com/articulosbquilla";
var instagram="https://www.instagram.com/articulos_bquilla";
var	contact = "https://api.whatsapp.com/send?phone=+573008546921";
var	face_art ='fb://page/378010675934018';
var	face_gor ='fb://page/581398665578960';
var server = "https://artbaq.github.io/catalogo/";

var flechas = '<a class="transparent" style="left:0;" onclick="plusDivs(-1)" >&#10094 </a>'+
 			'<a class="transparent" style="right:0;" onclick="plusDivs(1)">&#10095</a>';

var promo_0 = "promo_0.png Smart TV BOX plus ⛱ Aprovecha que solo quedan pocos.";
var promo_1 = "promo_1.png Receptor Bluetooth ⛱ Convierte tu viejo equipo de sonido a Bluetooth";
var promo_2 = "promo_2.png Speaker Bluetooth ⛱ Lleva tu musica a donde quieras.";
var promo_3 = "promo_3.png Gorras Planas ⛱ Tu mejor estilo para cada ocacion.";
var promo_4 = "promo_4.png Game pad ⛱ Llevas tus juegos a otro nivel ";


//**********************
var containerModal = document.getElementById('container-modal');
var mySidebar = document.getElementById("mySidebar");
var social = document.getElementById('social');
var modal = document.getElementById('myModal');
var menu = document.getElementById('bottom_header');
var myNav = document.getElementById("myNav");
//getMenu(menu); // Hamburger menu - Three dots
getPromo(promo_0,0);
getPromo(promo_1,4);
getPromo(promo_2,2);
getPromo(promo_3,3);
getPromo(promo_4,1);

var txtx = [" Inicio", " Nosotros", " Catalogos", " Contacto"];
var faLogo = ["fa fa-home", "fa fa-user", "fa fa-list", "fa fa-phone-alt"];

function navLinks(id , idName) {			
	let myDiv = document.createElement('div'); 
	let myH = document.createElement('h4'); 
	id.appendChild(myDiv);
	myDiv.appendChild(myH)
	myDiv.id= idName;
	
	for (let i = 0; i < txtx.length; i++) 
	{
		let mySpan = document.createElement('span');
		let myA = document.createElement('a');
		let myI = document.createElement('i'); 
			
			myDiv.appendChild(myA);
			myA.appendChild(myI);
			myA.appendChild(mySpan);
			myI.className = faLogo[i];

		if (myDiv.id == "undefined") {	myH.style.display ='none';	}
			mySpan.innerHTML += txtx[i];
			myH.innerHTML = myDiv.id.substring(2);
			myA.href = '#'+ txtx[i].substring(1).toLowerCase();
			myA.setAttribute('onclick', 'w3_close()');
	}
}

navLinks(bottom_header); 
navLinks(myNav); 

var links = [	"oModal('ear_',3)","oModal('cha_',4)","oModal('spe_',2)","oModal('tec_',20)" ];
var txt = [	"Audifonos & Bluetooth","Cargadores & Cables","Speakers","Miselaneos & más" ];
var icon = [ "🎧 ", "🔌 " , "📻 ", "► " ];

function getCategory(id , idName) {	
	let myDiv = document.createElement('div'); 
	let myH = document.createElement('h4');
	id.appendChild(myDiv);	myDiv.appendChild(myH);
	myDiv.id= idName;

	for (var i = 0; i < txt.length; i++) {
			
	let myP = document.createElement('span'); 
	let myP2 = document.createElement('p');
	let myHr = document.createElement('hr');
	let myImg = document.createElement('img'); 
		myDiv.appendChild(myP);
		myDiv.appendChild(myP2);			
		myDiv.appendChild(myHr);
		
		if (myDiv.id == "undefined") {	myH.style.display ='none';	}

			myH.innerHTML = myDiv.id.substring(2);
			myP.setAttribute('onclick' , links[i]);
			myP2.setAttribute('onclick' , links[i]);
			myHr.style.cssText = 'width: 80%; margin: 10px auto ; box-shadow: 1px 1px 3px;';
			myP2.innerHTML = txt[i];

		if (icon.length == 0)
		{	myP.appendChild(myImg); 
			myImg.src = imagenes[i];
		}else{	myP.innerHTML = icon[i];	}
	}
}


var socialLink = ["fb://facewebmodal/f?href=https://www.facebook.com/articulosbquilla","https://www.instagram.com/articulos_bquilla","#","#"]
var socialFaLogo = [ "fab fa-facebook-square", "fab fa-instagram", "fab fa-linkedin", "fab fa-google-plus-square"];

function socialLinks(id , idName) {		
	let myDiv = document.createElement('div'); 
	let myH = document.createElement('h4'); 
	id.appendChild(myDiv);
	myDiv.appendChild(myH)
	myDiv.id= idName;

	for (let i = 0; i < socialLink.length; i++) 
	{
		let myA = document.createElement('a');
		let myI = document.createElement('i'); 
			myDiv.appendChild(myA);
			myA.appendChild(myI);
		
		if (myDiv.id == "undefined") {	myH.style.display ='none';	}
			myH.innerHTML = myDiv.id.substring(2);
			myI.className = socialFaLogo[i];
			myA.href = socialLink[i];
			//myA.setAttribute('onclick', 'w3_close()');
			//myA.innerHTML += txt[i];
	}
}

getCategory(techno);

socialLinks(footer , "ftSiguenos");
navLinks(footer , 'ftMenu');
getCategory(footer , 'ftTecnología');

   links =  ["oModal('cur_',2)" , "oModal('pla_',6)"];
	 txt =	["Gorras Cuvadas" , "Gorras Planas"];
imagenes = 	["cur_2.png" , "pla_5.png"]
	icon = 	[];

getCategory(gorras);	
getCategory(footer , 'ftGorras');
//document.getElementById("contactanos").href=contact;

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

function get_images(y, n)
{   	
	var f1_Set ='';
		for (var i = 0; i <= n; i++)	
		{	
			f1_Set += '<img class="caption" src="logo.png"><img class="passing" src="'+ y + i +'.png" style="width:100%">';
	 	}	
			f1_Set += '<img src="marco.png" style="position:absolute; top:0; width: 100%;z-index:2;">';
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

function w3_open(){ 
	mySidebar.style.backgroundColor = 'rgba(0,0,0,0.8)'; 
	mySidebar.style.color = 'white'; 
	mySidebar.style.width = '40%';
	mySidebar.style.zIndex = '1';
}

function w3_close()	{
	modal.style.display = 'none';
	//this.style.width = '0%';
	//this.style.color = 'rgba(0,0,0,0.1)'; //'rgba(255,255,255,0.8)'
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

function showSlides() {	var i, slides, dots;
  slides= document.getElementsByClassName("mySlides");
  dots= document.getElementsByClassName("dot");
  
	for (i=0; i<slides.length; i++) {
		slides[i].style.display = "none"; 
  	}
	slideInd++;
	if(slideInd>slides.length) {
  		slideInd = 1
	}  
	for (i=0; i<dots.length; i++) {
    	dots[i].className =
   		dots[i].className.replace("active","");
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

var Share = {
facebook: function(purl, ptitle, pimg, text) {
url = 'fb://facewebmodal/f?href=https://www.facebook.com/sharer.php?s=100';
url += '&p[title]=' + encodeURIComponent(ptitle);
url += '&p[summary]=' + encodeURIComponent(text);
url += '&p[url]=' + encodeURIComponent(purl);
url += '&p[images][0]=' + encodeURIComponent(pimg);
Share.popup(url);
},
twitter: function(purl, ptitle) {
url = 'http://twitter.com/share?';
url += 'text=' + encodeURIComponent(ptitle);
url += '&url=' + encodeURIComponent(purl);
url += '&counturl=' + encodeURIComponent(purl);
Share.popup(url);
},
popup: function(url) {
window.open(url,'','toolbar=0,status=0,width=626, height=436');
}
};