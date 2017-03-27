var mostrarResultados = function(texto, estilo){
	/*var elemento = document.getElementById('mostrarResultado');
	elemento.innerHTML = texto;
	elemento.className	 = estilo;*/
	$('#mostrarResultado').text(texto);
	$('#mostrarResultado').addClass(estilo)
}

$('#btn_calcular_edad').click(function(){

	var nombre = $('#name').val();
	var fecha = $('#fecha_nacimiento').val();
	var user = new usuario(nombre, fecha);
	var texto = user._presentarse();
	//mostrarResultados(texto, 'azul');
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
 		
       /*$('#mostrarResultado').text(
           "Hola, mi nombre es " + this._nombre + 
           " y tengo " + calcularEdad() + " años."
        );
       */ 
      var edad1 = calcularEdad();
        texto = "Hola, mi nombre es " + this._nombre + 
           " y tengo " + edad1 + " años.";
 
         mostrarResultados(texto, 'azul');
    };



}



