class Menu{
	constructor(){}
  
	static innerMenu(){
		return ` <nav id="menu">
		<button id="btn" onclick="Menu.close()">Clickeame</button>
		<div id="myDrop">
			<a href="#">one</a>
			<a href="#">two</a>
			<a href="#">three</a>
		</div>  </nav>`
	}
	static open() {   
		myDrop.style.display = "none";
		btn.setAttribute("onclick", "Menu.close()");
	}
	static close() { 
		myDrop.style.display = "block";
		btn.setAttribute("onclick", "Menu.open()");
	}
}

footer.innerHTML += Menu.innerMenu();

class Links{
constructor(txt, img, click){
	this.txt = txt;
	this.img = img;
	this.click = click;
	}
	fa_link(){
	return	`<a href=" ${this.click} ">
			 <i class=" ${this.img} "></i>
			 <p> ${this.txt} </p></a>`;
	}
	img_link(){
	return `<a onclick=" ${this.click} ">
			<img src=" ${this.img} ">
			<p> ${this.txt} </p></a>`;
	}
}

class Buttons{
  constructor(click){
    this.onclick = click;
  }
  static backbtn(){
    return'<a onclick="go_back2()"><i class="fa fa-arrow-left"></i></a>';
  }
  static topbtn(){
    return'<a href="#inicio" id="topbtn"><i class="fa fa-arrow-up"></i></a>';
  }
}

var face = new Links("Facebook","fab fa-facebook","fb://facewebmodal/f?href=https://www.facebook.com/articulosbquilla");

var insta = new Links("Instagram","fab fa-instagram","https://www.instagram.com/articulos_bquilla");

var wapp = new Links("WhatsApp","fab fa-whatsapp","https://api.whatsapp.com/send?phone=+573008546921");


class Products{
	constructor(name, num){
		this.name = name;
		this.num = num;
	}
	imgBox(i){	//	imgBox
		return	`<div class="img-column">
					<p>Gorra Plana - Snapback </p>
					<img class="passing" src=" ${this.name}${i}.png"> 
				</div>`; 
	}
	txtBox(){	//	txtBox
		let x =	`<div class="txt-column">
					<h4>$34.990</h4>
					<a class="w3-btn w3-yellow w3-round">
					<i class="fa fa-cart-plus"></i> Add to cart</a>
				'</div>`;
		return x;
	}
	productBox(){
		let x ='';
		for (var i = 0; i < this.num; i++)	{
			x += '<div class="container-product w3-margin">'+
					this.imgBox(i) + this.txtBox()+
				 '</div>';
		}	
		return x;
	}
}

let product = new Products('','');

var	cont = 1;

function disProducts(x) {
  cont = 0;
  
	window.scrollTo(0,0);
	go_back();
	wrapper2.innerHTML = x.productBox();
} 

var curvas = new Products('img/cur/cur_', 8);
var planas = new Products('img/pla/pla_', 9);
var tecno = new Products('img/tec/tec_', 21);

var cur = new Links("Gorras Curvadas", "img/cur/cur_2.png", "disProducts(curvas)");
var pla = new Links("Gorras Planas", "img/pla/pla_2.png", "disProducts(planas)");
var tec = new Links("Tecnología", "img/tec/tec_2.png", "disProducts(tecno)");

categories.innerHTML ='<h1>Catalogos</h1>'+ cur.img_link() + pla.img_link() + tec.img_link();

myDropdown.innerHTML = '<h3>Categorías</h3>'+ categories.innerHTML;

backbtn.innerHTML = Buttons.backbtn();

document.body.innerHTML += Buttons.topbtn();

function go_back2(){
	wrapper.style.display = 'block';
	wrapper2.style.display = 'none';
	backbtn.style.opacity = 0;
	backbtn.disabled = true;
}

function go_back(){
	
	if (cont === 1){
		
		wrapper.style.display = 'block';
		wrapper2.style.display = 'none';
		backbtn.style.opacity = 0;
		backbtn.disabled = true;
	}else	{
		wrapper.style.display = 'none';
		wrapper2.style.display = 'block';
		backbtn.style.opacity = 7;
		backbtn.disabled = false;
	}
}

class Slideshow {
	constructor(src) { 
		this.src = src;
	}
	slides() {
		return	`<div class="mySlides">
		<img src=" ${this.src} "></div>`;
	}
	dots(e){ 
		let elem = document.getElementsByClassName(e);
		let x = '<div class="dots">'; 
					elem.forEach(()=>{ 
					x += '<span class="dot"></span>'; });
			x +='</div>';
			return x ;
	}
}

var slide = new Slideshow('');

function innerSlides(){
	let x = '';
	for (var i= 0; i < 2; i++){
		slide = new Slideshow('img/slides/promo_'+ i +'.jpg');
		x += slide.slides();
	}
	return x;
}
	
banner.innerHTML = innerSlides();
banner_dots.innerHTML = slide.dots('mySlides');



var social = document.createElement("div");

social.id = "foot-social";

social.innerHTML = "<h3>Siguenos</h3>"+ face.fa_link()+ insta.fa_link()+ wapp.fa_link();

let foot_categories = document.createElement("div");
	foot_categories.id = 'foot_categories';
	foot_categories.innerHTML = myDropdown.innerHTML;
	
footer.appendChild(social); 
footer.appendChild(foot_categories);





function showSlides() {
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
    }
		slideInd++;

    if (slideInd > slides.length) {
		  slideInd = 1;  
	}

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
        slides[slideInd -1].style.display = "block";  
        dots[slideInd -1].className += " active";
        setTimeout(showSlides, 4000); // Change image every 4 seconds
}
var slideInd = 0;
showSlides(slideInd);


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
