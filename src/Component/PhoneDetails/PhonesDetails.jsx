import React, { useContext } from 'react';
import { MdBookmarkAdd, MdShoppingCart } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import { addCart, addFavorite, getCarts } from '../../utilities';
import { CartContext } from '../../providers/Contexts';

const PhonesDetails = () => {
    const{setCart}=useContext(CartContext)
    const data =useLoaderData()
    const {id}=useParams()
    const singlePhone =data.find(phone=>phone.id===parseInt(id))
    const { image, name, description,brand,model,storage,price,camera_info}=singlePhone || {}
    
    const handleFavorite=()=>{
        addFavorite(singlePhone)
    }
    const handleCart=()=>{
        addCart(singlePhone)
        setCart(getCarts())
    }


    return (
        <div className='w-full py-12'>
            <img src={image} alt="" className='w-full mx-auto md:w-auto mb-8' />
            <div className='flex justify-between' >
            <h1 className='text-6xl font-thin mb-8'>{name}</h1>
            <div className='space-x-4'>
            <button onClick={handleCart} className="relative cursor-pointer inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative"><MdShoppingCart size={20}/></span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </button>

                <button onClick={handleFavorite} className="relative cursor-pointer inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative"><MdBookmarkAdd size={20}/></span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </button>
            </div>
            </div>
            <h1 className='text-4xl font-thin mb-5'> Details: </h1>
            <div className='space-y-4'>
            <p><span className='font-bold'>Brand:</span> {brand}</p>
            <p><span className='font-bold'>Model:</span> {model}</p>
            <div className='space-x-1 flex'><span className='font-bold'>Storage: </span>
            <div className='gap-2 flex'>
            {storage.map(item => {
              return (
                <div key={item}>
                  <div>{item}</div>
                </div>
              )
            })}
            </div>
            </div>
            
            <div className='space-x-1 flex'><span className='font-bold'>Price: </span>
            <div className='gap-2 flex'>
            {Object.entries(price).map(([storage, price]) => (
              <p key={storage} className=''>
                <span>{storage}:</span> <span>{price}</span>
              </p>
            ))}
          </div>
            </div>
            
            <p><span className='font-bold'>Camera Info:</span> {camera_info}</p>
            <p><span className='font-bold'>Description:</span> {description}</p>
            </div>
        </div>
    );
};

export default PhonesDetails;