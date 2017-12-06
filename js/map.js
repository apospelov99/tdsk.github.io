ymaps.ready(function () {
    var myMap = new ymaps.Map('map__body', {
            center: [56.484226, 84.952302],
            zoom: 17,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
  
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
  
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '',
            balloonContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/all/index/mainlogo_1920.png',
            // Размеры метки.
            iconImageSize: [166, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [20, -38]
        }),
  
        myPlacemarkWithContent = new ymaps.Placemark([56.484226, 84.952302], {
            hintContent: 'пл. Батенькова, 2',
            balloonContent: '',
            //iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/all/icon/icon_map.png',
            // Размеры метки.
            iconImageSize: [49, 62],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
  
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
    myMap.behaviors.disable('scrollZoom');
  });