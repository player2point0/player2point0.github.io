$(function()
  {
	//need to disable jump up animation


	$(".work img").on("click", function(image){

		$(".popup-background").css("display","block");

		var title = image.target.getAttribute("data-name");
		var text = image.target.getAttribute("data-text");
		var link = image.target.getAttribute("data-link");
		var linkGit = image.target.getAttribute("data-link-github");

		setPopup(title,text,link,linkGit);

	});

	$(".popup-exit").on("click",function(){
			$(".popup-background").css("display","none");
	});



	function setPopup(title,description,link,github)
	{
		$(".popup-title").text(title);
		$(".popup-description").text(description);
		$(".popup-link").attr("href",link);
		$(".popup-link-github").attr("href",github);
	}

});
