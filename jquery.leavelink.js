/*
* Author: Huynh Thuc
* Email: haruthuc@gmail.com
* Leave Link a simple plugin to nofify when user click a link to leave website
*/

(function($) {

	$.fn.leaveLink = function(options){

		var settings = $.extend({
    				onLeave : null
		}, options);

		return this.each( function() {

			el = $(this);
			//URL the link goes to
			var url = el.attr('href');
			
			el.click(function(e){

				console.log("url",url);

				e.preventDefault();

				if ($.isFunction(settings.onLeave)) {
	        		 var go = settings.onLeave.call( this );
	        		 console.log("go",go);
		        	if(go){
						    window.location.href=url;        		 	
		        	}
    			}
				return false;
			});
		});

	}

}(jQuery));
