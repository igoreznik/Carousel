$(document).ready(function() {
	var navLink = $(".nav-item a");
	$.ajax({
		url: "../data/data.json",
		data: {
			format: "json"
		},
	})
	.done(function(data) {
		console.log(data);
		console.log("---------------");
		var obj = data.imgdb;
		var img = [],
			title = [],
			credit = [],
			content = "";
			for(var prop in obj) {
				img.push(obj[prop].src);
				title.push(obj[prop].header);
				credit.push(obj[prop].credit);
				//console.log(obj[prop]);
			}
			/*for(var i = 0; i<img.length; i++) {
				$(".img-list").append("<li><figure><img src=" + img[i] + "><figcaption>" + title[i] + "</figcaption></figure></li>");
				$("li").addClass("img-item");
			}*/
			for(var i = 0; i<img.length; i++) {
				content+= "<li><figure><img data-src=" + img[i] + "><figcaption>" + title[i] + "</figcaption></figure></li>";
			}
			$(".img-list").html(content);
			$(".img-list li").addClass("img-item");
			$(".img-item img").addClass("lazyload");

		var visibleSlides = 3;
		var slides = $(".img-item");
		var totalSlides = slides.length;
		//slides.css("width", (100/visibleSlides) + "%");

		$(".action").click(function() {
			var btn = $(this);
			setIndex(btn.attr("data-action"));
			slideScroll();
		});

		var currentSlideIndex = 0;

		function setIndex(dir) {
			if(dir === "next") {
				currentSlideIndex++;
			}
			else if(dir === "prev") {
				currentSlideIndex--;
			}
			if(currentSlideIndex < 0) {
				currentSlideIndex = 0;
			}
			if(currentSlideIndex > totalSlides - visibleSlides) {
				currentSlideIndex = totalSlides - visibleSlides;
			}
			console.log(dir);
		}

		function slideScroll() {
			var slideWidth = parseInt(slides.width());
			var scrollPx = -1 * slideWidth * currentSlideIndex;
			$(".img-list").css("transform", "translate(" + scrollPx + "px)");
		}

		
		//console.log(img.length);
		//console.log(title);
		//console.log(credit);
	})
	/*var t = setInterval (function() {
		$(".img-list").animate({marginBottom: -200},2000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginBottom: 0});
		})
	}, 3000);*/
	
	

	

});