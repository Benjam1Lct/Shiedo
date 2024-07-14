// Variable pour suivre l'état de l'overflow
var isOverflowHidden = false;
document.body.style.overflowX = 'hidden';

// Écoutez le clic sur le bouton "menu"
document.querySelector('.menu').addEventListener('click', function() {
  // Ajoutez "overflow: hidden" au body
  document.body.style.overflow = 'hidden';
  isOverflowHidden = true;
});

// Écoutez le clic sur le bouton "fas" dans "menu_overlay_top"
document.querySelector('.menu_overlay_top img.fas').addEventListener('click', function() {
  // Supprimez "overflow: hidden" du body si l'état est true
  if (isOverflowHidden) {
    document.body.style.overflowX = 'hidden';
    isOverflowHidden = false;
  }
});
