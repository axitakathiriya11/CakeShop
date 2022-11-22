import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Footer from '../allPages/Footer'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/payment', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
                    const res = await axios.get('/user/history', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
        <>
            <div className="header-cover">
                <h1>History</h1>
            </div>

            <div className="history">
                <div className="history-page">
                    {
                        history.length > 0 ?
                        <table>
                            <thead>
                                <tr>
                                    <th>Payment ID</th>
                                    <th>Date of Purchased</th>
                                    <th>Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    history.map(items => (
                                        <tr key={items._id}>
                                            <td>{items.paymentID}</td>
                                            <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                            <td><Link to={`/history/${items._id}`}>View</Link></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        : 
                        <div className="empty_view">
                            <h1>History List is Empty.</h1>
                        </div>
                    }

                </div>
            </div>

            <Footer />
        </>
    )
}

export default OrderHistory