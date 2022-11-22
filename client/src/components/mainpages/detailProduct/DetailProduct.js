import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'

import Footer from '../allPages/Footer'

function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;

    return (
        <div className="product-detail">
            <div className="header-cover">
                <h1>Cake Details</h1>
            </div>

            <div className="detail">
                <img src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <h2>{detailProduct.title}</h2>
                    <span>₹{detailProduct.price}</span>
                    <p>{detailProduct.description}</p>
                    <p>Sold: {detailProduct.sold}</p>
                    <Link to="/cart" className="buy-now-btn" onClick={() => addCart(detailProduct)}>
                        Buy Now
                    </Link>
                </div>
            </div>

            <div>
                <h2 className="product-list">Related products</h2>
                <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailProduct.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default DetailProduct