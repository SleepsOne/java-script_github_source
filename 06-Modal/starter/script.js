'use strict';


// query selector to the objects we need
const btnsOpenModal = document.querySelectorAll('.show-modal');
// hidden
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
///overlay
const overlay =document.querySelector('.overlay')

const openModal = function(){
  // console.log("clicked");    
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

};
for (let i = 0; i < btnsOpenModal.length; i++){
  // console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
}
const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//close button
btnCloseModal.addEventListener('click', closeModal);
// click outside of the modal closes it
overlay.addEventListener('click', closeModal);
//press esc to exit
document.addEventListener('keydown',function(e){
  // console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')){
      closeModal();
  }
});




