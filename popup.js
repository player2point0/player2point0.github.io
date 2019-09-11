function hidePopup()
{
	$(".popup-background").css("display","none");
}

function showPopup(title,description,github,link)
{
	$(".popup-background").css("display","inline-grid");

	$(".popup-title").text(title);
	$(".popup-description").text(description);
	$(".popup-link").attr("href",link);
	$(".popup-link-github").attr("href",github);
}
