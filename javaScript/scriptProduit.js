// recuperer id dans url
const string_url_id = window.location.search ;
// Utilisation methode .slice pour elever le ? de l'id
const id_produit = string_url_id.slice(1);





// Mettre dans une const la reponse du server obtenu avec fetch et http://.../${id}
const resultatApi_Produit = fetch (`http://localhost:3000/api/teddies/${id_produit}`);

// Json()
    resultatApi_Produit.then (async(responseData_page) => {
        const response_page = await responseData_page.json();


        // selection du dom receveur
            const positionElement_page = document.querySelector("#section_page");
        // création html full auto 
            const structureProduits_page = `
            <div class="card mb-3">
            <img src="${response_page.imageUrl}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${response_page.name}</h5>
            <p class="card-text">${response_page.description}</p>    

            <form>
                <p>
                <label for="couleur">Quelle couleur vous fais craquez ?</label><br />
                    <select name="colors" id="colors" class="groupeColors">
                        
                    </select>
                </p>
            </form>

            <p class="card-text"><small class="text-muted">${response_page.price/100},00 EUR</small></p>
            <button type="button" class="btn btn-outline-success" id="btn_send">Ajoutez au Panier</button>
            </div>
            </div>
            `;
        // Injection dans html
            positionElement_page.innerHTML = structureProduits_page ;     
            

        // le formulaire FULL AUTO 
            const colorsProduits = response_page.colors ;
            let structureOptions = [];   
        

                // boucle for pour afficher chaque couleur 
                    for (let j=0;j < colorsProduits.length ; j++) {  

                        structureOptions += `
                        <option value="colors[${colorsProduits[j]}]">${response_page.colors[j]}</option>
                        ` ;         
                    }
                    // Injection dans le dom 
                    const positionElement_colors = document.querySelector('.groupeColors');
                    positionElement_colors.innerHTML = structureOptions;

                    console.log(response_page);

        // selection dans le dom pour recuperer reponse de l'utilisateur 
            const idForm = document.querySelector("#colors")    
            const sendPanier = document.querySelector("#btn_send")

    // ecoute de l'evenement au click
        sendPanier.addEventListener("click", (event)=>{
            event.preventDefault();

        const choixForm = idForm.value; 
        

            let optionProduit = {

            name :  response_page.name,
            _id : response_page._id,
            colors : choixForm,
            quantite : 1,
            price : response_page.price ,

            }
                      
       console.log(optionProduit);

        // -----------Localstrorage-------------------
        let produitAddLocalStorage = JSON.parse(localStorage.getItem("products"));
        const ajout_produitAdd = ()=> {
            produitAddLocalStorage.push(optionProduit);
            localStorage.setItem("products",JSON.stringify(produitAddLocalStorage));
        }
// s'il y a deja des produit dans localstorage
         if (produitAddLocalStorage) { 
            ajout_produitAdd(); 
         }
// s'il n'y a pas de produit dans localstorage
         else { produitAddLocalStorage = [];
            localStorage.clear();
            ajout_produitAdd(); 
         }

 });


    })
    .catch((err) => {
        console.log(err);
    });


    
    