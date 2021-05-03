function onError(error)
{
	console.log(`Error: ${error}`);
}

function onGot(item) 
{
	let c=new Array();
	let color = "azul";
	if (item.color) 
		color = item.color;

	switch(color)
	{
		case "azul":
			c[0]="456780";
			c[1]="c5d7f5";
			c[2]="3050a0";
			c[3]="b5c7f0";
			c[4]="4567a0";
			c[5]="b9cadf";
			c[6]="456790";
			c[7]="ddeeff";
			c[8]="5577b0";
			c[9]="355580";
			c[10]="d8e9ff";
			c[11]="a8b9cf";
			c[12]="9899bf";
		break;
		case "verde":
			c[0]="458067";
			c[1]="c5f5d7";
			c[2]="30a050";
			c[3]="b5f0c7";
			c[4]="45a067";
			c[5]="b9dfca";
			c[6]="459067";
			c[7]="ddffee";
			c[8]="55b077";
			c[9]="358055";
			c[10]="d8ffe9";
			c[11]="a8cfb9";
			c[12]="98bf99";			
		break;
		case "morado":
			c[0]="674580";
			c[1]="d7c5f5";
			c[2]="5030a0";
			c[3]="c7b5f0";
			c[4]="6745a0";
			c[5]="cab9df";
			c[6]="674590";
			c[7]="eeddff";
			c[8]="7755b0";
			c[9]="553580";
			c[10]="e9d8ff";
			c[11]="b9a8cf";
			c[12]="9998bf";			
		break;
		default:
			alert("error! color incorrecto: "+color);
	}

	$( document ).ready(function() {

		$(".sidebox .votes,.sidebox .clics").css("border-radius","25px");
		$("body").css("background-color","#eee");
		$("#newsletter").remove();
		//$(".menealo a").css("background-image","none");
		$(".menealo a").css("background-image","linear-gradient(-180deg, #"+c[8]+" 0%, #"+c[9]+" 100%)");
		$(".menealo a").css("background-color","#"+c[0]);
		$(".header-top-wrapper").css("background-color","#"+c[0]);
		$(".news-shakeit .votes").css("background-color","#"+c[1]);
		$(".news-shakeit .clics").css("background-color","#"+c[1]);
		$(".news-shakeit .votes a").css("color","#"+c[0]);
		$(".news-shakeit").css("color","#"+c[0]);
		$(".news-details a:link").css("color","#"+c[0]);
		$(".news-details button").css("color","#"+c[0]);
		$(".news-submitted a").css("color","#"+c[0]);
		$(".header-menu01 a.submit_new_post, .header-menu01 a.submit_new_article").css("color","#"+c[0]);
		$("#toplink").css("background-color","#"+c[1]);
		$("#toplink h1 a").css("color","#"+c[4]);
		$("#toplink a.footer").css("background-color","#"+c[2]);
		$(".header").css("background","#"+c[0]);
		$(".sidebox h4 a, .sidebox h4 span").css("color","#bebebe");
		$(".news-details a.comments").css("background-color","#"+c[3]);
		$(".news-details a i, .news-details button i").css("color","#"+c[4]);
		$(".news-details span.votes-up i, .news-details span.karma-letter, .news-details span.votes-anonymous i, .news-details span.votes-down i").css("color","#"+c[3]);
		$("h2").css("color","#"+c[0]);
		$(".sidebox .votes span, .sidebox .clics span").css("color","#"+c[0]);
		$(".sidebox .votes span, .sidebox .clics span").css("border","2px solid #"+c[0]);
		$(".sidebox-rounded div.finished, .sidebox-rounded .show-responses").css("color","#"+c[2]);
		$(".sidebox .mainsites a").css("color","#"+c[0]);
		$("#footcol1 h5, #footcol2 h5, #footcol3 h5, #footcol4 h5, #footcol5 h5").css("color","#"+c[0]);
		$(".pages span.current, .pages a:hover").css("background-color","#"+c[0]);
		$(".pages span.current, .pages a").css("border","solid 1px #"+c[0]);
		$(".pages a, .pages span, .widget-popular-links-slider .link-info a.author, .popular-link-widget-right div.subtitle").css("color","#"+c[0]);
		$(".pages span.current").css("color","#ffffff");
		$(".pages span.nextprev").css("border","solid 1px #"+c[1]);
		$("#footthingy").css("background","none");
		$("#footthingy p").css("border-bottom","none");
		$(".news-summary .warn, .story-blog .warn").css("color","#"+c[2]);
		$('head').append("<style>.news-summary .warn::before{ color: #"+c[2]+"; content:'\f071' }</style>");

		$(".popular-link-widget-right a.meneame-button").css("background-image","none");
		$(".popular-link-widget-right a.meneame-button").attr('style', 'background-color: #'+c[2]+' !important');
		$(".news-shakeit.mnm-queued .votes, .news-shakeit.mnm-queued .clics").css("border","transparent");
		$(".news-details a:link, .news-details a:visited, .news-tags, .news-tags a:link, .news-tags a:visited").css("color","#"+c[0]);
		//fondo de comentarios
		$(".comment-body").css("background","#"+c[10]);
		$(".comment.high .comment-body").css("background","#"+c[11]);
		$(".comment.high.author .comment-body").css("background","#"+c[12]);

		$(".comment-header a").css("color","#"+c[0]);
		$(".commentform.warn.white, .commentform.warn a").css("color","#"+c[5]);
		$(".commentform.warn.white").css("border","2px solid #"+c[5]);
		$(".commentform.warn").css("background","#"+c[0]);

		//links del header
		$(".header-menu01 ul li a, .sidebox h5 a, .sidebox .comments a, .sidebox .tagcloud a").hover(function(){$(this).css("color","#"+c[0])}, function(){$(this).css("color","black")} );
		$(".header-menu01 ul li a").hover(function(){$(this).css("background","url('data:image/png;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoBAAMAABgSJwBOl0A/AAB2AAD+9IiH/jduMN+C7/yC5YXXEYAAAA') repeat-x 100% 100%")}, function(){$(this).css("background","none")});
		$(".header-menu01 .selected a").css("background","url('data:image/png;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoBAAMAABgSJwBOl0A/AAB2AAD+9IiH/jduMN+C7/yC5YXXEYAAAA') repeat-x 100% 100%");
		//links de artículos
		$(".story-blog .main-content .text a, .section.section-article-submit .input-editable a").css("color","#"+c[0]);
		//perfiles
		$(".section h1, select").css("color","#"+c[0]);
		$(".section-profile .contents-layout .contents-submenu a").css("color","#"+c[2]);
		$(".menealo span").css("background-color","#"+c[0]);
		$(".menealo span").css("border","1px solid #"+c[2]);
		$(".menealo span").css("border-bottom","1px solid #"+c[0]);

		$(".section-profile-header-medals").hide();
		$(".section-profile .contents-layout .contents-submenu").css("border-bottom","1px solid #"+c[1]);

		//loged user
		//$("ul#userinfo a.notifications span, .uploadFile-button").css("color","#"+c[0]);
		$(".uploadFile-button").css("-webkit-filter","invert(70%)");
		$(".uploadFile-button").css("filter","invert(70%)");
		$("legend, legend a, legend a:visited").css("background","#"+c[0]);
		//$(".button, button, input[type='button'], input[type='submit']").css("background","#"+c[0]);
		$(".rich-edit-key, input[type='button'], input[type='submit']").css("background","#"+c[0]);
		$("fieldset").css("background","#"+c[7]);
		$(".btn.btn-mnm.btn-inverted, .note, ul#userinfo a.notifications span, #notifier_panel div").css("color","#"+c[6]);
		$(".btn.btn-mnm.btn-inverted").css("border","1px solid #"+c[0]);
		$("ul#userinfo a.notifications span, #notifier_panel div").css("border","3px solid #"+c[0]);
		$(".label-mnm, .badge-mnm").css("background-color","#"+c[6]);
		$(".contents-menu .selected img").css("filter","invert(1)");

		$(".featured-links-b .header .title").css("color","#fff");
		$(".featured-links-b .featured-links-item-container a.featured-links-item-date").css("color","#"+c[0]);
		$(".sidebox .warn").css("filter","invert(70%)");

	});

}

let getting = browser.storage.sync.get("color");
getting.then(onGot, onError);