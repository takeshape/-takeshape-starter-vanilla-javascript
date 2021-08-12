(async ()=> {
    try{        
        const result = await fetch(
            'YOUR-ENDPOINT-HERE',
            {
                method: 'POST',
                headers: {
                    'Authorization':'Bearer YOUR-API-KEY-HERE', 
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
        
        const resultJSON = await result.json()
        
        const containerList = document.getElementById('resultsContainer')

        const {items} = resultJSON.data.getProductList

        for(const product of items){
            console.log(product)
            const listItem = document.createElement('li')
            const innerText = document.createTextNode(product.name + " : $" + product.price)
            listItem.appendChild(innerText)
            listItem.setAttribute('id', product._id)
            containerList.appendChild(listItem)
        }
    } catch(error) {
        console.log("TakeShape fetch Error!", error)
    }
})()