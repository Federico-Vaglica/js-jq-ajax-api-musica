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


		var genere = $('.nav-bar select').val();
		console.log(genere);

		$(document).on('change','.nav-bar select' ,function() {
			genere = $(this).val()
			console.log(genere);
		

		$.ajax({
			url: 'https://flynn.boolean.careers/exercises/api/array/music',
			method: 'GET',
			success: function(a) {
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
			},
			error: function () {
			  alert('ERROR');
			}
		  });
		});


/**************************FUNCTION****************************************/


		function createAlbum(a){
			for(var i=0; i < a.length; i++){
				var album = a[i]
				var source = $('#entry-template').html();
				var template = Handlebars.compile(source);

				
				var html = template(album);
				$('.cds-container').append(html);
			}
		}


});
