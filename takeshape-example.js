(async ()=> {
    try{
        const headers = new Headers()
        
        const result = await fetch(
            'https://api.takeshape.io/project/6cdbcc52-5697-475b-872e-fcb6fd0e00d0/v3/graphql',
            {
                method: 'POST',
                headers: {
                    Authentication:'Bearer 6091d7bc2d8946e290486e1526483eda', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    query: `query{
                        getProductList{
                            items{
                            _id
                            name
                            price
                            }
                        }
                    }`
                })
            }
        )

        console.log(result)
    
        const resultJSON = await result.json()

        const container = document.getElementById('resultsContainer')

        const {items} = resultJSON.data.getProductList

        for(const product in items){
            const listItem = document.createElement('li')
            const innerText = document.createTextNode(product.name + " : " + product.price)
            listItem.appendChild(innerText)
            listItem.setAttribute('id', product._id)
            container.appendChild(listItem)
        }

    } catch(error) {
        console.log("TakeShape fetch Error!", error)
    }
})()