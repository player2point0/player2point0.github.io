function hidePopup()
{
	$(".popup-background").css("display","none");
}

function showPopup(title,description,link,github)
{
	$(".popup-background").css("display","block");

	$(".popup-title").text(title);
	$(".popup-description").text(description);
	$(".popup-link").attr("href",link);
	$(".popup-link-github").attr("href",github);
}
