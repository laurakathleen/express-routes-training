console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');
	$('#art-gallery').on('submit', function(event){
		event.preventDefault();

		$.ajax({
		  	url: '/artworks',
		  	method: 'POST',
		  	data: $('#art-gallery').serialize(),
		  	success: onSuccess,
		  	error: onError
		});
	});

  		function onAddArtSuccess(res){
	  		console.log(res);
	  		$('#post-art').append(res);
	 	}
	 	function onAddArtError(jqXHR, status, error){
	  		console.log("Error with ajax step");
	 	}

	});