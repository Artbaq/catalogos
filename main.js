var li = [
    {url:"oModal('ear_',3)" , txt:'Audifonos & Bluetooth', img:"🎧 "},
    {url:"oModal('cha_',4)" , txt:'Cargadores & Cables', img:"🔌 "},
    {url:"oModal('spe_',2)" , txt:'Speakers', img:"📻 "},
    {url:"oModal('tec_',20)", txt:'Miscelaneos & más', img:"► "}
];

var lo = [
    {url:"oModal('cur_',4)" , txt:'Gorras Curvadas', img:"" , imges:"cur_2.png"},
    {url:"oModal('pla_',6)" , txt:'Gorras Planas', img:"" , imges:"pla_5.png"},
];



var cont = 0;

var cls = function(x){ return ' class="' + x + '"'}
var stl = function(x){ return ' style="' + x + '"'} 
var href = function(x){ return ' href="' + x + '"'}
var setId = function(x){ return ' id="' + x + '"'}

var createA = function(attr, content){ return createElem('a', content, attr)}
var createI = function(attr, content){ return createElem('i', content, attr)}
var createP = function(attr, content){ return createElem('p', content, attr)}
var createH1 = function(attr, content){ return createElem('h1', content, attr)}
var createH3 = function(attr, content){ return createElem('h3', content, attr)}
var createH4 = function(attr, content){ return createElem('h4', content, attr)}
var createDiv = function(attr, content){ return createElem('div', content, attr)}
var createBtn = function(attr, content){ return createElem('buttom', content, attr)}

var createImg = function(attr){ return '<img' + attr + '>'}

function createElem(elem,content, attr ){
	let object = {
		lt:'<',
        elem: elem,
        attr:attr,
		gt:'>',
		content: content,
		lts:'</',
		result: function(){
			return this.lt + this.elem + [this.attr] + this.gt +
					[this.content] +
					this.lts + this.elem + this.gt
			    }
    }
    return object.result()
}

function compElem(element,id,className){
    let x = document.createElement(element);
    x.id = id;  x.className = className;
return x;
}

function midElem(element,className){
    let x = document.createElement(element);
        x.className = className;
return x;
}

function simpElem(element){
	let x = document.createElement(element);
return x;
}


//// Inserting content to the Web-Page ↓ ↓ ↓
function innerMenu(id,list,heading){

    let myId =  setId(id.id + 'Box_' + cont);
    let myClass =  cls(id.id + 'Box');
    let myAttr = myId + myClass; 
    let h3 = createH3('', heading )

        id.innerHTML += createDiv( myAttr , h3 );
    
    let mainDiv = document.getElementById( id.id + 'Box_' + cont );  

        list.forEach(function(item){   
                let i = createI( cls(item.icon) ); 
                let p = createP( '' , item.name );
                let result = createA( cls('w3-btn w3-xlarge') + href(item.url), i + p );
                
            mainDiv.innerHTML += result;
        });
        cont++; 
}

function innerSocialLinks(id , list , heading){
    let myId =  setId(id.id + 'Box_' + cont);
    let myClass =  cls(id.id + 'Box');
    let myAttr = myId + myClass; 
    let h3 = createH3('', heading )

        id.innerHTML += createDiv( myAttr , h3 );
    
    let mainDiv = document.getElementById( id.id + 'Box_' + cont ); 
    
    list.forEach(function(item){
        let i = createI( cls(item.icon)    );
        let result = createA( href(item.url), i );

        mainDiv.innerHTML +=  result ;
    });
    cont++; 
}

function innerCatalogos(id, list, heading){
   
    let div = compElem('div' , id.id + 'Box_'+ cont , id.id + 'Box');
        div.innerHTML = createElem('h3', heading);
            id.appendChild(div);

    list.forEach(function(item,index){
        div.innerHTML += 
        createElem('span', item.img) + createElem('p',item.txt) + createElem('hr');
            let span = div.getElementsByTagName('span')[index];
                let p = div.getElementsByTagName('p')[index];
                    span.setAttribute('onclick' , item.url);
                        p.setAttribute('onclick' , item.url);
        
        if(item.img == ""){
            span.innerHTML = createElem('img');
                     let img = div.getElementsByTagName('img')[index];
                        img.src = item.imges;
		}
    })
    cont++;
}

var mainStl = 'height:122vw;' +
            'position:; text-align:center';

//var newDiv = ' position:relative; bottom:5%; padding: 6% 0 '; 

var styles2 = 'height:160px;' +
			 'background-color:rgba(8,76,83, 0.6); ' +
			 'position:relative; bottom:10%; transform:skewY(12deg) ';

	
var txtBox = 'width:100%; color:white; ' + //rgb(171,217,225);' +
             'background:rgba(8,76,83,0); position:absolute; bottom:2%; '+
             ' padding-bottom:3%; transform:skewY(0deg);' ;
			 
			 
		//	 background:rgb(171,217,225); color:rgb(8,76,83)
var btnClasses = 'w3-btn w3-large w3-round-xxlarge w3-red w3-card-4'+
				'';


function innerSlideshow(id, list, heading){
    let x = setId( id.id + 'Box_' + cont );
    let y = cls( id.id + 'Box' );
    let myAttr = x + y;    
        id.innerHTML += createDiv( myAttr , /* createH3('', heading )*/ );
    ////
    let mainDiv = document.getElementById( id.id + 'Box_' + cont );   
   
    list.forEach(function(item){
        let img = createImg(  [cls('promo '  /*/**  + 'w3-border w3-border-blue' /***/) + src(item.image)]  );
        
        let h1 = createH1('',item.title );
        let h4 = createH4('', item.senten )
        let btn = createBtn( setId('') + stl('position:absolute: bottom:2%') +
        					cls( btnClasses ),'Mas informaci&oacuten');

        let txtCont = createDiv( stl( txtBox ) + cls( /*/** 'w3-border' /***/), h1 + h4 + btn);
        let skewCont= createDiv( stl( styles2 ) ) ;
       // let content = createDiv( stl( newDiv ) + cls( /**/ 'w3-border' /**/) , skewCont  ) 
        
    ////
        mainDiv.innerHTML += createDiv( [cls('mySlides w3-border')] + stl(mainStl) , img+skewCont+txtCont );
    ////
	});
    mainDiv.innerHTML += arrowLeft +arrowRight;
}



function myFunction(){
	
	let divs = createDiv( stl(styles2) ) ;
	let tittle = createElem('h1','', 'Smart Tv Box Plus');
	let buttom = createElem('buttom' , cls( btnClasses ) , 'Mas informaci&oacuten');
	let p = createElem('h4','', 'Aprovecha que solo quedan pocos.')
	let content = tittle + p + buttom;
	
	let square = createDiv( stl(styles3), content );

return createDiv( stl(mainStl), createImg(  src('promo_0.png')) + divs + square)
}



function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
//Hide all the slide with a loop
    for (var i = 0; i < slides.length; i++) {
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







innerMenu(header,navMenu);
cont = 0;

var slideInd = 1;
innerSlideshow( slideshow, promotion, '');     
showSlides(slideInd);
cont = 0;

innerCatalogos(wrapper,li, 'Tecnología');
innerCatalogos(wrapper,lo, 'Gorras');
cont = 0;

innerSocialLinks(footer , socialMedia , 'Siguenos');
innerMenu(footer,navMenu, 'Menú');
innerCatalogos(footer,li,'Tecnología');
innerCatalogos(footer,lo,'Gorras');









