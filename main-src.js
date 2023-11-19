//Блок 2, по нажатию на кнопку меняем ширину
var advantagesCheckBox = document.querySelector('.block2__button__checkbox');
var advantagesPanel = document.querySelector('.block2__panel');
var advantagesCheckBoxImg = document.querySelector('.img_arrow');
// ~~~~ Выпадающее меню на бутерброд  ~~~~~  ~~~~~  ~~~~~  ~~~~~  ~~~~~
var headerDropdown = document.querySelector('.page-header__dropdown__button__visual');
var headerContent = document.querySelector('.dropdown-menu-mobile');
var headerDropdownBack = document.querySelector('.dropdown-menu-mobile__background');
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
function headerDropdownClose() //Функция закрытия выпадающего меню на бутерброд
{
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    headerContent.classList.add('popup-hidden');
    headerDropdownBack.classList.add('popup-hidden');
}

headerDropdown.addEventListener('click', function () {   
    if (headerContent.classList.contains('popup-hidden')) {        
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vw';
        headerContent.classList.remove('popup-hidden');
        headerDropdownBack.classList.remove('popup-hidden');
    }
    else {
        headerDropdownClose();
    }
})
headerDropdownBack.addEventListener('click', function () {  //Скроем меню, если клик по серой области в планшетной версии
    headerDropdownClose();
})

//поп-ап 
 popup_background.addEventListener('click', function(evt) { // Открытие окна попапа
     document.body.style.overflow = 'auto';
     document.body.style.height = 'auto';
     popup_window.classList.add('popup-hidden');
     popup_background.classList.add('popup-hidden');
 } )

//Покажем, что умеем в делегирование, хотя именно тут оно мне не нравится

var head = document.querySelector('.page-header');
head.addEventListener('click', function(evt) {
    let target = evt.target;  
    if (target.classList.contains('ichy-block1-button'))
    {       
        //Если делаем это, когда выпадающее меню открыто, закрываем меню
        if (!headerContent.classList.contains('popup-hidden'))
        {
            headerDropdownClose();
        }
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vw";    
        popup_window.classList.remove("popup-hidden");
        popup_background.classList.remove("popup-hidden");
    }
    else if (target.classList.contains('ichy-block1-button2'))
    {
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
        headerDropdownClose();
    }
    
})