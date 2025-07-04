;(function($){
    "use strict"
	
	
	var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
	
	
	/*----------------------------------------------------*/
    /*  Parallax Effect js
    /*----------------------------------------------------*/
	function parallaxEffect() {
    	$('.bg-parallax').parallax();
	}
	parallaxEffect();
	
	
//	$('.courses_area').imagesLoaded(function(){
//        $('.courses_inner').isotope({ 
//            layoutMode: 'masonry',
//			percentPosition: true,
//			masonry: {
//				columnWidth: 1,
//			}
//        })
//    });
	
	
	
	
	/*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
   
//	$('.courses_inner').imagesLoaded(function(){
//        $('.courses_inner').isotope({ 
//            layoutMode: 'masonry',
//            percentPosition:true,
//            masonry: {
//                columnWidth: 1,
//            }            
//        })
//    });
	
	
	/*----------------------------------------------------*/
    /*  Clients Slider
    /*----------------------------------------------------*/
//    function clients_slider(){
//        if ( $('.clients_slider').length ){
//            $('.clients_slider').owlCarousel({
//                loop:true,
//                margin: 30,
//                items: 5,
//                nav: false,
//                autoplay: false,
//                smartSpeed: 1500,
//                dots:false, 
//                responsiveClass: true,
//                responsive: {
//                    0: {
//                        items: 1,
//                    },
//                    400: {
//                        items: 2,
//                    },
//                    575: {
//                        items: 3,
//                    },
//                    768: {
//                        items: 4,
//                    },
//                    992: {
//                        items: 5,
//                    }
//                }
//            })
//        }
//    }
//    clients_slider();
	/*----------------------------------------------------*/
    /*  MailChimp Slider
    /*----------------------------------------------------*/
    function mailChimp(){
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();
	
	$('select').niceSelect();
	
	/*----------------------------------------------------*/
    /*  Simple LightBox js
    /*----------------------------------------------------*/
    $('.imageGallery1 .light').simpleLightbox();
	
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	
	$(".skill_main").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
	
	/*----------------------------------------------------*/
    /*  Isotope Fillter js
    /*----------------------------------------------------*/
	function gallery_isotope(){
        if ( $('.gallery_f_inner').length ){
            // Activate isotope in container
			$(".gallery_f_inner").imagesLoaded( function() {
                $(".gallery_f_inner").isotope({
                    layoutMode: 'fitRows',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                }); 
            });
			
            // Add isotope click function
            $(".gallery_filter li").on('click',function(){
                $(".gallery_filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".gallery_f_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    gallery_isotope();
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonials_slider(){
        if ( $('.testi_slider').length ){
            $('.testi_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 3,
                    },
                }
            })
        }
    }
    testimonials_slider();
	
	$(document).ready(function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});

        // initMap();
	}); 
	
	/*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/


        
        // The following example creates a marker in Stockholm, Sweden using a DROP
        // animation. Clicking on the marker will toggle the animation between a BOUNCE
        // animation and no animation.

        var marker;

        function initMap() {

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: $('#map').data('zoom'),
                center: {lat: $('#map').data('lat'), lng: $('#map').data('lon')},
                mapTypeControlOptions: {
                    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
                }
            });

            // MARKER
            marker = new google.maps.Marker({
                map: map,
                title: 'Bonaval Multimedia SL',
                draggable: true,
                animation: google.maps.Animation.DROP,
                position: {lat: $('#map').data('lat'), lng: $('#map').data('lon')}
            });
            


            var contentString = '<div id="content">'+
                '<div id="siteNotice">'+'</div>'+
                '<h3 id="firstHeading" class="firstHeading">' + $('#map').data('title') + '</h3>'+
                '<div id="bodyContent">'+

                    '<div class="info_item">' +
                        '<h6><i class="lnr lnr-home"></i>&nbsp;&nbsp;' + $('#map').data('info') + '</h6>' +
                    '</div>' +
                    '<div class="info_item">' +
                        '<h6><i class="lnr lnr-phone-handset"></i>&nbsp;&nbsp;<a href="tel:' + $('#map').data('phone-link') + '">' + $('#map').data('phone') + '</a></h6>' +
                    '</div>' +
                    '<div class="info_item">' +
                        '<h6><i class="lnr lnr-envelope"></i>&nbsp;&nbsp;<a href="mailto:' + $('#map').data('mail') + '">' + $('#map').data('mail') + '</a></h6>' +
                    '</div>                ' +
                    '<p>' + $('#map').data('text') + '</p>'+
                    '<p><a target="_blank" href="' + $('#map').data('url') + '">' + $('#map').data('url') + '</a></p>'+
                '</div>'+
                '</div>';

            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });

            marker.addListener('click', function() {
                toggleBounce;
                infowindow.open(map, marker);
            });     
            // marker.addListener('click', toggleBounce);
            

            // STYLE
            var styledMapType = new google.maps.StyledMapType(
                [
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#dcdfe6"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "color": "#808080"
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#dcdfe6"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "weight": 2.8
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#d7d7d7"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ebebeb"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#a7a7a7"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#efefef"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#696969"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#737373"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#d6d6d6"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {},
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    }
                ]
            );      

            map.mapTypes.set('styled_map', styledMapType);
            map.setMapTypeId('styled_map');
          }

          function toggleBounce() {
            if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
            } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
            }
          }

    // if ( $('#mapBox1').length ){
    //     var $lat = $('#mapBox').data('lat');
    //     var $lon = $('#mapBox').data('lon');
    //     var $zoom = $('#mapBox').data('zoom');
    //     var $marker = $('#mapBox').data('marker');
    //     var $info = $('#mapBox').data('info');
    //     var $markerLat = $('#mapBox').data('mlat');
    //     var $markerLon = $('#mapBox').data('mlon');
     

    //     var map = new GMaps({
    //         el: '#mapBox',
    //         lat: $lat,
    //         lng: $lon,
    //         scrollwheel: true,
    //         scaleControl: true,
    //         streetViewControl: true,
    //         panControl: true,
    //         disableDoubleClickZoom: true,
    //         mapTypeControl: true,
    //         zoom: $zoom,
    //             styles: [
    //                 {
    //                     "featureType": "water",
    //                     "elementType": "geometry.fill",
    //                     "stylers": [
    //                         {
    //                             "color": "#dcdfe6"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "transit",
    //                     "stylers": [
    //                         {
    //                             "color": "#808080"
    //                         },
    //                         {
    //                             "visibility": "off"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "road.highway",
    //                     "elementType": "geometry.stroke",
    //                     "stylers": [
    //                         {
    //                             "visibility": "on"
    //                         },
    //                         {
    //                             "color": "#dcdfe6"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "road.highway",
    //                     "elementType": "geometry.fill",
    //                     "stylers": [
    //                         {
    //                             "color": "#ffffff"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "road.local",
    //                     "elementType": "geometry.fill",
    //                     "stylers": [
    //                         {
    //                             "visibility": "on"
    //                         },
    //                         {
    //                             "color": "#ffffff"
    //                         },
    //                         {
    //                             "weight": 1.8
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "road.local",
    //                     "elementType": "geometry.stroke",
    //                     "stylers": [
    //                         {
    //                             "color": "#d7d7d7"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "poi",
    //                     "elementType": "geometry.fill",
    //                     "stylers": [
    //                         {
    //                             "visibility": "on"
    //                         },
    //                         {
    //                             "color": "#ebebeb"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "administrative",
    //                     "elementType": "geometry",
    //                     "stylers": [
    //                         {
    //                             "color": "#a7a7a7"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "road.arterial",
    //                     "elementType": "geometry.fill",
    //                     "stylers": [
    //                         {
    //                             "color": "#ffffff"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "road.arterial",
    //                     "elementType": "geometry.fill",
    //                     "stylers": [
    //                         {
    //                             "color": "#ffffff"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "landscape",
    //                     "elementType": "geometry.fill",
    //                     "stylers": [
    //                         {
    //                             "visibility": "on"
    //                         },
    //                         {
    //                             "color": "#efefef"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "road",
    //                     "elementType": "labels.text.fill",
    //                     "stylers": [
    //                         {
    //                             "color": "#696969"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "administrative",
    //                     "elementType": "labels.text.fill",
    //                     "stylers": [
    //                         {
    //                             "visibility": "on"
    //                         },
    //                         {
    //                             "color": "#737373"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "poi",
    //                     "elementType": "labels.icon",
    //                     "stylers": [
    //                         {
    //                             "visibility": "off"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "poi",
    //                     "elementType": "labels",
    //                     "stylers": [
    //                         {
    //                             "visibility": "off"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "road.arterial",
    //                     "elementType": "geometry.stroke",
    //                     "stylers": [
    //                         {
    //                             "color": "#d6d6d6"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "featureType": "road",
    //                     "elementType": "labels.icon",
    //                     "stylers": [
    //                         {
    //                             "visibility": "off"
    //                         }
    //                     ]
    //                 },
    //                 {},
    //                 {
    //                     "featureType": "poi",
    //                     "elementType": "geometry.fill",
    //                     "stylers": [
    //                         {
    //                             "color": "#dadada"
    //                         }
    //                     ]
    //                 }
    //             ]
    //     });
    // }
	

})(jQuery)
