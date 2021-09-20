let produitAddLocalStorageNum = JSON.parse(localStorage.getItem("products"));

const nombreProduitAddPanier = produitAddLocalStorageNum.length
const positionNumbreProduit = document.querySelector("#numbrePanier")

// if (nombreProduitAddPanier >= 0){   
positionNumbreProduit.classList.remove("numberVisible");
positionNumbreProduit.innerHTML = nombreProduitAddPanier
// }
// else { 
    





