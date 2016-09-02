console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');
	$('#guess-number-form').on('submit', function(event){
		event.preventDefault();

		$.ajax({
		  	url: '/pick-a-number',
		  	method: 'GET',
		  	data: $('#guess-number-form').serialize(),
		  	success: onSuccess,
		  	error: onError
		});

  		function onSuccess(res){
	  		console.log(res);
	  		$('#high-low-correct').html(res);
	 	}
	 	function onError(jqXHR, status, error){
	  		console.log("Error with ajax step");
	 	}

	});
	
	$('#target-number-form').on('submit', function(event){
		event.preventDefault();

		$.ajax({
		  	url: '/pick-a-number',
		  	method: 'POST',
		  	data: $('#target-number-form').serialize(),
		  	success: onCreateSuccess,
		  	error: onError
		});

		function onCreateSuccess(res){
			console.log(res);
			$('#target-number-form')[0].reset();
		}
		function onError(jqXHR, status, error){
	  		console.log("Error with ajax step");
	 	}

 	});



});
