alert("Чек 0");
const advantagesCheckBox = document.getElementById("advantages-show");
alert(advantagesCheckBox);
var advantagesPanel = document.querySelector('.advantages-panel');

advantagesCheckBox.addEventListener('change', function () {
    if (this.checked) {
        //advantagesPanel.classList.add('advantages-panel_open');
        alert("Чек 1");
    }
    else {
       // advantagesPanel.classList.remove('advantages-panel_open');
       alert("Чек 0");
    }
});