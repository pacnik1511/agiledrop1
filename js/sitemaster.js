$(function () {
	$('.edn_550_article_list_wrapper li, .edn_579_article_list_wrapper li').wrapAll('<ul class="product_inline"></ul>');
	$('.edn_579_article_list_wrapper ul.product_inline').wrapAll('<div class="nacrti_his_wrapper"></div>');
	$('.introSlider').bxSlider({
		mode: 'fade',
		auto: true,
		controls: true,
		pause: 5000,
		speed: 1000,
		randomStart: true,
		pager: false,
		prevText: '<i class="icon-left-open-big"></i>',
		nextText: '<i class="icon-right-open-big"></i>'
	});
	
	$('#dnn_ctr582_Default_Form_divForm ul li a.dnnPrimaryAction').each(function() {
        var html = $(this).html() + '';
        html = html.replace(/Pošlji/g, 'Prijava');
		$(this).html(html);
    });
	
	$('.edn_557_article_list_wrapper li, .edn_558_article_list_wrapper li').unwrap();

	$('.referencestavbe ul.reference_slider').bxSlider({
		mode: 'horizontal',
		auto: true,
		controls: false,
		pause: 5000,
		speed: 1000,
		randomStart: true,
		pager: false
	});
	$('.referencehis ul.reference_slider').bxSlider({
		mode: 'horizontal',
		auto: true,
		controls: false,
		pause: 5000,
		speed: 1000,
		randomStart: true,
		pager: false
	});

	/* prva beseda v span */
	$('.pi-description h2').each(function () {
		var $this = $(this);
		var h2 = $this.contents().filter(function () {
			return this.nodeType == 3
		}).first(), h2Txt = h2.text(), prva = h2Txt.split(" ", 1).join(" ");
		if (!h2.length)
			return;
		h2[0].nodeValue = h2Txt.slice(prva.length);
		h2.before('<span>' + prva + '</span>');
	});
	/* prvi dve v span */
	$('.rs-detail h2').each(function () {
		var $this = $(this);
		var h2 = $this.contents().filter(function () {
			return this.nodeType == 3
		}).first(), h2Txt = h2.text(), prva = h2Txt.split(" ", 2).join(" ");
		if (!h2.length)
			return;
		h2[0].nodeValue = h2Txt.slice(prva.length);
		h2.before('<span>' + prva + '</span>');
	});

	NavigationControl();
	$(window).resize(function () {
		NavigationControl();
	});

	$('.MapPaneHolder .mph-image').click(function () {
		$(this).fadeOut('slow');
	});

	(function () {
		"use strict";
		var toggles = document.querySelectorAll(".c-hamburger");
		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};
		function toggleHandler(toggle) {
			toggle.addEventListener("click", function (e) {
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
			});
		}

	})();
});

function NavigationControl() {
	var wWid = $(window).width();
	if (wWid <= 991) {
		$("header#siteHead").addClass('isMobile');
		$("#PullNav, .nsdm-more, .nsdm-more-sub").click(function () {
			$(this).toggleClass('active');
			$(this).next().stop().slideToggle();
		});
	}
	else {
		$("header#siteHead").removeClass('isMobile');
		$("ul.siteNavigation").removeAttr('style');
	}
}