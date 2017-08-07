;(function($) {
	var playList = [
		{
			author: "LED ZEPPELIN",
			song:"STAIRWAY TO HEAVEN"
		},
		{
			author: "QUEEN",
			song:"BOHEMIAN RHAPSODY"
		},
		{
			author: "LYNYRD SKYNYRD",
			song:"FREE BIRD"
		},
		{
			author: "DEEP PURPLE",
			song:"SMOKE ON THE WATER"
		},
		{
			author: "JIMI HENDRIX",
			song:"ALL ALONG THE WATCHTOWER"
		},
		{
			author: "AC/DC",
			song:"BACK IN BLACK"
		},
		{
			author: "QUEEN",
			song:"WE WILL ROCK YOU"
		},
		{
			author: "METALLICA",
			song:"ENTER SANDMAN"
		}
	];

	var body = $('body');
	body.html('<ol style="list-style: none; padding: 0; margin: 0;">');
	for (var key in playList) {
		body.find('ol').append('<li>Автор: ' + playList[key].author + '<br>Песня: ' + playList[key].song + '</li>' + '<br>');
	}
})(jQuery);