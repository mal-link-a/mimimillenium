
var advantagesCheckBox = document.querySelector(".advantages-button__checkbox");
var advantagesPanel = document.querySelector(".advantages-panel");
var advantagesCheckBoxImg = document.querySelector(".img_arrow");
advantagesCheckBox.addEventListener('change', function () {
    if (this.checked) {
        advantagesPanel.classList.add('advantages-panel_open');
        advantagesCheckBoxImg.classList.add('img_arrow_opened');
    }
    else {
       advantagesPanel.classList.remove('advantages-panel_open');
       advantagesCheckBoxImg.classList.remove('img_arrow_opened');
    }
});
