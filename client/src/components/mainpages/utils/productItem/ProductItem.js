import React, {useContext} from 'react'
import BtnRender from './BtnRender'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart

    return (
        <div className="product_card">
            {
                isAdmin && 
                <input type="checkbox" className='checkbox' checked={product.checked} onChange={() => handleCheck(product._id)} />
            }

            {
                isAdmin ?
                <div className="item">     
                    <img src={product.images.url} alt="" />
                    <div className="row_btn">
                        <Link id="btn_buy" to="#!" 
                        onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                            Delete
                        </Link>
                        <Link id="btn_view" to={`/edit_product/${product._id}`}>
                            Edit
                        </Link>
                    </div>
                </div>
                :
                <div className="item">     
                    <Link to={`/detail/${product._id}`}>
                        <img src={product.images.url} alt="" />                       

                        <div className='img-cap'>
                            <span>
                                <Link id="btn_buy" to="/cart" onClick={() => addCart(product)}>Add to cart</Link>
                            </span>
                        </div>
                    </Link>
                </div>
            }

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>₹{product.price}</span>
                
            </div>

            {/* { isAdmin &&   
            <div className="row_btn">
                    <Link id="btn_buy" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        Delete
                    </Link>
                    <Link id="btn_view" to={`/edit_product/${product._id}`}>
                        Edit
                    </Link>
            </div>
            } */}

            
        </div>
    )
}

export default ProductItem