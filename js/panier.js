document.addEventListener('DOMContentLoaded', function() {
  const boutonViderPanier = document.getElementById('paniervide');
  const panier = document.querySelector('.box');
  const panierVide = document.getElementById('panierVide');
  const boutonCroix1 = document.getElementById('croix1');
  const boutonCroix2 = document.getElementById('croix2');

  boutonViderPanier.addEventListener('click', function() {
    panier.style.display = 'none';
    panierVide.style.display = 'block';
  });

  boutonCroix1.addEventListener('click', function() {
    const elementsL1 = document.querySelectorAll('.l1');
    elementsL1.forEach(function(element) {
      element.style.display = 'none';
    });
    checkIfAllElementsHidden(); // Vérifie si tous les éléments sont masqués
  });

  boutonCroix2.addEventListener('click', function() {
    const elementsL2 = document.querySelectorAll('.l2');
    elementsL2.forEach(function(element) {
      element.style.display = 'none';
    });
    checkIfAllElementsHidden(); // Vérifie si tous les éléments sont masqués
  });

  function checkIfAllElementsHidden() {
    const elementsL1 = document.querySelectorAll('.l1');
    const elementsL2 = document.querySelectorAll('.l2');

    // Vérifie si tous les éléments L1 et L2 sont masqués
    const allHidden = Array.from(elementsL1).every(element => element.style.display === 'none') &&
                     Array.from(elementsL2).every(element => element.style.display === 'none');

    if (allHidden) {
      panier.style.display = 'none';
      panierVide.style.display = 'block';
    }
  }
});
