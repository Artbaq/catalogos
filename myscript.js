

/* Social links */	


var facebook ="fb://facewebmodal/f?href=https://www.facebook.com/articulosbquilla";
var instagram="https://www.instagram.com/articulos_bquilla";
var	whatsapp = "https://api.whatsapp.com/send?phone=+573008546921";
var	face_art ='fb://page/378010675934018';
var	face_gor ='fb://page/581398665578960';
var server = "https://artbaq.github.io/catalogo/";


const redesSociales = [
	{ brand: "whatsapp" , icon: "fab fa-whatsapp" , link: "https://api.whatsapp.com/send?phone=+573008546921" },
	{ brand: "facebook" , icon: "fab fa-facebook" , link: "fb://facewebmodal/f?href=https://www.facebook.com/articulosbquilla" },
	{ brand: "instagram", icon: "fab fa-instagram" , link: "https://www.instagram.com/articulos_bquilla" },
	{ brand: "whatsapp" , icon: "fab fa-facebook" , link: "https://api.whatsapp.com/send?phone=+573008546921" }
];





var flechas = '<a class="transparent" style="left:0;" onclick="plusDivs(-1)" >&#10094 </a>'+
 			'<a class="transparent" style="right:0;" onclick="plusDivs(1)">&#10095</a>';



const promotion = [
	{image: "promo_0.png" , title: "Smart TV BOX plus" , senten: "Aprovecha que solo quedan pocos."},
	{image: "promo_1.png" , title: "Receptor Bluetooth", senten: "Convierte tu viejo equipo de sonido a Bluetooth."},
	{image: "promo_2.png" , title: "Speaker Bluetooth" , senten: "Lleva tu musica a donde quieras."},
	{image: "promo_3.png" , title: "Gorras Planas"	   , senten: "Tu mejor estilo para cada ocacion."},
	{image: "promo_4.png" , title: "Game pad" 		   , senten: "Llevas tus juegos a otro nivel."}
]


//**********************
var containerModal = document.getElementById('container-modal');
var mySidebar = document.getElementById("mySidebar");
var social = document.getElementById('social');
var modal = document.getElementById('myModal');


getPromo2();

var txtx = [" Nosotros", " Catalogos", " Contacto"];
var faLogo = ["fa fa-user", "fa fa-list", "fab fa-whatsapp"];





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
			
			myA.className =  
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
bottom_header.getElementsByTagName("a")[2].href = whatsapp;
bottom_header.getElementsByTagName("a")[2].style.ccsText = "font-size:26px; font-weight:800";	




var links = [	"oModal('ear_',3)","oModal('cha_',4)","oModal('spe_',2)","oModal('tec_',20)" ];
var txt = [	"Audifonos & Bluetooth","Cargadores & Cables","Speakers","Miselaneos & más" ];
var icon = [ "🎧 ", "🔌 " , "📻 ", "► " ];

const category = [{},{},{},{}];

function getCategory(id , idName) {	
		
	let myDiv = document.createElement('div'); 
	let myH = document.createElement('h4');
	id.appendChild(myDiv);
	myDiv.appendChild(myH)
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
		{
			myP.appendChild(myImg); 
			myImg.src = imagenes[i];
		}else{	
			myP.innerHTML = icon[i];				
		}
	}
}// ►►►►►► Calling the function ◄◄◄◄◄◄◄ 


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
socialLinks(footer , "ftSiguenos");

navLinks(footer , 'ftMenu');  
ftMenu.getElementsByTagName("a")[2].href = whatsapp;

getCategory(techno);
getCategory(footer , 'ftTecnología');

	links = ["oModal('cur_',2)" , "oModal('pla_',6)"];
	txt =	["Gorras Cuvadas" , "Gorras Planas"];
imagenes = 	["cur_2.png" , "pla_5.png"]
	icon = 	[];

getCategory(gorras);	
getCategory(footer , 'ftGorras');


function getPromo2(){
	promotion.forEach(function(item){

		let myDiv = document.createElement("div"); 	myDiv.className = "mySlides fade txt";
		let myImg = document.createElement("img");	myImg.className = "promo";
		let myDiv2 = document.createElement("div");	myDiv2.className = "promoTxt";
		let myH3 = document.createElement("h3");	myH3.className = "enunc";
		let myp = document.createElement("p");		myp.className = "stat";
		
		let slideShow = document.getElementById('slideshow');

				slideShow.appendChild(myDiv)
				myDiv.appendChild(myImg);
				myDiv.appendChild(myDiv2);
				myDiv.appendChild(myH3);
				myDiv.appendChild(myp);

				myImg.src = item.image;
				myH3.innerHTML = item.title;
				myp.innerHTML = item.senten;
				});
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
	//closeClass[0].style.cssText = 'display:block;';
}
function w3_close()	{
	modal.style.display = 'none';
	mySidebar.style.width = '0%';
	mySidebar.style.color = 'rgba(0,0,0,0.1)'; //'rgba(255,255,255,0.8)'
	
}
		


var closeClass = document.getElementsByClassName("close");


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


function backTop(){
	let a = document.createElement('a'); 
	let i = document.createElement('i');
			a.id = 'homeButtom';
			a.href = '#inicio';			
			i.className = 'fa fa-home';			
		a.appendChild(i);
		document.body.appendChild(a);		
} 
backTop();	// This is the calling of backTop() function


function backTo(){
	let a = document.createElement('a'); 
	let i = document.createElement('mark');
			a.id = 'homeButtom';
			a.href = '#inicio';
			i.className = 'fa fa-home';
			i.innerHTML = '154';	
		a.appendChild(i);
		document.body.appendChild(a);		
} 


var homeButton = document.getElementById('homeButtom');
var emptySpace = document.getElementById('emptySpace');

function scrolling(){	
	if(bottom_header.offsetTop < window.pageYOffset){
		bottom_header.classList.add("sticky");	
		logo.style.opacity='1';	
		logo.style.transition ='1s';
		emptySpace.style.cssText ='height:3.4em; background:floralwhite';
	}else{
		bottom_header.classList.remove("sticky");
		logo.style.opacity ='0';
		logo.style.transition ='0s';
		emptySpace.style.cssText ='height:0em;';
	}
}


function backTopTrigger(){
	if(dotsBox.offsetTop < window.pageYOffset)
	{		homeButton.style.width="40px";
		}else{		homeButton.style.width="0px";
	}			
}