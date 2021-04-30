$( document ).ready(function() {
	if(document.domain=="nhentai.net")
	{
		$(".gallery[data-tags*='6346']").remove();
		$(".gallery[data-tags*='29963']").remove();
	}
	if(document.domain=="nhentai.com")
	{
		setTimeout(function(){ 
		
			$(".comic-language[alt='Japanese']").parent().parent().parent().parent().parent().remove();
			$(".comic-language[alt='Chinese']" ).parent().parent().parent().parent().parent().remove();
		
		}, 80);
		//$(".comic-language[alt='Japanese']").parent().parent().parent().parent().parent().remove();
		//$(".comic-language[alt='Chinese']" ).parent().parent().parent().parent().parent().remove();
	}
});