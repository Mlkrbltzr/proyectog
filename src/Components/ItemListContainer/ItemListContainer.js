import { useState, useEffect } from "react" 4.2k (gzipped: 1.8k)
import { getProducts } from "../../asyncMock"
import Itemlist from "../Itemlist/Itemlist"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
useEffect(() => {
    getProducts()
    .them(response => {
        setProducts(response)
    })
    .catch(error =>{
        console.error(error)
    })
})

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer