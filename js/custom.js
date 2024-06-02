(function($) {
    "use strict";

    var revapi24;
    var tpj = jQuery;
	
	
	
// Preloader -section
    //-------------------------------------------------------
  // Preloader 
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});

	
	  // on ready function
    jQuery(document).ready(function($) {
	

	//--------------------up scroll js-----------------------------
							// ===== Scroll to Top ==== 
						$(window).scroll(function() {
							if ($(this).scrollTop() >= 100) {       
								$('#return-to-top').fadeIn(200);   
							} else {
								$('#return-to-top').fadeOut(200);  
							}
						});
						$('#return-to-top').click(function() {     
							$('body,html').animate({
								scrollTop : 0                
							}, 500);
						});
			// ===== Scroll to Top end ==== 
				
					/*section-1 slider js */
				$(document).ready(function() {
              $('.header_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
				smartSpeed: 1200,
                responsiveClass: true,
				navText : ['<i class="fa fa-arrow-circle-left"></i>','<i class="fa fa-arrow-circle-right"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: true
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 0
                  }
                }
              })
    })
	
				// placeholder remove
			function removePlaceholder () {
			  if ($("input,textarea").length) {
				$("input,textarea").each(
						function(){
							$(this).data('holder',$(this).attr('placeholder'));
							$(this).on('focusin', function() {
								$(this).attr('placeholder','');
							});
							$(this).on('focusout', function() {
								$(this).attr('placeholder',$(this).data('holder'));
							});
							
					});
			  }
			}

		

		var tpj=jQuery;
					
					var revapi1050;
					tpj(document).ready(function() {
						if(tpj("#rev_slider_1050_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_1050_1");
						}else{
					revapi1050 = tpj("#rev_slider_1050_1").show().revolution({
						sliderType:"standard",
						jsFileLocation:"revolution/js/",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"on",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 50,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							},
							arrows: {
					style:"uranus",
					enable:true,
					hide_onmobile:true,
					hide_onleave:true,
					tmp:'',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:0,
						v_offset:10
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:0,
						v_offset:10
					}
				}
							,
							bullets: {
								enable:true,
								hide_onmobile:false,
								hide_under:1024,
								style:"hephaistos",
								hide_onleave:false,
								direction:"horizontal",
								h_align:"center",
								v_align:"bottom",
								h_offset:0,
								v_offset:40,
								space:10,
								tmp:''
							}
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1400,1240,778,480],
						gridheight:[868,768,960,720],
						lazyType:"none",
						shadow:0,
						spinner:"spinner2",
						stopLoop:"on",
						stopAfterLoops:0,
						stopAtSlide:1,
						shuffle:"off",
						autoHeight:"off",
						fullScreenAutoWidth:"off",
						fullScreenAlignForce:"off",
						fullScreenOffsetContainer: "",
						fullScreenOffset: "",
						disableProgressBar:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			});	/*ready*/
			

		/*----------------------------
		wow js active
		------------------------------ */
			new WOW().init();
	
   // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------
 
    $('.progressFive').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).off('inview');
        }
    });			
			  
	  //-------------------------------------------------------
    // counter Four
    //-------------------------------------------------------
    (function () {
            $('.counterFour').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
                if (visible) {
                    $(this).find('.timer').each(function () {
                        var $this = $(this);
                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    $(this).unbind('inview');
                }
            });

    }());
	
	
							// Tweeter Slider	
    $('.btn-vertical-slider').on('click', function () {
        
        if ($(this).attr('data-slide') == 'next') {
            $('#myCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#myCarousel').carousel('prev')
        }

    });
		
		 /* 09. VENOBOX JS */
            $('.venobox').venobox({
                numeratio: true,
                titleattr: 'data-title',
                titlePosition: 'top',
                spinner: 'wandering-cubes',
                spinColor: '#007bff'
            });
			
	
        $(document).ready(function() {
            $('.cc_ps_top_slider_section .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: false,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })

	
			/*----------------------------
			isotope active
			------------------------------ */     
				var $grid = $('.grid').isotope({
				itemSelector: '.grid-item',
				stagger: 30
			  });

			  $('.filter-demo').on( 'click', '.button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			  });

			  // change is-checked class on buttons

			  $('.filter').each( function( i, buttonGroup ) {
				var $buttonGroup = $( buttonGroup );
				$buttonGroup.on( 'click', '.button', function() {
				  $buttonGroup.find('.is-checked').removeClass('is-checked');
				  $( this ).addClass('is-checked');
				});
			  });
			  
			  
			  	
		/*section-2 slider js */	
		$(document).ready(function() {
        $('.section2_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:false,
				smartSpeed: 1200,
                responsiveClass: true,
				navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: true
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
        })
	})
	
		//*-----------------------owl caouresel Team---------------------------*//	
		$(document).ready(function() {
              $('.team_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
				smartSpeed: 1200,
                margin: 10,
                                autoplay:false,
                responsiveClass: true,
                                navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 2,
                    nav: true
                  },
                  1000: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 30
                  }
                }
              })
            });		
			
			//*-----------------------owl caouresel Team---------------------------*//	
		$(document).ready(function() {
              $('.product_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
				smartSpeed: 1200,
                margin: 10,
                                autoplay:false,
                responsiveClass: true,
                                navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 2,
                    nav: true
                  },
                  1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 30
                  }
                }
              })
            });
			
		$(document).ready(function() {
            $('.hs_blog_box1_img_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
			
		/*******----------about us slider-----***********/
			$(document).ready(function() {
              $('.aboutus_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
				smartSpeed: 1200,
                margin: 10,
                                autoplay:false,
                responsiveClass: true,
                                navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: true
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 30
                  }
                }
              })
            });
		
		$(document).ready(function() {
            $('.pn_slider_wraper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
					500: {
                        items: 2,
                        nav: true
                    },
                    700: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 5,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
		
		
	
	  /********************************************
    04. jQuery SlickNav / Onepage Mobile menu
    ********************************************/
    $('.mainmenu').slicknav({
        label: '',
        duration: 700,
        easingOpen: "easeOutBounce",
        prependTo: '#mobileMenu',
        closeOnClick: true
    });

    /********************************************
    05. jQuery MeanMenu / Multipage Mobile menu
    ********************************************/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "999",
        meanMenuContainer: ".mobile-menu"
    });
	
	
	// Menu js for Position fixed
				$(window).scroll(function(){
					var window_top = $(window).scrollTop() + 1; 
					if (window_top > 30) {
						$('.transparent-menu').addClass('menu_fixed animated fadeIn');
					} else {
						$('.transparent-menu').removeClass('menu_fixed animated fadeIn');
					}
				});
				
		
/*----------------------------
9. list grid view active
------------------------------ */ 
	$('#listview').on('click',function(event){
		event.preventDefault();
		$('.products').addClass('list-item');
	});
    $('#gridview').on('click',function(event){
    	event.preventDefault();
    	$('.products').removeClass('list-item');
    	$('.products').addClass('grid-item'); 
    });		
	
	
	
			// Contact Form Submition
	function checkRequire(formId , targetResp){
		targetResp.html('');
		var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
		var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
		var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
		var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
		var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
		var check = 0;
		$('#er_msg').remove();
		var target = (typeof formId == 'object')? $(formId):$('#'+formId);
		target.find('input , textarea , select').each(function(){
			if($(this).hasClass('require')){
				if($(this).val().trim() == ''){
					check = 1;
					$(this).focus();
					targetResp.html('You missed out some fields.');
					$(this).addClass('error');
					return false;
				}else{
					$(this).removeClass('error');
				}
			}
			if($(this).val().trim() != ''){
				var valid = $(this).attr('data-valid');
				if(typeof valid != 'undefined'){
					if(!eval(valid).test($(this).val().trim())){
						$(this).addClass('error');
						$(this).focus();
						check = 1;
						targetResp.html($(this).attr('data-error'));
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
			}
		});
		return check;
	}
	$(".submitForm").on("click", function() {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var check = checkRequire(targetForm , errroTarget);
		if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			formDetail.append('form_type' , _this.attr('form-type'));
			$.ajax({
				method : 'post',
				url : 'ajax.php',
				data:formDetail,
				cache:false,
				contentType: false,
				processData: false
			}).done(function(resp){
				if(resp == 1){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
				}
			});
		}
	});
	
	
	
			
    });

})(jQuery);
