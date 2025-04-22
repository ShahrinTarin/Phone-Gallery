import React, { useEffect, useState } from 'react';
import PhonesCard from '../../Component/PhonesCard/PhonesCard';
import { getFavorites, removeFavorite } from '../../utilities';
import EmptyPage from '../emptypage/EmptyPage';
import { CgChevronDown } from 'react-icons/cg';

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

     const [sort, setSort] = useState('')
         const handleSort = (type) => {
             setSort(type)
             if(type==='id'){
                 const sortedById = [...displayPhones].sort((a, b) => a.id - b.id)
                 setDisplayPhones(sortedById)
             }
         }

     if(displayPhones.length===0)return<EmptyPage></EmptyPage>

    return (
        <div  className='py-8 md:py-12 space-y-8' >
            <div className='flex justify-between'>
                <div></div>
                <div className="dropdown dropdown-start">
                    <div tabIndex="0" role="button" ><a href="#_" className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative flex items-center justify-center"><p className='font-bold'>Sort By {sort ? sort : ''}</p> <p className='font-bold'><CgChevronDown size={24} /></p></span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a></div>
                    <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort('id')}>Id</a></li>
                    </ul>
                </div>
            </div>

            <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
            {
                displayPhones.map((phone) => <PhonesCard handleDelete={handleDelete} deletable={true} key={phone.id} phone={phone}></PhonesCard>)
            }
        </div>
    </div>

        </div>
    );
};

export default Favorite;