	$(document).ready(function(){
		$.ajax({
			url: 'https://flynn.boolean.careers/exercises/api/array/music',
			method: 'GET',
			success: function(a) {
				createAlbum(a.response);
			},
			error: function () {
			  alert('ERROR');
			}
		  });
		/*Qui creo la var che memorizza il valore del select*/
		var genere = $('.nav-bar select').val();
		console.log(genere);

		$(document).on('change','.nav-bar select' ,function() {
			genere = $(this).val()
			console.log(genere);
		
		$.ajax({
			url: 'https://flynn.boolean.careers/exercises/api/array/music',
			method: 'GET',
			success: function(a) {
				estrapolateGenre(a);
			},
			error: function () {
			  alert('ERROR');
			}
		  });
		});
/**************************FUNCTION****************************************/
/*Funzione che popola il dom creando dei semplici cloni per ogni oggetto dell array usando handlebar */ 
		function createAlbum(a){
			for(var i=0; i < a.length; i++){
				var album = a[i]
				var source = $('#entry-template').html();
				var template = Handlebars.compile(source);

				
				var html = template(album);
				$('.cds-container').append(html);
			}
		}
/*Funzione che estrapolo il genre dell album :
1 step : setto il contento testuale del container a ''
2 step : inizializzo un var [arrAlbum] uguale all output che ricevero dall api , in questo caso tutti i miei album
3 step : inzializzo un ciclo alla lunghezza del mio array di oggetti
4 step : creo una variabile dove salvare ogni singolo che mi interessa durante il ciclo
5 step : imposto una condizione if else
if : il mio album[album.genre] e' uguale al valore della variabile genere , la nuova var selected sara appesanel mio template
else : se invece e' uguale ad all sarrano appese tutte */
		function estrapolateGenre(a){
			$('.cds-container').text('');
				var arrAlbum = a.response;
				console.log(arrAlbum)
				var source = $('#entry-template').html();
				var template = Handlebars.compile(source);
				for(var i=0; i < arrAlbum.length; i++){
					var album = arrAlbum[i];
					if(album.genre === genere) {
						var selected = album;
						var html = template(selected);
						$('.cds-container').append(html);
					} else if (album.genre === 'all') {
						var selected = album;
						var html = template(selected);
						$('.cds-container').append(html);
					}
				}
		}
});
