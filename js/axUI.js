// EVITAR QUE AL PRESIONAR ENTER SE MANDE UN FORM
$(".form").keypress(function(e) {
  if (e.which == 13) {
    return false;
  }
});

// SIDEBAR	
  var submSB = 0; // variable de SIDEBAR booleana
  var elemSB;	 // variable donde se alamacena el elemento anterior
  var tsSB; // variable donde se almacena el this del elemento anterior 
  
$('.submenu li').hide();		
$(".submenu li").each(function(index) {
  if($(this).children().attr("class") == 'active')
  { 
    $(this).prevUntil('.submenu').nextUntil('.submenu').show();
	$(this).prevUntil('.submenu').find('span:first').hide();
	submSB = 1;
	elemSB =  $(this).prevUntil('.submenu').nextUntil('.submenu');
	tsSB =  $(this).prevUntil('.submenu');
  }
});
	
$(".submenu .submenuShow").click(function () { 
      if(submSB == 0) // Cuando se abre A  o  B
	  {
		tsSB = $(this);  
        submSB = 1;
		elemSB = $(this).nextUntil(".submenu");
	    elemSB.slideDown('slow');
		$(this).find('span:first').hide();
	  }else{
		  //$(this).nextUntil('.submenu').find('a:first').attr('href')
	  	if($(this).next().find('a').attr('href') == elemSB.find('a').attr('href')) // Cuando se cierra A y A esta abierto
		{
		   elemSB.fadeToggle("slow", "linear").hide('slow');
		   $(this).find('span:first').show();
		   submSB = 0;
		}else{ // cuando se abre B y A esta abierto
		   elemSB.fadeToggle("slow", "linear").hide('slow');
		   tsSB.find('span:first').show();
		   submSB = 1;
		   elemSB = $(this).nextUntil(".submenu");
		   elemSB.slideDown('slow');
		   $(this).find('span:first').hide();
		   tsSB = $(this);
		}
	 }
	 return false;
    });	
	
// SIDEBAR END

// MESSAGE

$(".good a, .warning a, .error a").click(function () { 
      
      $(this).parent(this).fadeToggle('slow','linear').hide('slow');	  
	  return false;
	  
});

// MESSAGE END