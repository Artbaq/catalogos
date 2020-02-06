var li = [
    {url:"oModal('ear_',3)" , txt:'Audifonos & Bluetooth', img:"🎧 "},
    {url:"oModal('cha_',4)" , txt:'Cargadores & Cables', img:"🔌 "},
    {url:"oModal('spe_',2)" , txt:'Speakers', img:"📻 "},
    {url:"oModal('tec_',20)", txt:'Miscelaneos & más', img:"► "}
];

var lo = [
    {url:"oModal('cap_',15)" , txt:'Planas & Curvadas', img:"" , imges:"cur_2.png"},
    //{url:"oModal('pla_',6)" , txt:'Gorras Planas', img:"" , imges:"pla_5.png"},
];

var cont = 0;

var setClass = function(x){ return ' class="' + x + '"'}
var setStyle = function(x){ return ' style="' + x + '"'} 
var setHref = function(x){ return ' href="' + x + '"'}
var setId = function(x){ return ' id="' + x + '"'}
var setOnClk = function(x){ return ' onclick="' + x + '"'}

var createA = function(attr, content){ return createElem('a', content, attr)}
var createI = function(attr, content){ return createElem('i', content, attr)}
var createP = function(attr, content){ return createElem('p', content, attr)}
var createH1 = function(attr, content){ return createElem('h1', content, attr)}
var createH3 = function(attr, content){ return createElem('h3', content, attr)}
var createH4 = function(attr, content){ return createElem('h4', content, attr)}
var createDiv = function(attr, content){ return createElem('div', content, attr)}
var createBtn = function(attr, content){ return createElem('buttom', content, attr)}

var createImg = function(attr){ return '<img' + attr + '>'}

var createElem2 =(elem,attr,content)=>{return '<'+elem +[attr]+'>' +[content]+ '</'+elem+'>' } 

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

var create_aPlusI =(attr1, content1, attr2, content2 )=>{ return createElem2('a', attr1, createElem2('i', attr2, content2) + content1 )}
var create_divPlusH3 =(attr1, content1, attr2, content2 )=>{ return createElem2('div', attr1, createElem2('h3', attr2, content2) + content1 )}


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


function innerMenu(id,list,heading){

    let myAttr =  setId(id.id + 'Box_' + cont)+ setClass(id.id + 'Box');
        id.innerHTML += create_divPlusH3( myAttr, '', '', heading ) ;
    let mainDiv = document.getElementById( id.id + 'Box_' + cont );  

        list.forEach(function(item){   
                let i = createI( setClass(item.icon) ); 
                let p = createP( '' ,' ' + item.name );
                let result = createA( setClass('w3-btn') + setHref(item.url), i + p );
                
            mainDiv.innerHTML += result;
        });
        cont++; 
}



function innerSocialLinks(id , list , heading){

    let myAttr =  setId(id.id + 'Box_' + cont)+ setClass(id.id + 'Box');
        id.innerHTML += create_divPlusH3( myAttr, '', '', heading ) ;    
    let mainDiv = document.getElementById( id.id + 'Box_' + cont ); 
    
    list.forEach(function(item){
        let attr1 = setClass('w3-btn') + setHref(item.url) ;
        let attr2 = setClass(item.icon);
    
    mainDiv.innerHTML += create_aPlusI(attr1 ,'',attr2) ;

        
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

var style1 = 'height:440px; position:relative;' +
            'text-align:center';

//var newDiv = ' position:relative; bottom:5%; padding: 6% 0 '; 

var styles2 = 'height:160px; width:100%;;' +
			 'background-color:rgba(8,76,83, 0.6); ' +
			 'position:absolute; bottom:10%; transform:skewY(12deg) ';

	
var txtBox = 'width:100%; color:white; ' + //rgb(171,217,225);' +
             'background:rgba(8,76,83,0); position:absolute; bottom:2%; '+
             ' padding-bottom:3%; transform:skewY(0deg);' ;
			 
			 
		//	 background:rgb(171,217,225); color:rgb(8,76,83)
var btnClasses = 'w3-btn w3-large w3-round-xxlarge w3-red w3-card-4';

var imgStyle = setStyle('position:relative; top:0;');
var imgW3Class = setClass('promo /*w3-border w3-border-blue*/')


function innerSlideshow(id, list, heading){
    let x = setId( id.id + 'Box_' + cont );
    let y = setClass( id.id + 'Box' );
    let myAttr = x + y;    
        id.innerHTML += createDiv( myAttr , /* createH3('', heading )*/ );
    ////
    let mainDiv = document.getElementById( id.id + 'Box_' + cont );   
   
    list.forEach(function(item){
    	let onClk = setOnClk(item.url)
        let img = createImg( imgStyle +  imgW3Class + src(item.image)  );
        
        let h1 = createH1('',item.title );
        let h4 = createH4('', item.senten )
        let btn = createBtn( setId('') + setStyle('position:absolute: bottom:2%') +
        					setClass( btnClasses ),'Ver Cat&aacutelogos');

        let txtCont = createDiv( setStyle( txtBox ) + setClass( /*/** 'w3-border' /***/), h1 + h4 + btn);
        let skewCont= createDiv( setStyle( styles2 ) ) ;
    ////
        mainDiv.innerHTML += createDiv(onClk+  [setClass('mySlides ')] + setStyle(style1) , skewCont+txtCont + img );
    ////
	});
   // mainDiv.innerHTML += arrowLeft +arrowRight;
}



function myFunction(){
	
	let divs = createDiv( setStyle(styles2) ) ;
	let tittle = createElem('h1','', 'Smart Tv Box Plus');
	let buttom = createElem('buttom' , setClass( btnClasses ) , 'Mas informaci&oacuten');
	let p = createElem('h4','', 'Aprovecha que solo quedan pocos.')
	let content = tittle + p + buttom;
	
	let square = createDiv( setStyle(styles3), content );

return createDiv( setStyle(style1), createImg(  src('promo_0.png')) + divs + square)
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









