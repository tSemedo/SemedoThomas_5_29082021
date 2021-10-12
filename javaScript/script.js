let imageUrl = [];
let name = [];
let description = [];
let price = [];
let _id = [];
let structureProduits = "";
let i = []; 

const resultatApi =  fetch ('http://localhost:3000/api/teddies');

        resultatApi.then(async(responseData)=>{    
            const response = await responseData.json();            

                function affichageProduits(response) {
                    const positionElement = document.querySelector("#section");
                    

                        for (i=0;i < response.length; i++){

                            response.forEach((element,i) => {
                                name[i] = element.name ;
                                description[i] = element.description ;
                                imageUrl[i] = element.imageUrl ;
                                price[i] = element.price ;
                                price[i] = price[i] /100 ;
                                _id[i] = element._id ;                            
                            });

                            structureProduits += ` 
                           
                            <div class="card" style="width: 18rem"> 
                            <a href="produit.html?${_id[i]}" class ="link">                                
                                <img src="${imageUrl[i]}" class="card-img-top imgMenu" />
                            <div class="card-body">
                                <h5 class="card-title">${name[i]}</h5>
                                <p class="card-text">${description[i]}</p>
                                <p class="card-price">${price[i]},00 EUR</p>
                                <a href="produit.html?${_id[i]}" class="btn btnPerso">Commander</a>
                            </div> 
                            </a>                               
                            </div>
                        
                            `;
                            positionElement.innerHTML = structureProduits
                        }
                }
                affichageProduits(response);

//----------------- Test Unitaire n°1
                const testProduitCount = () => {                    
                    const card = document.querySelector("#section").childElementCount;
                    const cardCount = response.length;
                 if (card !== cardCount) {
                       console.error('Le nombre de produit afficher ne correspond pas au nombre de produit présent dans la reponse du serveur');
                 }
                 }
                testProduitCount();   
//----------------- Test Unitaire n°1 FIN             
        })
                .catch((err) => {
                    const errorServeur = document.querySelector(".sectionHome")
                        errorServeur.innerHTML = `<h2 class="txtErrorServeur">Vérifier que le serveur local est lancé (Port 3000)</h2>`;
                        console.error("Vérifier que le serveur local est lancé (Port 3000)");
                    console.log(err);
        });
        
    