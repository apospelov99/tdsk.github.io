$(function() {

  //timeline
  timelineWork();
  function timelineWork() {
    $('.calendar__list').on('click', function(){
      //get data from timeline calendar and show active Date
      $('.calendar__list').removeClass('calendar__list-active');
      $(this).addClass('calendar__list-active');
      
      var timelineDate = $(this).data('date');
      //get data from timeline calendar and show active Date END
      
      //change timeline "text" - events
      $('.events__item').removeClass('events__item-active');
      $('.events__item[data-date="'+ timelineDate +'"]').addClass('events__item-active');
      //change timeline "text" - events END

      //change timeline "period" 
      var periodStart = $('.calendar__list-active').data('date');
      var periodEnd = $('.calendar__list[data-date="'+ periodStart +'"]').closest($('.owl-item')).next().find($('.calendar__date')).text();
      $('.timeline__period .period_end').text(periodEnd);
      $('.timeline__period .period_start').text(periodStart);
      //change timeline "period" END 
    });
    
    //timeline input 320
    $('.listoption-timeline').on('click', function(){
      //get data from input
      var timelineMobileStart = $(this).find('.listoption__data').find('.timeline__date-start').text();
      var timelineMobileEnd = $(this).find('.listoption__data').find('.timeline__date-end').text();
      //get data from input END
      
      //change timeline "text" - events
      $('.events__item').removeClass('events__item-active');
      $('.events__item[data-date="'+ timelineMobileStart +'"]').addClass('events__item-active');
      //change timeline "text" - events END
      
      //change timeline "period" 
      $('.timeline__period .period_start').text(timelineMobileStart);
      $('.timeline__period .period_end').text(timelineMobileEnd);
      //change timeline "period" END 
      
    });
    //timeline input 320 END
    
  };
  //timeline END

  //header tabs
  /*
  $('.tabs__link').on('click', function(){
    $('.tabs__link').removeClass('tabs__link-active');
    $(this).addClass('tabs__link-active');
  });
  $('.tabs__link').on('click', function(){
    $('.tabs__link').removeClass('active');
    $(this).addClass('active');
  });
  */
  //header tabs END

  //map menu link collapse
  hideFlter(".map__btncity");
  btnCollapse(".map__btncity");
  //map menu link collapse END

  //sidebar option tabs
  $('.sidebar .sliderange-sidebar').hide();
  //$('.sidebar .sliderswitch').hide();
  $(".sidebar .option__link").on("click", function() {
    $(this).toggleClass('option__link-active');
    //$(this).next(['.listoption','.sliderange']).slideToggle(); //toggle with transition
    $(this).next().slideToggle(); //toggle with transition
  });
  //sidebar option tabs END
  //searchpanel option tabs
  $(".searchpanel .option__link").on("click", function() {
    $(this).toggleClass('option__link-active');
    //$(this).next(['.listoption','.sliderange']).slideToggle(); //toggle with transition
    $(this).next().slideToggle(); //toggle with transition
  });
  //searchpanel option tabs END
  
  /*
  $(".sidebar .option__link").on("click", function() {
    $(this).toggleClass('option__link-active');
    $(this).next('.sliderange').slideToggle(); //toggle with transition
  });
  */
  //sidebar option tabs END
  
  
  //sliderSwitch
  $('.sliderswitch .sliderswitch__btn').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).closest('.sliderswitch').find($('.sliderswitch__text-first')).addClass('sliderswitch__text-active');
      $(this).closest('.sliderswitch').find($('.sliderswitch__text-second')).removeClass('sliderswitch__text-active');
    } else {
      $(this).closest('.sliderswitch').find($('.sliderswitch__text-first')).removeClass('sliderswitch__text-active');
      $(this).closest('.sliderswitch').find($('.sliderswitch__text-second')).addClass('sliderswitch__text-active');
    }
  });
  //sliderSwitch END
  //sliderswitch-horizontal
  $('.sliderswitch-horizontal .sliderswitch__btn').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).closest('.sliderswitch').find($('.sliderswitch__text-first')).addClass('sliderswitch__text-activehorizontal');
      $(this).closest('.sliderswitch').find($('.sliderswitch__text-second')).removeClass('sliderswitch__text-activehorizontal');
    } else {
      $(this).closest('.sliderswitch').find($('.sliderswitch__text-first')).removeClass('sliderswitch__text-activehorizontal');
      $(this).closest('.sliderswitch').find($('.sliderswitch__text-second')).addClass('sliderswitch__text-activehorizontal');
    }
  });
  //sliderswitch-horizontal END
  
  //mortgage tabs
  $('.mortgage__title').on("click", function() {
    $(this).toggleClass('mortgage__title-active');
    $(this).next('.mortgage__tabsbody').slideToggle( "slow" ); //toggle with transition
	});
  //mortgage tabs END
  // mortgage faq
  $('.faq__topic').on("click", function() {
    $(this).toggleClass('faq__topic-active');
    $(this).next('.faq__answer').slideToggle( "slow" ); //toggle with transition
  });
  // mortgage faq END

  //matchHeight
  $(".privilege .privilege__title").matchHeight();
  $(".privilege .privilege__text").matchHeight();
  $(".workforyou .workforyou__title").matchHeight();
  $(".case-white .case__top").matchHeight();
  $(".case-white .case__title").matchHeight();
  $(".case-white .case__questions").matchHeight();
  $(".case-white .case__answer").matchHeight();
  //matchHeight END

  //functions
  function btnCollapse(button){ 
    var activeButton = button;
    $(activeButton).on("click", function() {      
      $(activeButton).removeClass(activeButton.slice(1) + '-active');
      var productFilter = $(this).attr('data-filter');
      $('.filter').not('.' + productFilter).hide('3000');
      $('.filter').filter('.' + productFilter).show('1000');
      $(this).addClass(activeButton.slice(1) + '-active');  
    });
  };
  
  function hideFlter(button) {
    $('.filter').not('.' + $(button + '-active').attr('data-filter')).hide('3000');
  }
  //functions component END

  //listoption
  $('.listoption__item').on("click", function() {
    //var testListData = $(this).text();
    //$(this).closest('.listoption').find($('.listoption__data')).text(testListData);
    var testListData = $(this).html();
    $(this).closest('.listoption').find($('.listoption__data')).html(testListData);
  });
  //listoption component END


  //slider promo 
  $('.promo').owlCarousel({
    nav: false,
    dots: true,
    items: 1,
    dotClass: 'control__dots control__dots-black',
    dotsClass: 'promo__control',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    //navContainer: '.testcontrol',
    //dotsContainer: '.testdots', //правильный класс !!! задания контейнера с точками
    //navText: [$('.testcontrol__left'),$('.testcontrol__right')]
  });
  //slider promo END
  //slider gkhcard flatplan
  var sliderFlatplanSetting = 
  {
    nav: false,
    dots: true,
    items: 1,
    dotClass: 'control__dots control__dots-graphite',
    dotsClass: 'flatplan__control',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    //navContainer: '.testcontrol',
    //dotsContainer: '.testdots', //правильный класс !!! задания контейнера с точками
    //navText: [$('.testcontrol__left'),$('.testcontrol__right')]
  }
  var sliderGkhcardFlarplan = $('.flatplan__gallery');  
  //sliderGkhcardFlarplan.owlCarousel(sliderFlatplanSetting);
  //slider gkhcard flatplan END
  
  //slider index workforyou__gallery
  var sliderWorkforyouSetting = 
  {
    nav: false,
    dots: true,
    items: 2,
    dotClass: 'control__dots control__dots-graphite',
    dotsClass: 'workforyou__control',
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 30,
    autoplayHoverPause: true,
    loop: true,
    responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1600:{
          items:2
      }
    },
    //navContainer: '.testcontrol',
    //dotsContainer: '.testdots', //правильный класс !!! задания контейнера с точками
    //navText: [$('.testcontrol__left'),$('.testcontrol__right')]
  }
  var sliderIndexWorkforyou = $('.workforyou__gallery');  
  //sliderGkhcardFlarplan.owlCarousel(sliderFlatplanSetting);
  //slider index workforyou__gallery END



  //contacts__gallery-test
  $('.contacts__gallery-test').owlCarousel({
    nav: false,
    dots: true,
    items: 4,
    //responsiveClass:true,
    //autoplay: true,
    //autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    //navContainer: '.testcontrol',
    //dotsContainer: '.testdots', //правильный класс !!! задания контейнера с точками
    //navText: [$('.testcontrol__left'),$('.testcontrol__right')]
  });
  //contacts__gallery-test END
  //slider contacts contacts__gallery-jurist
  $('.contacts__gallery-jurist').owlCarousel({
    nav: false,
    dots: false,
    items: 4,
    //responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1600:{
          items:4
      }
    },
  });
  //slider contacts contacts__gallery-jurist END

  //index main slider
  
  var sliderIndexMain = $('.mainslider__slider');
  /*
  sliderIndexMain.owlCarousel({
    dots: true,
    items: 1,
    responsiveClass:true,
    //autoplay: true,
    //autoplayTimeout: 3000,
    //autoplayHoverPause: true,
    loop: true,
    smartSpeed: 750,
    dotClass: 'mainslider__link',
    dotsContainer: '.mainslider__control',
  });
  /*
  sliderIndexMain.owlCarousel({
    dots: true,
    items: 1,
    responsiveClass:true,
    //autoplay: true,
    //autoplayTimeout: 3000,
    //autoplayHoverPause: true,
    loop: true,
    smartSpeed: 750,
    //animateIn: 'slideInUp',
    //dotClass: 'tabs__link',
    //dotsContainer: '.tabs',
    dotClass: 'control__dots control__dots-yellow',
    //dotsContainer: '.mainslider__zdots',
    responsive:{
      0:{
        items:1,
        dotClass: 'control__dots control__dots-graphite',
        dotsClass: 'mainslider__newdots',
      },
      768:{
        items:1,
        dotClass: 'control__dots control__dots-yellow',
        dotsClass: 'mainslider__newdots',
        //dotsContainer: '.mainslider__zdots',
      },
      1024:{
        item: 1,
        dotClass: 'mainslider__link',
        dotsContainer: '.mainslider__control',
      },
    },
  });
  */
  
  var sliderSettingIndexMainDesktop = {
    dots: true,
    items: 1,
    loop: true,
    smartSpeed: 750,
    dotClass: 'mainslider__link',
    dotsContainer: '.mainslider__control',
  }
  
  var sliderSettingIndexMainTablet = {
    dots: true,
    items: 1,
    loop: true,
    smartSpeed: 750,
    dotClass: 'control__dots control__dots-yellow',
    dotsClass: 'mainslider__zdots',
    //dotsContainer: '.mainslider__zdots',
  }
  var sliderSettingIndexMainPhone = {
    dots: true,
    items: 1,
    loop: true,
    smartSpeed: 750,
    dotClass: 'control__dots control__dots-graphite',
    dotsClass: 'mainslider__zdots-phone',
    //dotsContainer: '.mainslider__zdots-phone',
  }


  /*
  $('.actionslider__left').click(function() {
    sliderIndexAction.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.actionslider__right').click(function() {
    sliderIndexAction.trigger('prev.owl.carousel');
  })
  */
  //index main slider END

  //index action slider
  
  var sliderIndexAction = $('.actionslider');
  sliderIndexAction.owlCarousel({
    dots: true,
    items: 1,
    responsiveClass:true,
    //autoplay: true,
    //autoplayTimeout: 3000,
    //autoplayHoverPause: true,
    loop: true,
    dotClass: 'control__dots control__dots-yellow',
    dotsContainer: '.actionslider__dots',
  });
  $('.actionslider__right').click(function() {
    sliderIndexAction.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.actionslider__left').click(function() {
    sliderIndexAction.trigger('prev.owl.carousel');
  })
  //index action slider END

  //slider contacts contacts__gallery-jurist
  var sliderContactsGalleryCompany = $('.contacts__gallery-company');
  sliderContactsGalleryCompany.owlCarousel({
    //nav: true,
    //dots: false,
    dots: true,
    items: 3,
    responsiveClass:true,
    //autoplay: true,
    //autoplayTimeout: 3000,
    //autoplayHoverPause: true,
    loop: true,
    dotClass: 'control__dots control__dots-black', //здесь задаем без точки просто именна классов !!!
    dotsContainer: '.companyslider__dots', //задаем через селектор с точкой !!!
    //dotsClass: 'companyslider__dots',
    //dotClass: 'companyslider__dot',
    responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1600:{
          items:3
      }
    },
  });
  // Go to the next item
  $('.companyslider__right').click(function() {
    sliderContactsGalleryCompany.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.companyslider__left').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      sliderContactsGalleryCompany.trigger('prev.owl.carousel');
  })
  //slider contacts contacts__gallery-jurist END

  //slider gkhcard slidergkhcard
  var sliderGkhcardSlidergkhcard = $('.slidergkhcard__slider');
  sliderGkhcardSlidergkhcard.owlCarousel({
    dots: true,
    items: 1,
    responsiveClass:true,
    //autoplay: true,
    //autoplayTimeout: 3000,
    //autoplayHoverPause: true,
    loop: true,
    dotClass: 'control__dots control__dots-yellowwhite',
    dotsContainer: '.slidergkhcard__dots',
  });
  // Go to the next item
  $('.slidergkhcard__right').click(function() {
    sliderGkhcardSlidergkhcard.trigger('next.owl.carousel');
  })  
  // Go to the previous item
  $('.slidergkhcard__left').click(function() {
    sliderGkhcardSlidergkhcard.trigger('prev.owl.carousel');
  })
  //slider gkhcard slidergkhcard END

  //slider gkhcard videoreview__videoslider
  var sliderGkhcardvideoslider = $('.videoreview__videoslider');
  sliderGkhcardvideoslider.owlCarousel({
    dots: true,
    items: 1,
    //autoplay: true,
    //autoplayTimeout: 3000,
    //autoplayHoverPause: true,
    loop: true,
    dotClass: 'control__dots control__dots-graphite',
    dotsContainer: '.videoreview__dots',
  });
  // Go to the next item
  
  $('.videoreview__right').click(function() {
    sliderGkhcardvideoslider.trigger('next.owl.carousel');
  })
    
  // Go to the previous item
  
  $('.videoreview__left').click(function() {
    sliderGkhcardvideoslider.trigger('prev.owl.carousel');
  })
  //slider gkhcard videoreview__videoslider END
  

  //timeline calendar
  var timeline = $('.calendar');
  timeline.owlCarousel({
    //nav: true,
    dots: false,
    items: 5,
    stagePadding: 40,
    //navText: [$('.timeline_control-left'),$('.timeline_control-right')],
    responsiveClass:true,
    //autoplay: true,
    //autoplayTimeout: 3000,
    //autoplayHoverPause: true,
    loop: false,
  });
  $('.btn-ctrlright').click(function() {
    timeline.trigger('next.owl.carousel');
  })

  // Go to the next item
  // Go to the previous item
  $('.btn-ctrlleft').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      timeline.trigger('prev.owl.carousel', [300]);
  })
  //timeline calendar END

  //media screen JS
  var mortgageMaintitle = $('.mortgage .mortgage__maintitle');
  var mortgageFeedback = $('.mortgage .feedback-mortgage');
  enquire
  .register("screen and (min-width: 1600px)", {
    match : function() {
      $('.mortgage .mortgage__block').prepend(mortgageMaintitle);
      $('.mortgage .mortgage__rightsidebar').prepend(mortgageFeedback);
      console.log('1920');
      //index main slider
      //index main slider END
      //sliderIndexMain.trigger('destroy.owl.carousel');
      sliderIndexMain.trigger('destroy.owl.carousel');
      sliderIndexMain.owlCarousel(sliderSettingIndexMainDesktop);
      sliderIndexMain.trigger('refresh.owl.carousel');
      //index main slider END
      //slider index workforyou__gallery destroy
      sliderIndexWorkforyou.trigger('destroy.owl.carousel');
      //slider index workforyou__gallery destroy END
      
    },
    unmatch : function() {
    }
  })
  .register("screen and (min-width: 1024px) and (max-width: 1599px)", {
    match : function() {
      console.log('1024');
      //mortgage feedback and title move
      $('.mortgage .mortgage__body')
      .prepend(mortgageFeedback)
      .prepend(mortgageMaintitle);
      //mortgage feedback and title move END
      //slider index workforyou__gallery destroy
      sliderIndexWorkforyou.trigger('destroy.owl.carousel');
      //slider index workforyou__gallery destroy END
      //index main slider
      //index main slider END
    },
    unmatch : function() {
    }
  })
  .register("screen and (min-width: 768px) and (max-width: 1023px)", {
    match : function() {
      console.log('768');
      //mortgage feedback and title move
      $('.mortgage .mortgage__body')
      .prepend(mortgageFeedback)
      .prepend(mortgageMaintitle);
      //mortgage feedback and title move END
      //slider index workforyou__gallery
      sliderIndexWorkforyou.owlCarousel(sliderWorkforyouSetting);
      //slider index workforyou__gallery END
      //index main slider
      //sliderIndexMain.trigger('destroy.owl.carousel');
      sliderIndexMain.trigger('destroy.owl.carousel');
      sliderIndexMain.owlCarousel(sliderSettingIndexMainTablet);
      sliderIndexMain.trigger('refresh.owl.carousel');
      //index main slider END
      
    },
    unmatch : function() {
      //slider index workforyou__gallery OFF
      sliderIndexWorkforyou.trigger('destroy.owl.carousel');
      //slider index workforyou__gallery OFF END
    }
  })
  .register("screen and (max-width: 767px)", {
    match : function() {
      console.log('320');
      //mortgage feedback and title move
      $('.mortgage .mortgage__body')
      .prepend(mortgageFeedback)
      .prepend(mortgageMaintitle);
      //mortgage feedback and title move END
      //questions case active 320
      $('.questions__gallery .case-white').on('click', function(){
        console.log('wow');
        $('.questions__gallery .case-white').addClass('case-noactive');
        $(this).removeClass('case-noactive');
      });
      //questions case active 320 END
      //slider gkhcard flatplan
      sliderGkhcardFlarplan.owlCarousel(sliderFlatplanSetting);
      //slider gkhcard flatplan END
      //slider index workforyou__gallery
      sliderIndexWorkforyou.owlCarousel(sliderWorkforyouSetting);
      //slider index workforyou__gallery END
      //index main slider
      sliderIndexMain.trigger('destroy.owl.carousel');
      sliderIndexMain.owlCarousel(sliderSettingIndexMainPhone);
      sliderIndexMain.trigger('refresh.owl.carousel');
      //index main slider END
      
    },
    unmatch : function() {
      //questions case active 320
      $('.questions__gallery .case-white').off('click', function(){
      });
      //questions case active 320 END
      //$(".projects_gallery").slick('unslick');
      //slider gkhcard flatplan OFF
      sliderGkhcardFlarplan.trigger('destroy.owl.carousel');
      //slider gkhcard flatplan OFF END
      //slider index workforyou__gallery OFF
      sliderIndexWorkforyou.trigger('destroy.owl.carousel');
      //slider index workforyou__gallery OFF END
    }
  });
  //media screen JS END
  
  //questions ask questions
  $('.case .case__close').on('click', function(){
    $(this).closest($('.case')).removeClass('case-active');
  });
  //questions ask questions END

  //company sertificate FancyBox
  $(".sertificate__thumbnail").fancybox({
		selector : '[data-fancybox="sertificate"]',
		thumbs   : false,
    hash     : false,
  });
  //company sertificate FancyBox END

  //searchresults estatecard__preview FancyBox
  $(".estatecard__preview").fancybox({
		selector : '[data-fancybox="estatecard"]',
		thumbs   : false,
    hash     : false,
  });
  //searchresults estatecard__preview FancyBox END
  
  //searchresults estateflat__link FancyBox
  $(".estateflat__link").fancybox({
		selector : '[data-fancybox="estateflat"]',
		thumbs   : false,
    hash     : false,
  });
  //searchresults estateflat__link FancyBox END

  //inputmask all pages
  $('.input__inputmaskJS').mask("+7(000) 000 - 00 - 00");
  $('.input__inputmaskJS').on('click', function(){
    $(this).val("+7");
  });
  //inputmask all pages END

  //.testinputmask END
  


  //sidebar freeze
  freezeElement('.freezeJS-map','.map');
  freezeElement('.freezeJS-footer','.footer');
  
  function freezeElement(element, blocker){
    //test the element and blocker exist
    if($(element).length == 0) {
      return;
    }
    if($(blocker).length == 0) {
      return;
    }
    //test the element and blocker exist END
    
    var elementConnect = false;
    $(window).scroll(function(){
      var elementTop = $(element).offset().top;
      var elementHeight = $(element).outerHeight();
      var elementBottom = elementTop + elementHeight;
      var TopBlocker = $(blocker).offset().top;
      if (elementBottom >= TopBlocker) {
        elementConnect = true;
      } 
      if (elementConnect) {
        var elementNewTop = TopBlocker - elementHeight; 
        $(element).offset({top: elementNewTop, left: 0});
      }
      if(elementTop > $(window).scrollTop()){
        elementConnect = false;
        $(element).css('top','0'); 
      }
    }); 
  };
  //sidebar freeze END
  
});

