function get_images(y, n){   	
var f1_Set ='';
for (var i = 0; i < n; i++)	{
  
		//f1_Set += '<img class="caption" src="logo.png"><img class="passing" src="'+ y + i +'.png" style="width:100%">';
	 	}	
			f1_Set += '<img src="marco.png" style="position:absolute; top:0; width: 100%;z-index:2;">';
				
			f1_Set += arrowLeft + arrowRight;
						
			containerModal.innerHTML += f1_Set;
}


// Get the modal
//function oModal(nam, num){
	function oModal(){
  
	  exit_Icon(myModal);
	  modal.style.display = "block";
	  //get_images(nam, num);
	  //showDivs(slideIndex); 
}

function exit_Icon(id){
	var x = id.getElementsByTagName("a")[0]; 
		x.innerHTML = "&#10006";			
		x.src = "javascript:void(0)";
		x.onclick = function(){ w3_close() };
		}

function w3_close()	{	
  modal.style.display = 'none';
}

var slideIndex = 0;


function plusDivs(n){
  showDivs(slideIndex += n);
}


function showDivs(n){
  var i;   
	var x = document.getElementsByClassName("passing");
	var y = document.getElementsByClassName("caption");
  	
  	if (n > x.length)	{ slideIndex = 1; }   	
	if (n < 1) 	{ slideIndex = x.length } 
	
		for ( i = 0; i < x.length; i++
		){
			x[i].style.display = "none";
			y[i].style.display = "none";
		}    
    	x[slideIndex-1].style.display = "block";  
    	y[slideIndex-1].style.display = "block";
}




function scrolling(){	
		if(header.offsetTop < window.pageYOffset)	{
			header.classList.add("sticky");	
			logo.style.opacity='1';	
			logo.style.transition ='1s';
		}else{
			header.classList.remove("sticky");
			logo.style.opacity ='0';
			logo.style.transition ='0s';
		}
}


function backTopTrigger(){
	if(banner_dots.offsetTop < window.pageYOffset)	{		
	    topbtn.style.width="40px";
		}else{		
	    topbtn.style.width="0px";
	}			
}
