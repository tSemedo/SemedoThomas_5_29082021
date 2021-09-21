let produitAddLocalStorage = JSON.parse(localStorage.getItem("products"));
console.log(produitAddLocalStorage);
// const products = produitAddLocalStorage;

// selection du dom 
const positionElement_panier = document.querySelector(".il_panier");

    for (let k in produitAddLocalStorage) {

        // if (produitAddLocalStorage[k].quantite > 1) {

        //     var quantiterAmultiplier = [];
        //     quantiterAmultiplier = produitAddLocalStorage[k].quantite; 
        //         console.log(quantiterAmultiplier);
        //     }
        const structureProduits_page = `
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${produitAddLocalStorage[k].name}</div>
                   <div class="contenaireChoixPanier">
                 Couleur sélectionnée : ${produitAddLocalStorage[k].colors.slice(7,-1)}
                Quantité séléctionnée : ${produitAddLocalStorage[k].quantite}
                </div>
                </div>
               
            <span class="badge bg-primary rounded-pill ">${produitAddLocalStorage[k].price/100},00 EUR</span>
        </li>
        `;
    positionElement_panier.innerHTML += structureProduits_page;

}
// Mise en Place  calcul total panier
    let prixTotalCalcul = []; 

    for (let m = 0; m <produitAddLocalStorage.length; m++ ) {
        let prixProduitsDansPanier = produitAddLocalStorage[m].price;

        prixTotalCalcul.push(prixProduitsDansPanier);
        // console.log(prixTotalCalcul);
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue; 
    const prixTotal = prixTotalCalcul.reduce(reducer,0);

 const affichagePrixTotal  = `
  TOTAL PRODUITS TTC :<span class="badge bg-primary rounded-pill priceProduit_panierTotal">${prixTotal/100},00 EUR</span>`;
// injection dans le dom
 const positionElement_prix = document.querySelector(".card-title");
 positionElement_prix.innerHTML = affichagePrixTotal; 
 

// -------------------------ADD EVENT LISTENER qui fait apparaitre le formulaire--------------

    const cliskk = document.querySelector("#boutonGoToFisrtname")

    const positionFormulaire = document.querySelector(".formPosition")

    cliskk.addEventListener("click", (event) =>{        

        const structureFormulaire = `
    <form class="row g-3 needs-validation formulaire" action="#" novalidate>
            
    <div class="col-md-4">
      <label for="prenom" class="form-label">Prénom</label>
      <input type="text" class="form-control" id="prenom" name="prenom" placeholder="Thomas" required>
      <div class="invalid-feedback">
        Oups, vous avez fait une erreur!
      </div>
    </div>
    
    <div class="col-md-4">
      <label for="nom" class="form-label">Nom</label>
      <input type="text" class="form-control" id="nom" name="nom" placeholder="Semedo" required>
        <div class="invalid-feedback">
        Oups, vous avez fait une erreur!
      </div>
    </div>
    
    <div class="col-md-4">
      <label for="email" class="form-label">E-Mail</label>
      <div class="input-group has-validation">
        <span class="input-group-text" id="inputGroupPrepend">@</span>
        <input type="text" class="form-control" id="email" name="email" aria-describedby="inputGroupPrepend" required>
        <div class="invalid-feedback">
          Saisissez une adresse mail valide !
        </div>
      </div>
    </div>
        <div class="col-md-3">
        <label for="numeroDeRue" class="form-label">Numéro de Rue</label>
        <input type="number" class="form-control" id="numeroDeRue" name="numeroDeRue" required>
        <div class="invalid-feedback">
            Vous ne pouvez ajouter uniquement des chiffres !
        </div>
        </div>           
    <div class="col-md-3">
      <label for="nomDeRue" class="form-label">Nom de Rue</label>
      <input type="text" class="form-control" id="nomDeRue" name="nomDeRue" required>
      <div class="invalid-feedback">
        Ajoutez seulement le nom de votre rue!
      </div>
    </div>
   
    <div class="col-md-3">
      <label for="ville" class="form-label">Ville</label>
      <input type="text" class="form-control" id="ville" name="ville" required>
      <div class="invalid-feedback">
        Ajoutez seulement le nom de votre rue!
      </div>
    </div>

    <div class="col-md-3">
      <label for="pays" class="form-label">Pays</label>
      <select class="form-select" id="pays" name="pays" required>
        <option>France</option>
        <option>Belgique</option>
        <option>Allemagne</option>
        <option>Suisse</option>
        <option>Autres Pays, ..</option>
      </select>
      <div class="invalid-feedback">
        Sélectionner un Pays présent dans la liste !
      </div>
    </div>
   

    
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
        <label class="form-check-label" for="invalidCheck">
          Agree to terms and conditions
        </label>
        <div class="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>
    </div>
   
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form>
    `
    positionFormulaire.innerHTML = structureFormulaire;
    // Validator forms bootsrap

    var forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call( forms).forEach( function( form)
    {
        form.addEventListener("submit", function( event)
        {
            if (!form.checkValidity())
            { 
                // recuper les valeurs du formulaires 
                let productsAcheter = [];              
                

                for ( let y=0; y < produitAddLocalStorage.length ; y++) {

                    productsAcheter.push(produitAddLocalStorage[y]._id);
                }
                console.log(productsAcheter);

                let inputName = document.querySelector("#prenom");
                let inputLastName = document.querySelector("#nom");
                let inputAddress = document.querySelector("#nomDeRue");
                let inputCity = document.querySelector("#ville");
                let inputEmail = document.querySelector("#email");

                const order = {
                    contact: {
                    firstName: inputName.value,
                    lastName: inputLastName.value,
                    city: inputCity.value,
                    address: inputAddress.value,                    
                    email: inputEmail.value
                    },
                    products: productsAcheter,
                    };

                console.log("order");
                console.log(order);
                // localStorage.setItem("contact", JSON.stringify(order))

                // envoyer objet "formulaireValues" dans local storage
                
                    const options = { 
                        method: "POST",
                        body: JSON.stringify(order), 
                        headers: {  "Content-Type": "application/json"  },
                    }
                    
                    fetch("http://localhost:3000/api/teddies/order",options)

                    .then((response) => response.json())
                    .then((data) => { 
                        localStorage.clear();
                        localStorage.setItem("orderId", data.orderId);
                        localStorage.setItem("totalPrix", prixTotal);
                        document.location.href = "confirmation.html";
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                      });

                event.preventDefault( );
                // event.stopPropagation( );
                
            }
            // form.classList.add( "was-validated");
            console.log("");
            }, false );
    });



    });
    



//  regex

//  envoi dans local storage 

// fetch post 