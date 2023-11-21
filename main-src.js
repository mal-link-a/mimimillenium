//Блок 2, по нажатию на кнопку меняем ширину
var advantagesCheckBox = document.querySelector('.block2__button__checkbox');
var advantagesPanel = document.querySelector('.block2__panel');
var advantagesCheckBoxImg = document.querySelector('.img_arrow');
// ~~~~ Выпадающее меню на бутерброд  ~~~~~  ~~~~~  ~~~~~  ~~~~~  ~~~~~
var headerDropdown = document.querySelector('.page-header__dropdown__button__visual');
var headerContent = document.querySelector('.dropdown-menu-mobile');
var headerDropdownBack = document.querySelector('.dropdown-menu-mobile__background');
var rectangleAnimated = document.querySelector('.page-header__dropdown__button__visual_rectangle3');
// ~~~~ Поп-ап ~~~~~  ~~~~~  ~~~~~  ~~~~~  ~~~~~  ~~~~~  ~~~~~  ~~~~~ 
var btnOpenPopup = document.querySelectorAll('cost-link');
var popup_window = document.querySelector('.popup-call');
var popup_background = document.querySelector(".popup-background_visual");

//Блок 2
advantagesCheckBox.addEventListener('change', function () {
    if (this.checked) {
        advantagesPanel.classList.add('block2__panel_open');
        advantagesCheckBoxImg.classList.add('img_arrow_opened');
    }
    else {
        advantagesPanel.classList.remove('block2__panel_open');
        advantagesCheckBoxImg.classList.remove('img_arrow_opened');
    }
});


// Оглавлелие сайта, открываем меню в мобильной/планшетной версии сайта
function headerDropdownOpen() 
{
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vw';
    headerContent.classList.remove('popup-hidden');
    headerDropdownBack.classList.remove('popup-hidden');
    rectangleAnimated.classList.add('page-header__dropdown__button__visual_rectangle3_active');

}
function headerDropdownClose() //Функция закрытия выпадающего меню на бутерброд
{
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    headerContent.classList.add('popup-hidden');
    headerDropdownBack.classList.add('popup-hidden');
    rectangleAnimated.classList.remove('page-header__dropdown__button__visual_rectangle3_active');
}
function popupOpen()
{
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vw";    
    popup_window.classList.remove("popup-hidden");
    popup_background.classList.remove("popup-hidden");
}
function popupClose()
{
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    popup_window.classList.add('popup-hidden');
    popup_background.classList.add('popup-hidden');       

}

headerDropdown.addEventListener('click', function () {   
    if (headerContent.classList.contains('popup-hidden')) {        
        headerDropdownOpen();        
    }
    else {
        headerDropdownClose();
    }
})
//поп-ап 
 popup_background.addEventListener('click', function(evt) { // Закрытие окна попапа при нажатии на бэкграунд
    popupClose();
 } )

//Покажем, что умеем в делегирование, хотя именно тут оно мне не нравится

var head = document.querySelector('.page-header');
head.addEventListener('click', function(evt) {
    let target = evt.target;  
    if (target.classList.contains('ichy-block1-button')) //Откроем попап
    {       
        //Если выпадающее меню открыто, закрываем его
        if (!headerContent.classList.contains('popup-hidden'))  
        {
            headerDropdownClose();
        }        
        popupOpen();
    }
    //Закрытие бокового меню на нажатие х или ссылки
    else if (target.classList.contains('ichy-block1-button2') ||
      target.classList.contains('popup-exit-btn__container') ||
      target.classList.contains('popup-exit-btn__container_visual') ||
      target.classList.contains('dropdown-menu-mobile__background'))  
    {        
        headerDropdownClose();
    } 
})
var footerBtn = document.querySelector('.footer__btn');

footerBtn.addEventListener('click', function(){

    popupOpen();
})
var popupX = document.querySelector('.popup-call__exit-btn-x');

popupX.addEventListener('click', function() {
    popupClose();
})
