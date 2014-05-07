// JavaScript Document
$(document).ready(function()
{
var nombre;	

	
/*	var fechaH=new Date("2014/04/07");
	alert(fechaH);
	var fechac=new Date("2014/04/10");
	alert(fechac);
	resul = fechac-fechaH;
	alert(resul);
	dia= ((((resul/1000)/60)/60)/24);
	
	alert(dia);*/
	$('#siguiente_nombre').click(function(e)
	{
	
	
	nombre=$('#txtnombre').val();
	//alert(nombre);
});//click siguinete nombre
     $('#siguiente_fecha').click(function(e){
		
	 var fecha=new Date();
	
	// alert(fecha.getDate());
	// alert(fecha.getMonth());
	// alert(fecha.getFullYear());
	 var fechaA = new Date(fecha.getFullYear() + '/' + (fecha.getMonth()+1) + '/' + fecha.getDate());
	// alert(fechaA)
	 var diac= $('#diac').val();
	 var mesc= $('#mesc').val();
	 var yearc=$('#yearc').val();
	 fechaC = new Date(fecha.getFullYear() + '/' + mesc + '/' + diac);
	 if (fechaC < fechaA)
	 {	
	fechaC =new Date((fecha.getFullYear() + 1) + '/' + mesc + '/' + diac);
	//alert(fechaC)
	
	 }
	 
	 resul= fechaC-fechaA;
	 //alert(resul);
	 dia=Math.ceil((((resul/1000)/60)/60)/24);
	// alert(dia);
	edad= fecha.getFullYear() - yearc;
	//alert(edad);
	if ((fecha.getMonth()+1)< mesc)
	{
		edad=edad-1;
	}
	else
	{
		if ((fecha.getMonth()+1)== mesc)
		{
			if (diac>fecha.getDate())
			{
				edad= edad-1;
			}
			}
	}
	
	//alert(edad);
	
	 if (dia > 1)
	 {
	 $('#nombre').text('Que tal '+ nombre + ' te faltan '); 
	 $('#dias').text(dia + ' dias para tu cumpleanos');
	 }
	 else
	 {
		 $('#nombre').text('Que tal '+ nombre + ' te falta '); 
	 $('#dias').text(dia + ' dia para tu cumpleanos');
	 }
	  
	 if (dia < 30)
	 { 
	 $('#animacion').text('Felicidades!!!!! :) ');}
	// alert(nombre);

     });//click en siguiente fecha
	 
});//ready