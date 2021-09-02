// recuperer id dans url
const string_url_id = window.location.search ;
// Utilisation methode .slice pour elever le ? de l'id
const id_produit = string_url_id.slice(1);
// console.log(id_produit);

// Mettre dans une const la reponse du server obtenu avec fetch et http://.../${id}
const resultatApi_Produit = fetch (`http://localhost:3000/api/teddies/${id_produit}`)
// Json()
resultatApi_Produit.then (async(responseData_page) => {
    const response_page = await responseData_page.json();
// console.log(response_page.colors);

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
    

// le formulaire s'adpate au nombre d'options 
    const colorsProduits = response_page.colors ;
    let structureOptions = [];   

    // console.log(colorsProduits.length); 
        for (let j=0;j < colorsProduits.length ; j++) {  

            structureOptions += `
            <option value="option_${j + 1}">${response_page.colors[j]}</option>
            ` ;         
        }
        const positionElement_colors = document.querySelector('.groupeColors');
        positionElement_colors.innerHTML = structureOptions;

    console.log(structureOptions)

// selection dans le dom pour envoi dans le panier 
    const idForm = document.querySelector("#colors")    
    const sendPanier = document.querySelector("#btn_send")
// ecoute de l'evenement au click

    sendPanier.addEventListener("click", (event)=>{
        event.preventDefault();

    const choixForm = idForm.value; 

        let optionProduit = {

        nomProduit :  response_page.name,
        _Id : response_page._id,
        optionProduit : choixForm,
        quantite : 1,
        prix : response_page.price /100,

        }
        console.log(optionProduit);

        
    });


})
.catch((err) => {
    console.log(err);
});


    
    