    $(document).ready(function(){
		// Menú Mobile
	  	// Abrir y Cerrar
		  $('#abrir').click(function(){
				$('#menu-movil').animate({
					right: 0
				},800);
				$('#abrir').hide();
				$('#cerrar').show();
				event.preventDefault();
		  });

          $('#cerrar').click(function(){
				$('#menu-movil').animate({
					right: '-100%'
				},800);
				$('#abrir').show();
				$('#cerrar').hide();
				event.preventDefault();
            });


        // Configuración de Enlaces de Menú
        $('.link-scroll').click(function(){
            $('#menu-movil').animate({
                right: '-100%'
            },800);
            $('#abrir').show();
            $('#cerrar').hide();
        });


        // Activación de transición del menú
        $('.link-scroll, #to-portaf').bind('click',function(event){
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500,'easeOutExpo');
            event.preventDefault();
        });


        // Función Sticky con color
        $(window).scroll(function(){
            if ($(this).scrollTop() > 250) {
                $('header').removeClass('transparente');
                $('header').addClass('blanco');

                $('header').css('height','70px');
                $('header a').css('width','130px');
                $('header a').css('height','44px');
            } else {
                $('header').removeClass('blanco');
                $('header').addClass('transparente');

                $('header').css('height','100px');
                $('header a').css('width','159px');
                $('header a').css('height','76px');
            }
        });
	});