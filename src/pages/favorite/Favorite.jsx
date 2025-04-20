import React, { useEffect, useState } from 'react';
import PhonesCard from '../../Component/PhonesCard/PhonesCard';
import { getFavorites, removeFavorite } from '../../utilities';
import EmptyPage from '../emptypage/EmptyPage';

const Favorite = () => {
     const [displayPhones, setDisplayPhones] = useState([])

     useEffect(()=>{
        const savedPhones =getFavorites()
        setDisplayPhones(savedPhones)
     },[])

     const handleDelete=id=>{
        removeFavorite(id)
        setDisplayPhones(getFavorites())
     }

     if(displayPhones.length===0)return<EmptyPage></EmptyPage>

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

export default Favorite;