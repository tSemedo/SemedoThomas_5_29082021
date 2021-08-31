let imageUrl = [];
let name = [];
let description = [];
let price = [];
let _id = [];
let structureProduits = "";
let i = []; 

const resultatApi =  fetch ('http://localhost:3000/api/teddies');

        resultatApi.then(responseData)=>{    
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
                                _id[i] = element._id ;                            
                            });

                            structureProduits += `     
                        <a href="produit.html?${_id[i]}" id="link">    
                            <div class="card" style="width: 18rem">                            
                                <img src="${imageUrl[i]}" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">${name[i]}</h5>
                                <p class="card-text">${description[i]}</p>
                                <p class="card-price">${price[i]}</p>
                                <a href="produit.html" class="btn btn-primary">Commander</a>
                            </div>                            
                            </div>
                        </a>
                            `;
                            positionElement.innerHTML = structureProduits
                        }

                    console.log(_id);
                }

                affichageProduits(response)

        })
                .catch((err) => {
                    console.log(err);
        });