const img = document.getElementById ('img0')

const name = document.getElementById ('name0')

const description = document.getElementById ('description0')

const price = document.getElementById ('price0')

fetch ('http://localhost:3000/api/teddies')
    .then ( res=> res.json())
    .then (data=> { 
        name.textContent = data[0].name ;
        img.src = data[0].imageUrl;
        description.textContent = data[0].description
        price.textContent = data[0].price
    });


fetch ('http://localhost:3000/api/teddies')
    .then ( res=> res.json())
    .then (data=> { 
        name1.textContent = data[1].name ;
        img1.src = data[1].imageUrl;
        description1.textContent = data[1].description
        price1.textContent = data[1].price
    })

fetch ('http://localhost:3000/api/teddies')
    .then ( res=> res.json())
    .then (data=> { 
        name2.textContent = data[2].name ;
        img2.src = data[2].imageUrl;
        description2.textContent = data[2].description
        price2.textContent = data[2].price
    })

fetch ('http://localhost:3000/api/teddies')
    .then ( res=> res.json())
    .then (data=> { 
        name3.textContent = data[3].name ;
        img3.src = data[3].imageUrl;
        description3.textContent = data[3].description
        price3.textContent = data[3].price
    })

fetch ('http://localhost:3000/api/teddies')
    .then ( res=> res.json())
    .then (data=> { 
        name4.textContent = data[4].name ;
        img4.src = data[4].imageUrl;
        description4.textContent = data[4].description
        price4.textContent = data[4].price
    })


fetch ('http://localhost:3000/api/teddies')
    .then (res=> res.json())
    .then (data => console.log(data))

