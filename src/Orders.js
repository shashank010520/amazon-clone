import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './Orders.css'
import { useStateValue } from './StateProvider'
import Order from './Order'

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders,setOrders] = useState([]);

    useEffect(() => {
        db
          .collection('users')
          .doc(user?.uid)
          .collection('orders')
          .orderBy('created, desc')
          .onSnapshot(snapShot => (
              setOrders(snapShot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
          })))
          ))
        }, [])


    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__orders'>
                {orders?.map(order => (
                    <Order order={order}/>
                ))}

            </div>
        </div>
    )
}

export default Orders
