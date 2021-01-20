
$(document).on("click",".btn_registrar",()=>{
// VALIDAR QUE ELIJA LA CIUDAD
	let city = $("#ciudad").val();
	if(city.length==0){
		$("#msj_ciudad").attr("class","bg-danger");
		return false;
	}
//VALIDAR LAS OPCIONES DEL RADIO BOTON
    let obj_sexo=$(".obj_radio");
    let sexo="";
	$(obj_sexo).map(function(){

	 	if(  $(this).prop('checked') ){
	 		sexo= $(this).val() ;
	 	}

	});
	 if(sexo==""){
	 	alert('Seleccione una opcion');
	 	return false;
	 }
	 //VALIDAR LOS TERMINOS Y CONDICIONES
     let terminos=$("#terminos");
    if( !$(terminos).prop('checked') ){
	 	alert('Debe acepatar los terminos y condiciones');
	 	return false;
    }
    alert('Datos correctos');

})