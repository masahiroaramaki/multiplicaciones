// JavaScript Document
$(document).ready(function(){
alert("¡Hola, Elvi! ¿vamos a estudiar? ¡¡Animoooooo!!");
var score=0;
var probado=0;
$('.multipli').bind('pageshow',function(){
$('.muestra').hide();
});

function multi(respuestaPor,x){
if($('span.numero').html()==''){
$('span.numero').html(x);
}
$('.comprobar').click(function(){
var respuesta=respuestaPor*x;
var respondidoString=$(this).parent().parent().children('input.respuesta').val();
var respondido=Number(respondidoString);
if(respondido==respuesta){
$('.resultado').html('¡¡Correct!!');
score++;
alert('score es '+score);
}else{
$('.resultado').html('Lástima, la respuesta correcta es '+respuesta);
}
});//click

}//function multi

$('.multiplicaciones').click(function(){
$('.respuesta').val('');
$('span.numero').html('');
$('.resultado').html('');
var z=$(this).attr('name');
z=Number(z);
var y=Math.floor((Math.random()*9)+1);
multi(z,y);
probado++;
alert('práctica número '+probado);
});

$('.resultadoFinal').click(function(){
var hoy=new Date();
hoy=hoy.toLocaleString();
var frase='<p>'+'Has acertado '+score+' de las '+probado+' pruebas que has realizado.'+hoy+'</p>';
$('#totalResult').append(frase);
});

$('#resultado a').click(function(){
score=0;
probado=0;
});

$('.aparece').toggle(function(){
$('.muestra').show();
$('.aparece').prop('value','Esconder multipicaciones');
$('.escondelo').html('<p>'+'Antes de realizar la prueba, esconde las multipicaciones.'+'<br/>'+' Si no lo escondes, no podrás poner la respuesta.'+'</p>');
$('.respuestaComprobada').text('');
$(".respuesta").attr("disabled", true);
},function(){
$('.muestra').hide();
$('.aparece').prop('value','Mostrar multipicaciones');
$('.escondelo').html('');
$('.respuestaComprobada').text('Pon la respuesta y click al botón "Comprobar".');
$(".respuesta").attr("disabled", false);
});//toggle
$('.muestra li p').hover(function(){
$(this).css('backgroundColor','yellow');
},function(){
$(this).css('backgroundColor','');
});


});