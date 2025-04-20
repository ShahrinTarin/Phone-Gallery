import React, { useContext, useEffect, useState } from 'react';
import { getCarts, removeCart } from '../utilities';
import EmptyPage from '../pages/emptypage/EmptyPage';
import PhonesCard from '../Component/PhonesCard/PhonesCard';
import { CartContext } from '../providers/Contexts';




const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    const [displayPhones, setDisplayPhones] = useState([])

    useEffect(() => {
        const savedPhones = getCarts()
        setDisplayPhones(savedPhones)
    }, [])

    const handleDelete = id => {
        removeCart(id)
        const restCart = cart.filter(singleCart => singleCart.id != id)
        setCart(restCart)
        setDisplayPhones(getCarts())
    }

    if (displayPhones.length === 0) return <EmptyPage></EmptyPage>

    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhones.map((phone) => <PhonesCard handleDelete={handleDelete} deletable={true} key={phone.id} phone={phone}></PhonesCard>)
                }
            </div>
        </div>
    );
};

export default Cart;