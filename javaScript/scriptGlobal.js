main();

function main() {
    compteurDeProduitsInPanier();
    
    const testSimpleWordCount = () => {
    const testNumber = 6 ;
        if (compteurDeProduitsInPanier(testNumber) !== 6) {
            console.error('Simple, compteurDeProduit a fail!');
        }
    }
}

function compteurDeProduitsInPanier() {  

        let produitAddLocalStorageNum = JSON.parse(localStorage.getItem("products"));
        console.log(produitAddLocalStorageNum);
        const nombreProduitAddPanier = produitAddLocalStorageNum.length ;
        const positionNumbreProduit = document.querySelector("#numbrePanier") 
        positionNumbreProduit.classList.remove("numberVisible");
        positionNumbreProduit.innerHTML = nombreProduitAddPanier
}






