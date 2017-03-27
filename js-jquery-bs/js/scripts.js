var mostrarResultados = function(texto, estilo){
	$('#mostrarResultado').text(texto).attr('class',estilo);
	//$('#mostrarResultado').addClass(estilo)
}

$('#btn_calcular_edad').click(function(){

	var nombre = $('#name').val();
	var fecha = $('#fecha_nacimiento').val();
	var user = new usuario(nombre, fecha);
	var texto = user._presentarse();
});

$('#btn_id_selector').click(function(){
	var texto = $('#thing1').text();
	mostrarResultados(texto, 'azul');

});

$('#btn_class_selector').click(function(){
	var texto = $('.special').text();
	mostrarResultados(texto, 'rojo');

});

$('#btn_tag_selector').click(function(){
	var texto = $('h1').text();
	mostrarResultados(texto, 'verde');
});

$('#btn_cambiarContenido').click(function(){
	var texto1 = $('h1').text();
	var texto2 = $('#thing1').text(); 
	$('#thing1').append(texto1);
	$('h1').html(texto2);

	var texto3 = $('h1').text();
	mostrarResultados(texto3, 'amarillo');
});

$('#btn_hijos').click(function(){
	/*var texto1 = $('h1').text();
	var texto2 = $('#thing1').text(); 
	$('#thing1').html(texto1);
	$('h1').html(texto2);

	var texto3 = $('h1').text();
	mostrarResultados(texto3, 'amarillo');*/

});



function usuario(nombre, fecha){
	this._nombre = nombre;
	this._fecha = fecha;
	this._edad;

	function calcularEdad(){
		var actual = new Date().getFullYear();
        var nacimiento = new Date(fecha).getFullYear();

        if (actual <= nacimiento)
             edad = "Error: no se ha podido calcular";
        else
             edad = actual - nacimiento;
         return edad;
     };


    this._presentarse = function() {
 		
      var edad1 = calcularEdad();
        texto = "Hola, mi nombre es " + this._nombre + 
           " y tengo " + edad1 + " años.";
 
         mostrarResultados(texto, 'azul');
    };



}



