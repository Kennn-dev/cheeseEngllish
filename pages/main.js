$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
} else {
    document.getElementById("navbar").style.top = "-50px";
}
prevScrollpos = currentScrollPos;
}

var modalBtn = document.querySelector('.lesson-tag');
var modalPopup = document.querySelector('.popup-lesson');
var closeBtn = document.querySelector('.close-btn');
modalBtn.addEventListener('click',()=>{
    for (i = 0; i < modalPopup.length; i++) {
        // Remove the class 'active' if it exists
        modalPopup[i].classList.remove('active-modal')
    }
    modalPopup.classList.add('active-modal');
});
closeBtn.addEventListener('click',()=>{
    modalPopup.classList.remove('active-modal');
})