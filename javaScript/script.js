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
                    // console.log(response);

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
                                <img src="${imageUrl[i]}" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">${name[i]}</h5>
                                <p class="card-text">${description[i]}</p>
                                <p class="card-price">${price[i]},00 EUR</p>
                                <a href="produit.html?${_id[i]}" class="btn btn-primary">Commander</a>
                            </div> 
                        </a>                               
                            </div>
                        
                            `;
                            positionElement.innerHTML = structureProduits
                        }

                    console.log(response);
                }

                affichageProduits(response)

        })
                .catch((err) => {
                    console.log(err);
        });